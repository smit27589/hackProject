package com.bfm.smallInvesting.deserializer;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;

import com.bfm.smallInvesting.dto.Transaction;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;

public class TransactionsDeserializer implements JsonDeserializer<Transaction> {

  @Override
  public Transaction deserialize(JsonElement json, Type typeOf,
    JsonDeserializationContext context) throws JsonParseException {
    try {

      JsonObject jsonObject = json.getAsJsonObject();

      Integer transactionId = jsonObject.get("viewKey").getAsJsonObject()
      .get("transactionId").getAsInt();
      
      SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
      Date postDate = sdf.parse(jsonObject.get("postDate").getAsString().substring(0, 10));
      Double amount = jsonObject.get("amount").getAsJsonObject().get("amount").getAsDouble();
      String currency = jsonObject.get("amount").getAsJsonObject().get("currencyCode").getAsString();
      String description = jsonObject.get("description").getAsJsonObject()
      .get("simpleDescription").getAsString().replaceAll("\\s+", " ");
      String merchantName = null;
      if (jsonObject.get("description").getAsJsonObject().get("merchantName") != null) {
        merchantName = jsonObject.get("description").getAsJsonObject().get("merchantName").getAsString();
      } else {
        merchantName = StringUtils.abbreviate(description, 20);
      }
      String category = jsonObject.get("category").getAsJsonObject().get("categoryName").getAsString();
      String type = jsonObject.get("transactionBaseType").getAsString();
      
      Transaction transaction = new Transaction();
      transaction.setTransactionId(transactionId);
      transaction.setAmount(amount);
      transaction.setCurrency(currency);
      transaction.setDescription(description);
      transaction.setPostDate(postDate);
      transaction.setProcessed(false);
      Double remainder = 0d;
      if (StringUtils.equalsIgnoreCase("credit", type)) {
        remainder = new BigDecimal(amount - Math.floor(amount)).setScale(2, RoundingMode.HALF_EVEN).doubleValue();
      } else {
        remainder = new BigDecimal(Math.ceil(amount) - amount).setScale(2, RoundingMode.HALF_EVEN).doubleValue();
      }
      transaction.setRemainder(remainder);
      transaction.setType(type);
      transaction.setCategory(category);
      transaction.setMerchantName(merchantName);
      return transaction;

    } catch (ParseException e) {
      e.printStackTrace();
    }
    return null;
  }

}
