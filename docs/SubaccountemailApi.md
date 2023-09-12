# SendPostApi.SubaccountemailApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailRouterSendEmail**](SubaccountemailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
[**emailRouterSendEmailWithTemplate**](SubaccountemailApi.md#emailRouterSendEmailWithTemplate) | **POST** /subaccount/email/template | 


<a name="emailRouterSendEmail"></a>
# **emailRouterSendEmail**
> [ModelsEmailResponse] emailRouterSendEmail(xSubAccountApiKey, body, opts)



Send Email To Contacts <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountemailApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message

var opts = { 
  'xSendPostMockEmail': true, // Boolean | Mock email header
  'xSendPostMockTimeShift': "xSendPostMockTimeShift_example" // String | Mock email time shift
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailRouterSendEmail(xSubAccountApiKey, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEmailMessage**](ModelsEmailMessage.md)| The Email Message | 
 **xSendPostMockEmail** | **Boolean**| Mock email header | [optional] 
 **xSendPostMockTimeShift** | **String**| Mock email time shift | [optional] 

### Return type

[**[ModelsEmailResponse]**](ModelsEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailRouterSendEmailWithTemplate"></a>
# **emailRouterSendEmailWithTemplate**
> [ModelsEmailResponse] emailRouterSendEmailWithTemplate(xSubAccountApiKey, body)



Send Email To Contacts With Template <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountemailApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailRouterSendEmailWithTemplate(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEmailMessage**](ModelsEmailMessage.md)| The Email Message | 

### Return type

[**[ModelsEmailResponse]**](ModelsEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

