# SendPostApi.TrackApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackRouterTrackEmailOpen**](TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{subAccountId}/{messageId}/1.png | 
[**trackRouterTrackLinkClick**](TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{subAccountId}/{messageId} | 
[**trackRouterTrackUnsubscribe**](TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{subAccountId}/{messageId} | 


<a name="trackRouterTrackEmailOpen"></a>
# **trackRouterTrackEmailOpen**
> trackRouterTrackEmailOpen(subAccountId, messageId)



Track Email Open

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = "messageId_example"; // String | The UUID of message which was sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackEmailOpen(subAccountId, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="trackRouterTrackLinkClick"></a>
# **trackRouterTrackLinkClick**
> trackRouterTrackLinkClick(subAccountId, messageId, redirecturl)



Track Link Click

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = "messageId_example"; // String | The UUID of message which was sent

var redirecturl = "redirecturl_example"; // String | The encoded redirect URL


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackLinkClick(subAccountId, messageId, redirecturl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
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
> trackRouterTrackUnsubscribe(subAccountId, messageId)



track link click

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.TrackApi();

var subAccountId = 789; // Number | The id of sub-account from which email is being sent

var messageId = 789; // Number | The UUID of message which was sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trackRouterTrackUnsubscribe(subAccountId, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **Number**| The UUID of message which was sent | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

