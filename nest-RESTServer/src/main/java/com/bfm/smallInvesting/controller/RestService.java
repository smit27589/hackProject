package com.bfm.smallInvesting.controller;

import java.util.LinkedList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bfm.smallInvesting.deserializer.TransactionsDeserializer;
import com.bfm.smallInvesting.dto.FastLinkURL;
import com.bfm.smallInvesting.dto.Transaction;
import com.bfm.smallInvesting.util.YodleeUtil;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class RestService {

  String finAppId = "10003600";//"10003620";

  @RequestMapping(value="/linkBankAccount", method=RequestMethod.GET)
  @ResponseBody
  public FastLinkURL getYodleeFastLinkURLValues() {
    String usernameValue = "sbMemvishah904";
    String passwordValue = "sbMemvishah904#123";

    String cobSessionToken = YodleeUtil.loginCobrand();
    String userSessionToken = YodleeUtil.loginUser(cobSessionToken, usernameValue, passwordValue);
    FastLinkURL fastLinkURL = YodleeUtil.getFastLinkURL(userSessionToken, cobSessionToken, 
      finAppId);
    
    return fastLinkURL;
  }
  
  @RequestMapping(value="/getTransactions", method=RequestMethod.GET)
  @ResponseBody
  public List<Transaction> getTransactions() {
    String usernameValue = "sbMemvishah905";
    String passwordValue = "sbMemvishah905#123";

    String cobSessionToken = YodleeUtil.loginCobrand();
    String userSessionToken = YodleeUtil.loginUser(cobSessionToken, usernameValue, passwordValue);
    String transactionsJSON = YodleeUtil.transactionSearchService(cobSessionToken, userSessionToken, 
      "all", "500", "1", "500", "1", "1","TEST", "USD", "12-01-2015","03-10-2016",
      "ALL_TRANSACTION", "true");
    
    JSONObject jsonObject = new JSONObject(transactionsJSON);
    JSONArray jsonTransactions = JSONArray.class.cast(JSONObject.class.cast(jsonObject.get("searchResult")).get("transactions"));
    
    GsonBuilder gsonBuilder = new GsonBuilder();
    gsonBuilder.registerTypeAdapter(Transaction.class, new TransactionsDeserializer());
    Gson gson = gsonBuilder.create();
    
    List<Transaction> transactions = new LinkedList<Transaction>();
    for (int i = 0; i < jsonTransactions.length(); i++) {
      JSONObject jsonTransaction = jsonTransactions.getJSONObject(i);
      Transaction transaction = gson.fromJson(jsonTransaction.toString(), Transaction.class);
      if (Double.compare(transaction.getRemainder(), 0.0d) != 0) {
        transactions.add(transaction);
      }
    }
    return transactions;
  }
}
