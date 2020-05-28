# SendPostApi.SubaccountrecipientApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipientRouterGetAllMessagesSentToASpecificRecipient**](SubaccountrecipientApi.md#recipientRouterGetAllMessagesSentToASpecificRecipient) | **GET** /subaccount/recipient/{recipient}/messages | 
[**recipientRouterGetMessagesForASpecificRecipientFromANode**](SubaccountrecipientApi.md#recipientRouterGetMessagesForASpecificRecipientFromANode) | **GET** /subaccount/recipient/node/{subAccountId}/{recipient}/messages | 


<a name="recipientRouterGetAllMessagesSentToASpecificRecipient"></a>
# **recipientRouterGetAllMessagesSentToASpecificRecipient**
> [ModelsQEmailMessage] recipientRouterGetAllMessagesSentToASpecificRecipient(xSubAccountApiKey, recipient)



Find all messages sent to a specific recipient

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountrecipientApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var recipient = "recipient_example"; // String | email of the recipient


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipientRouterGetAllMessagesSentToASpecificRecipient(xSubAccountApiKey, recipient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **recipient** | **String**| email of the recipient | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recipientRouterGetMessagesForASpecificRecipientFromANode"></a>
# **recipientRouterGetMessagesForASpecificRecipientFromANode**
> [ModelsQEmailMessage] recipientRouterGetMessagesForASpecificRecipientFromANode(xSubAccountApiKey, subAccountId, recipient)



Find all message sent to a recipient from a specific node

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountrecipientApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var subAccountId = 789; // Number | the subAccountId whose message you want to retrieve

var recipient = "recipient_example"; // String | email of the recipient


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipientRouterGetMessagesForASpecificRecipientFromANode(xSubAccountApiKey, subAccountId, recipient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **subAccountId** | **Number**| the subAccountId whose message you want to retrieve | 
 **recipient** | **String**| email of the recipient | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

