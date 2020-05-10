# SendPostApi.SubaccountmessageApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageRouterGet**](SubaccountmessageApi.md#messageRouterGet) | **GET** /subaccount/message/{messageId} | 
[**messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange**](SubaccountmessageApi.md#messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange) | **GET** /subaccount/message/ | 
[**messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange**](SubaccountmessageApi.md#messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange) | **GET** /subaccount/message/node/{subAccountId} | 
[**messageRouterGetMessageFromNodeById**](SubaccountmessageApi.md#messageRouterGetMessageFromNodeById) | **GET** /subaccount/message/node/{subAccountId}/{messageId} | 


<a name="messageRouterGet"></a>
# **messageRouterGet**
> ModelsQEmailMessage messageRouterGet(xSubAccountApiKey, messageId)



Find Message By Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountmessageApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGet(xSubAccountApiKey, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange"></a>
# **messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange**
> [ModelsQEmailMessage] messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange(xSubAccountApiKey)



Find all messages of a sub-account based on time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountmessageApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange"></a>
# **messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange**
> [ModelsQEmailMessage] messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange(subAccountId)



Get all messages of a sub-account from a specific node based on time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountmessageApi();

var subAccountId = 789; // Number | the subAccountId whose message you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange(subAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| the subAccountId whose message you want to retrieve | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetMessageFromNodeById"></a>
# **messageRouterGetMessageFromNodeById**
> ModelsQEmailMessage messageRouterGetMessageFromNodeById(subAccountId, messageId)



Find Message from node by specific Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountmessageApi();

var subAccountId = 789; // Number | the subAccountId whose message you want to retrieve

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetMessageFromNodeById(subAccountId, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| the subAccountId whose message you want to retrieve | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

