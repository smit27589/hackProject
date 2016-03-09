package com.bfm.smallInvesting.dto;

public class FastLinkURL {

  String rsession;
  String token;
  String finAppId;
  String extraParams;
  boolean redirectReq;
  
  public String getRsession() {
    return rsession;
  }
  public void setRsession(String rsession) {
    this.rsession = rsession;
  }
  public String getToken() {
    return token;
  }
  public void setToken(String token) {
    this.token = token;
  }
  public String getFinAppId() {
    return finAppId;
  }
  public void setFinAppId(String finAppId) {
    this.finAppId = finAppId;
  }
  public String getExtraParams() {
    return extraParams;
  }
  public void setExtraParams(String extraParams) {
    this.extraParams = extraParams;
  }
  public boolean isRedirectReq() {
    return redirectReq;
  }
  public void setRedirectReq(boolean redirectReq) {
    this.redirectReq = redirectReq;
  }
}
