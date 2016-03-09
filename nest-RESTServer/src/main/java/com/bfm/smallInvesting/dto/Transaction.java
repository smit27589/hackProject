package com.bfm.smallInvesting.dto;

import java.util.Date;

public class Transaction {
  
  private String description;
  private String currency;
  private Double amount;
  private Double remainder;
  private Date postDate;
  private Boolean processed;
  private Integer transactionId;
  private String type;
  private String merchantName;
  private String category;
  
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public String getCurrency() {
    return currency;
  }
  public void setCurrency(String currency) {
    this.currency = currency;
  }
  public Double getAmount() {
    return amount;
  }
  public void setAmount(Double amount) {
    this.amount = amount;
  }
  public Double getRemainder() {
    return remainder;
  }
  public void setRemainder(Double remainder) {
    this.remainder = remainder;
  }
  public Date getPostDate() {
    return postDate;
  }
  public void setPostDate(Date postDate) {
    this.postDate = postDate;
  }
  public Boolean getProcessed() {
    return processed;
  }
  public void setProcessed(Boolean processed) {
    this.processed = processed;
  }
  public Integer getTransactionId() {
    return transactionId;
  }
  public void setTransactionId(Integer transactionId) {
    this.transactionId = transactionId;
  }
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getMerchantName() {
    return merchantName;
  }
  public void setMerchantName(String merchantName) {
    this.merchantName = merchantName;
  }
  public String getCategory() {
    return category;
  }
  public void setCategory(String category) {
    this.category = category;
  }
}
