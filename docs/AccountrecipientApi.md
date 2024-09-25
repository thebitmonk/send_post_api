# SendPostApi.AccountrecipientApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipientRouterGetAllMessagesInfoForARecipient**](AccountrecipientApi.md#recipientRouterGetAllMessagesInfoForARecipient) | **GET** /account/recipient/{recipient}/messages | 


<a name="recipientRouterGetAllMessagesInfoForARecipient"></a>
# **recipientRouterGetAllMessagesInfoForARecipient**
> [ModelsQEvent] recipientRouterGetAllMessagesInfoForARecipient(xAccountApiKey, recipient)



Find all messages sent to a specific recipient <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountrecipientApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var recipient = "recipient_example"; // String | email of the recipient


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipientRouterGetAllMessagesInfoForARecipient(xAccountApiKey, recipient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **recipient** | **String**| email of the recipient | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

