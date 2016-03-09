package com.bfm.smallInvesting.util;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONArray;
import org.json.JSONObject;

import com.bfm.smallInvesting.dto.FastLinkURL;
import com.google.appengine.api.urlfetch.HTTPMethod;
import com.google.appengine.api.urlfetch.HTTPRequest;
import com.google.appengine.api.urlfetch.HTTPResponse;
import com.google.appengine.api.urlfetch.URLFetchService;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;

public class YodleeUtil {

	private YodleeUtil() {}

	private static String HOST_URI = "https://rest.developer.yodlee.com/services/srest/restserver/";
	private static String NODE_URI = "https://node.developer.yodlee.com/authenticate/restserver/";

	private static String GET_TOKEN = "v1.0/authenticator/token";
	private static String GET_OAUTH_ACCESS_TOKEN = "v1.0/jsonsdk/OAuthAccessTokenManagementService/getOAuthAccessToken";
	private static String COB_LOGIN_URL = "v1.0/authenticate/coblogin";
	private static String USER_LOGIN_URL = "v1.0/authenticate/login";
	private static String ITEM_MTMT_URL = "v1.0/jsonsdk/ItemManagement/getLoginFormForContentService";
	private static String SEARCH_SITE_URL = "v1.0/jsonsdk/SiteTraversal/searchSite";
	private static String USER_REGISTER_URL = "v1.0/jsonsdk/UserRegistration/register3";
	private static String USER_TRANSAC_SERVICE = "v1.0/jsonsdk/TransactionSearchService/executeUserSearchRequest";
	private static String DATA_SERVICE = "v1.0/jsonsdk/DataService/getItemSummaries";
	private static String GET_SITE_INFO = "v1.0/jsonsdk/SiteTraversal/getSiteInfo";
	private static String GET_SITE_LOGIN_FORM = "v1.0/jsonsdk/SiteAccountManagement/getSiteLoginForm";
	private static String GET_ALL_SITES = "v1.0/jsonsdk/SiteTraversal/getAllSites";
	private static String GET_POPULAR_SITES = "v1.0/jsonsdk/SiteTraversal/getPopularSites";
	private static String ITEM_SUMM_FOR_SITE = "v1.0/jsonsdk/DataService/getItemSummariesForSite";
	private static String ADD_SITE_ACC = "v1.0/jsonsdk/SiteAccountManagement/addSiteAccount1";
	private static String REMOVE_ITEM = "v1.0/jsonsdk/ItemAccountManagement/removeItem";

	//Common parameters for all APIs except for cobrand login or cobrand creation APIs
	private static String paramNameCobSessionToken = "cobSessionToken";
	private static String paramNameUserSessionToken = "userSessionToken";
	private static String paramNameUserRSessionToken = "rsession";
	
	//Cobrand login API parameters
	private static String paramNameCobrandLogin = "cobrandLogin";
	private static String paramNameCobrandPassword = "cobrandPassword";

	//User login API parameters
	private static String paramNameUserLogin = "login";
	private static String paramNameUserPassword = "password";

	//Create cobrand credentials API parameters
	private static String paramNameNewUserLogin = "userCredentials.loginName";
	private static String paramNameNewUserPassword = "userCredentials.password";
	private static String paramNameInstanceType = "userCredentials.objectInstanceType";
	private static String paramNameUserEmail = "userProfile.emailAddress";

	private static String paramNamecontainerType = "transactionSearchRequest.containerType";
	private static String paramNamehigherFetchLimit = "transactionSearchRequest.higherFetchLimit";
	private static String paramNamelowerFetchLimit = "transactionSearchRequest.lowerFetchLimit";
	private static String paramNameendNumber = "transactionSearchRequest.resultRange.endNumber";
	private static String paramNamestartNumber = "transactionSearchRequest.resultRange.startNumber";
	private static String paramNameclientId = "transactionSearchRequest.searchClients.clientId";
	private static String paramNameclientName = "transactionSearchRequest.searchClients.clientName";
	private static String paramNamecurrencyCode = "transactionSearchRequest.searchFilter.currencyCode";
	private static String paramNamefromDate = "transactionSearchRequest.searchFilter.postDateRange.fromDate";
	private static String paramNametoDate = "transactionSearchRequest.searchFilter.postDateRange.toDate";
	private static String paramNametransactionSplitType = "transactionSearchRequest.searchFilter.transactionSplitType";
	private static String paramNameignoreUserInput = "transactionSearchRequest.ignoreUserInput";

	private static String paramNameFinAppId = "finAppId";
	private static String paramNameitemAccountId = "itemAccountId";
	
	public static String getToken(String cobrandSessionToken, String userSessionToken, String finAppId) {
		String tokenStr = null;
		try {

			URLFetchService urlFetchService = URLFetchServiceFactory.getURLFetchService();
			URL url = new URL(HOST_URI + GET_TOKEN);

			List<BasicNameValuePair> args = new ArrayList<BasicNameValuePair>();
			args.add(new BasicNameValuePair(paramNameCobSessionToken, cobrandSessionToken));
			args.add(new BasicNameValuePair(paramNameUserRSessionToken, userSessionToken));
			args.add(new BasicNameValuePair(paramNameFinAppId, finAppId));
			String argString = URLEncodedUtils.format(args, "utf-8");

			HTTPRequest request = new HTTPRequest(url, HTTPMethod.POST);
			request.setPayload(argString.getBytes());

			HTTPResponse httpResponse = urlFetchService.fetch(request);
			String result = new String(httpResponse.getContent(), "UTF-8");

			JSONObject jsonObject = new JSONObject(result);
			try {
				jsonObject = jsonObject.getJSONObject("finappAuthenticationInfos");
			} catch(Exception e) {
				JSONArray infoArray = jsonObject.getJSONArray("finappAuthenticationInfos");
				jsonObject = ( JSONObject ) infoArray.get(0);
			}
			tokenStr = (String) jsonObject.get("token");
			System.out.println(jsonObject.get("finappId")+" token is : "+tokenStr.length());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return tokenStr;
	}

	
	public static String getOAuthAccessToken(String cobrandSessionToken, String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + GET_OAUTH_ACCESS_TOKEN;
		try {
			HttpsURLConnection.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);
			pm.addParameter("bridgetAppId", "10003200");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;

	}
	
	public static String loginCobrand(String cobrandLoginValue, String cobrandPasswordValue) {
		String cobrandSessionToken = null;

		try {

			URLFetchService urlFetchService = URLFetchServiceFactory.getURLFetchService();
			URL url = new URL(HOST_URI + COB_LOGIN_URL);

			List<BasicNameValuePair> args = new ArrayList<BasicNameValuePair>();
			args.add(new BasicNameValuePair(paramNameCobrandLogin, cobrandLoginValue));
			args.add(new BasicNameValuePair(paramNameCobrandPassword, cobrandPasswordValue));
			String argString = URLEncodedUtils.format(args, "utf-8");

			HTTPRequest request = new HTTPRequest(url, HTTPMethod.POST);
			request.setPayload(argString.getBytes());

			HTTPResponse httpResponse = urlFetchService.fetch(request);
			String result = new String(httpResponse.getContent(), "UTF-8");

			JSONObject jsonObject = new JSONObject(result);
			JSONObject cobConvCreds = jsonObject.getJSONObject("cobrandConversationCredentials");
			cobrandSessionToken = (String) cobConvCreds.get("sessionToken");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cobrandSessionToken;
	}
	
	public static String loginCobrand() {
		return loginCobrand("sbCobvishah90", "***************secret***********");
	}

	public static String loginUser(String cobrandSessionToken, String usernameValue,
		String passwordValue) {
		String userSessionToken = null;

		try {

			URLFetchService urlFetchService = URLFetchServiceFactory.getURLFetchService();
			URL url = new URL(HOST_URI + USER_LOGIN_URL);

			List<BasicNameValuePair> args = new ArrayList<BasicNameValuePair>();
			args.add(new BasicNameValuePair(paramNameUserLogin, usernameValue));
			args.add(new BasicNameValuePair(paramNameUserPassword, passwordValue));
			args.add(new BasicNameValuePair(paramNameCobSessionToken, cobrandSessionToken));
			String argString = URLEncodedUtils.format(args, "utf-8");

			HTTPRequest request = new HTTPRequest(url, HTTPMethod.POST);
			request.setPayload(argString.getBytes());

			HTTPResponse httpResponse = urlFetchService.fetch(request);
			String result = new String(httpResponse.getContent(), "UTF-8");

			JSONObject jsonObject = new JSONObject(result);
			JSONObject userContext = jsonObject.getJSONObject("userContext");
			JSONObject userConvCreds = userContext
			.getJSONObject("conversationCredentials");
			userSessionToken = (String) userConvCreds.get("sessionToken");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userSessionToken;
	}

	public String getLoginFormDetails(String cobrandSessionToken,
		String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + ITEM_MTMT_URL;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);
			pm.addParameter("contentServiceId", "11175");
			pm.addParameter("contentServiceId.objectInstanceType",
				"java.lang.Long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}

	public static String registerUser(String cobrandSessionToken, String newUsername,
		String newPassword, String instanceType, String newEmail) {
		// String userSessionToken=null;
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + USER_REGISTER_URL;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			//Cobrand session token
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			
			//New cobrand credentials parameters
			pm.addParameter(paramNameNewUserLogin, newUsername);
			pm.addParameter(paramNameNewUserPassword, newPassword);
			pm.addParameter(paramNameInstanceType, instanceType);
			pm.addParameter(paramNameUserEmail, newEmail);

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return null;
	}

	public static String transactionSearchService(String cobrandSessionToken,
		String userSessionToken, String containerType,
		String higherFetchLimit, String lowerFetchLimit, String endNumber,
		String startNumber, String clientId, String clientName,
		String currencyCode, String fromDate, String toDate,
		String transactionSplitType, String ignoreUserInput) {
		
		String transactionsJSON = null;

		try {

			URLFetchService urlFetchService = URLFetchServiceFactory.getURLFetchService();
			URL url = new URL(HOST_URI + USER_TRANSAC_SERVICE);

			List<BasicNameValuePair> args = new ArrayList<BasicNameValuePair>();
			args.add(new BasicNameValuePair(paramNameCobSessionToken, cobrandSessionToken));
			args.add(new BasicNameValuePair(paramNameUserSessionToken, userSessionToken));
			args.add(new BasicNameValuePair(paramNamecontainerType, containerType));
			args.add(new BasicNameValuePair(paramNamehigherFetchLimit, higherFetchLimit));
			args.add(new BasicNameValuePair(paramNamelowerFetchLimit, lowerFetchLimit));
			args.add(new BasicNameValuePair(paramNameendNumber, endNumber));
			args.add(new BasicNameValuePair(paramNamestartNumber, startNumber));
			args.add(new BasicNameValuePair(paramNameclientId, clientId));
			args.add(new BasicNameValuePair(paramNameclientName, clientName));
			args.add(new BasicNameValuePair(paramNamecurrencyCode, currencyCode));
			args.add(new BasicNameValuePair(paramNamefromDate, fromDate));
			args.add(new BasicNameValuePair(paramNametoDate, toDate));
			args.add(new BasicNameValuePair(paramNametransactionSplitType, transactionSplitType));
			args.add(new BasicNameValuePair(paramNameignoreUserInput, ignoreUserInput));
			String argString = URLEncodedUtils.format(args, "utf-8");

			HTTPRequest request = new HTTPRequest(url, HTTPMethod.POST);
			request.setPayload(argString.getBytes());

			HTTPResponse httpResponse = urlFetchService.fetch(request);
			String result = new String(httpResponse.getContent(), "UTF-8");

			transactionsJSON = result;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return transactionsJSON;
	}

	public static String getItemSummaries(String cobrandSessionToken,
		String userSessionToken) {
		// String userSessionToken=null;
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + DATA_SERVICE;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			/*
			 * String source=pm.getResponseBodyAsString(); JSONObject
			 * jsonObject= new JSONObject(source); JSONObject userContext=
			 * jsonObject.getJSONObject("userContext"); JSONObject
			 * userConvCreds=
			 * userContext.getJSONObject("conversationCredentials");
			 * userSessionToken= (String) userConvCreds.get("sessionToken");
			 */

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return null;
	}

	public String getItemSummariesForSite(String cobrandSessionToken,
		String userSessionToken) {
		// String userSessionToken=null;
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + ITEM_SUMM_FOR_SITE;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);
			pm.addParameter("memSiteAccId", "10268903");
			pm.addParameter("memSiteAccId.objectInstanceType", "java.lang.Long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			/*
			 * String source=pm.getResponseBodyAsString(); JSONObject
			 * jsonObject= new JSONObject(source); JSONObject userContext=
			 * jsonObject.getJSONObject("userContext"); JSONObject
			 * userConvCreds=
			 * userContext.getJSONObject("conversationCredentials");
			 * userSessionToken= (String) userConvCreds.get("sessionToken");
			 */

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return null;
	}

	public static void removeItemAccount(String cobrandSessionToken,
		String userSessionToken, String itemId) {
	    // String userSessionToken=null;
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + REMOVE_ITEM;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);
			pm.addParameter(paramNameitemAccountId, itemId);

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}
	}
	public String searchSite(String cobrandSessionToken, String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + SEARCH_SITE_URL;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);
			pm.addParameter("siteSearchString", "america");
			// pm.addParameter("siteSearchString.objectInstanceType",
			// "java.lang.String");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}

	public static String getAllSites(String cobrandSessionToken,
		String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + GET_ALL_SITES;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}

	public String addSiteAccount(String cobrandSessionToken,
		String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String url = HOST_URI + ADD_SITE_ACC;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);

			pm.addParameter("siteId", "2852");
			pm.addParameter("credentialFields.enclosedType", "com.yodlee.common.FieldInfoSingle");

			pm.addParameter("credentialFields[0].displayName", "Online ID");
			pm.addParameter("credentialFields[0].fieldType.typeName", "IF_LOGIN");
			pm.addParameter("credentialFields[0].helpText", "5371");
			pm.addParameter("credentialFields[0].maxlength", "40");

			pm.addParameter("credentialFields[0].name", "LOGIN");
			pm.addParameter("credentialFields[0].isEditable", "true");
			pm.addParameter("credentialFields[0].isOptional", "false");
			pm.addParameter("credentialFields[0].valuePattern", "null");
			pm.addParameter("credentialFields[0].defaultValue", "null");
			pm.addParameter("credentialFields[0].value", "vns1990");
			pm.addParameter("credentialFields[0].validValues", "test1");
			pm.addParameter("credentialFields[0].displayValidValues", "null");
			pm.addParameter("credentialFields[0].valueIdentifier", "LOGIN");
			pm.addParameter("credentialFields[0].valueMask", "LOGIN_FIELD");
			pm.addParameter("credentialFields[0].validationRules", "null");
			pm.addParameter("credentialFields[0].size", "20");
			pm.addParameter("credentialFields[0].userProfileMappingExpression",
				"null");
			pm.addParameter("credentialFields[0].fieldErrorCode", "1");
			pm.addParameter("credentialFields[0].fieldErrorMessage", "null");

			pm.addParameter("credentialFields[1].name", "PASSWORD");
			pm.addParameter("credentialFields[1].displayName", "Password");
			pm.addParameter("credentialFields[1].isEditable", "true");
			pm.addParameter("credentialFields[1].isOptional", "false");
			pm.addParameter("credentialFields[1].helpText", "AUS_Row_Name");
			pm.addParameter("credentialFields[1].valuePattern", "null");
			pm.addParameter("credentialFields[1].defaultValue", "null");
			pm.addParameter("credentialFields[1].value", "test2");
			pm.addParameter("credentialFields[1].validValues", "test2");
			pm.addParameter("credentialFields[1].displayValidValues", "null");
			pm.addParameter("credentialFields[1].valueIdentifier", "PASSWORD");
			pm.addParameter("credentialFields[1].valueMask", "LOGIN_FIELD");
			pm.addParameter("credentialFields[1].fieldType", "PASSWORD");
			pm.addParameter("credentialFields[1].validationRules", "null");
			pm.addParameter("credentialFields[1].size", "20");
			pm.addParameter("credentialFields[1].maxlength", "40");
			pm.addParameter("credentialFields[1].userProfileMappingExpression",
				"null");
			pm.addParameter("credentialFields[1].fieldErrorCode", "1");
			pm.addParameter("credentialFields[1].fieldErrorMessage", "null");
			// pm.addParameter("siteId.objectInstanceType", "long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			
			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}

	public static String getSiteInfo(String cobrandSessionToken,
		String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		// String excludeContentServiceInfo = "false";
		String reqSpecifier = "128";
		String siteId = "2852";

		String url = HOST_URI + GET_SITE_INFO;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);

			// spm.addParameter("siteFilter.excludeContentServiceInfo" ,
			// excludeContentServiceInfo);
			// pm.addParameter("siteFilter.excludeContentServiceInfo.objectInstanceType","java.lang.Boolean");
			pm.addParameter("siteFilter.reqSpecifier", reqSpecifier);
			// pm.addParameter("siteFilter.reqSpecifier.objectInstanceType" ,
			// "java.lang.Integer");
			pm.addParameter("siteFilter.siteId", siteId);
			// pm.addParameter("siteFilter.siteId.objectInstanceType" ,
			// "java.lang.Long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			
			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}
	
	public static String getSiteLoginForm(String cobrandSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		String siteId = "2852";

		String url = HOST_URI + GET_SITE_LOGIN_FORM;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
      //pm.addParameter(paramNameUserSessionToken, userSessionToken);

      // spm.addParameter("siteFilter.excludeContentServiceInfo" ,
      // excludeContentServiceInfo);
      // pm.addParameter("siteFilter.excludeContentServiceInfo.objectInstanceType","java.lang.Boolean");
      //pm.addParameter("siteFilter.reqSpecifier", reqSpecifier);
      // pm.addParameter("siteFilter.reqSpecifier.objectInstanceType" ,
      // "java.lang.Integer");
			pm.addParameter("siteId", siteId);
      // pm.addParameter("siteFilter.siteId.objectInstanceType" ,
      // "java.lang.Long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return null;
	}

	public static String getPopularSites(String cobrandSessionToken,
		String userSessionToken) {
		DefaultHttpClient httpclient = new DefaultHttpClient();

		// String excludeContentServiceInfo = "false";
		/*
		 * String reqSpecifier = "128"; String siteId = "16441";
		 */

		String url = HOST_URI + GET_POPULAR_SITES;
		try {
			HttpsURLConnection
			.setDefaultHostnameVerifier(new NullHostnameVerifier());

			PostMethod pm = new PostMethod(url);
			pm.addParameter(paramNameCobSessionToken, cobrandSessionToken);
			pm.addParameter(paramNameUserSessionToken, userSessionToken);

			// spm.addParameter("siteFilter.excludeContentServiceInfo" ,
			// excludeContentServiceInfo);
			// pm.addParameter("siteFilter.excludeContentServiceInfo.objectInstanceType","java.lang.Boolean");
			pm.addParameter("siteFilter.siteLevel", "POPULAR_ZIP");
			// pm.addParameter("siteFilter.siteLevel" , "ZIP");
			/*
			 * pm.addParameter("siteFilter.siteLevel.CODE_CITY" , "CA");
			 * pm.addParameter("siteFilter.siteLevel.CODE_STATE" , "TX");
			 * pm.addParameter("siteFilter.siteLevel.CODE_COUNTRY" , "4");
			 */
			// pm.addParameter("siteFilter.reqSpecifier.objectInstanceType" ,
			// "java.lang.Integer");
			// pm.addParameter("siteFilter.siteId" , siteId);
			// pm.addParameter("siteFilter.siteId.objectInstanceType" ,
			// "java.lang.Long");

			HttpClient hc = new HttpClient();
			hc.executeMethod(pm);

			String source = pm.getResponseBodyAsString();
			JSONArray jsonArray = new JSONArray(source);
			JSONObject jsonObject = jsonArray.getJSONObject(0);
			System.out.println(jsonObject.getString("defaultDisplayName"));
			System.out.println(jsonObject.getJSONArray("contentServiceInfos"));
			
			//System.out.println(pm.getResponseBodyAsString());

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return userSessionToken;
	}

	public static void getFastLink(String userSessionToken, String cobrandSessionToken, String finAppId) {

		String token = YodleeUtil.getToken(cobrandSessionToken, userSessionToken, finAppId);
		String formHtmlContent = "<div class='center processText'>Processing...</div>" 
		+ "<div>"
		+ "<form action='${NODE_URL}' method='post' id='rsessionPost'>"
		+ " RSession : <input type='text' name='rsession' placeholder='rsession' value='${RSESSION}' id='rsession'/><br/>"
		+ " FinappId : <input type='text' name='app' placeholder='FinappId' value='${FINAPP_ID}' id='finappId'/><br/>"
		+ " Redirect : <input type='text' name='redirectReq' placeholder='true/false' value='true'/><br/>"
		+ " Token : <input type='text' name='token' placeholder='token' value='${TOKEN}' id='token'/><br/>" 
		+ " Extra Params : <input type='text' name='extraParams' placeholer='Extra Params' value='${EXTRA_PARAMS}' id='extraParams'/><br/>"
		+ "</form></div><script>document.getElementById('rsessionPost').submit();</script>";

		try {
			String data = formHtmlContent.replace("${NODE_URL}", NODE_URI).replace("${RSESSION}", userSessionToken)
			.replace("${TOKEN}", token).replace("${EXTRA_PARAMS}", "").replace("${FINAPP_ID}", finAppId);
			File file = new File("post.html");
			if( !file.exists() ) {
				file.createNewFile();
			}
			FileWriter writer = new FileWriter(file);
			writer.write(data);
			writer.close();

			String url = "file://"+file.getAbsolutePath().replace("\\", "/");
			System.out.println(url);
      //chrome browser
      //Runtime.getRuntime().exec(new String[]{"cmd", "/c","start chrome "+url});
      //firefox browser
      //Runtime.getRuntime().exec(new String[]{"cmd", "/c","start firefox "+url});

		} catch (IOException e) {
      // TODO Auto-generated catch block
			e.printStackTrace();
		}  
	}
	
	public static FastLinkURL getFastLinkURL(String userSessionToken, String cobrandSessionToken, String finAppId) {

		String token = YodleeUtil.getToken(cobrandSessionToken, userSessionToken, finAppId);

		FastLinkURL fastLinkURL = new FastLinkURL();
		fastLinkURL.setRsession(userSessionToken);
		fastLinkURL.setFinAppId(finAppId);
		fastLinkURL.setToken(token);
		fastLinkURL.setExtraParams("");
		fastLinkURL.setRedirectReq(true);

		return fastLinkURL;
	}
	
	/*public static void main(String[] args) {
		String cobrandLoginValue = "";
		String cobrandPasswordValue = "";

		String usernameValue = "sbMemvishah901";
		String passwordValue = "sbMemvishah901#123";

		YodleeUtil tPost = new YodleeUtil();
		String cobrandSessionToken = null;

		System.out.println("\n\n\n\n loginCobrand ");
		cobrandSessionToken = YodleeUtil.loginCobrand(cobrandLoginValue, cobrandPasswordValue);
		
		System.out.println("\n\n\n\n loginUser ");
		String userSessionToken = YodleeUtil.loginUser(cobrandSessionToken, usernameValue, passwordValue);

		// System.out.println("createUser ----------\n"+value);
//		cobrandPasswordValue = tPost.createAndRegisterUser(cobrandLoginValue);
		
		// System.out.println("createUserData ----------\n"+value);
//		cobrandSessionToken = tPost.loginCobrand(cobrandLoginValue, cobrandPasswordValue);
//		tPost.createUserData(cobrandSessionToken);

		// System.out.println("getUserData ----------\n"+value);
//		 String value = tPost.getUserData(cobrandSessionToken);

		  System.out.println("getLoginFormDetails ----------\n"+usernameValue);
		  tPost.getLoginFormDetails(cobrandSessionToken, userSessionToken);

		  System.out.println("\n\n\n\n searchSite ");
		  tPost.searchSite(cobrandSessionToken, userSessionToken);
		
		// System.out.println("\n\n\n\n Register ");
//			String newUsernameValue = "mem";
//			String newPasswordValue = "yodlee123";
//			String newInstanceTypeValue = "com.yodlee.ext.login.PasswordCredentials";
//			String newEmailValue = "a@b.com";
		 
		// tPost.registerUser(cobrandSessionToken, newUsernameValue,
		// newPasswordValue,newInstanceTypeValue, newEmailValue);
		
//		  System.out.println("\n Transaction \n\n\n");
//		  tPost.transactionSearchService(cobrandSessionToken,userSessionToken,
//		      "all", "500", "1", "500", "1", "1", "DataSearchService", "USD",
//		      "07-09-2011", "07-09-2013", "ALL_TRANSACTION", "true");
//		 
//		System.out.println("\n ItemSummaries \n\n\n");
//		tPost.getItemSummaries(cobrandSessionToken,userSessionToken);
//		 
//		System.out.println("\n GetSiteInfo \n\n\n");
//		tPost.getSiteInfo(cobrandSessionToken, userSessionToken);
//		
//		System.out.println("\n GetAllSites \n\n\n");
//		tPost.getAllSites(cobrandSessionToken, userSessionToken);
//
//		System.out.println("\n GetPopularSites \n\n\n");
//		tPost.getPopularSites(cobrandSessionToken, userSessionToken);
//
//		System.out.println("\n GetItemSummariesForSite \n\n\n");
//		tPost.getItemSummariesForSite(cobrandSessionToken,userSessionToken);
//
//		System.out.println("\n addSiteAccount \n\n\n");
//		tPost.addSiteAccount(cobrandSessionToken,userSessionToken);
		}*/

		private static class NullHostnameVerifier implements HostnameVerifier {
			public boolean verify(String hostname, SSLSession session) {
				return true;
			}
		}	
	}