# SendPostApi.TrackApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackRouterTrackEmailOpen**](TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId}/1.png | 
[**trackRouterTrackLinkClick**](TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId} | 
[**trackRouterTrackUnsubscribe**](TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId} | 


<a name="trackRouterTrackEmailOpen"></a>
# **trackRouterTrackEmailOpen**
> trackRouterTrackEmailOpen(ipId, accountId, subAccountId, messageId, emailType)



Track Email Open

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var ipId = 789; // Number | The id of ip from which this email message was sent

var accountId = 789; // Number | The id of account from which email is being sent

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = "messageId_example"; // String | The UUID of message which was sent

var emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackEmailOpen(ipId, accountId, subAccountId, messageId, emailType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackRouterTrackLinkClick"></a>
# **trackRouterTrackLinkClick**
> trackRouterTrackLinkClick(ipId, accountId, subAccountId, messageId, emailType, redirecturl)



Track Link Click

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var ipId = 789; // Number | The id of ip from which this email message was sent

var accountId = 789; // Number | The id of account from which email is being sent

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = "messageId_example"; // String | The UUID of message which was sent

var emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address

var redirecturl = "redirecturl_example"; // String | The encoded redirect URL


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackLinkClick(ipId, accountId, subAccountId, messageId, emailType, redirecturl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 
 **redirecturl** | **String**| The encoded redirect URL | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackRouterTrackUnsubscribe"></a>
# **trackRouterTrackUnsubscribe**
> trackRouterTrackUnsubscribe(ipId, accountId, subAccountId, messageId, emailType)



track link click

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var ipId = 789; // Number | The id of ip from which this email message was sent

var accountId = 789; // Number | The id of account from which email is being sent

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = "messageId_example"; // String | The UUID of message which was sent

var emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackUnsubscribe(ipId, accountId, subAccountId, messageId, emailType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

