# SendPostApi.SubaccountEmailApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailRouterSendEmail**](SubaccountEmailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
[**emailRouterSendEmailWithTemplate**](SubaccountEmailApi.md#emailRouterSendEmailWithTemplate) | **POST** /subaccount/email/template | 



## emailRouterSendEmail

> [ModelsEmailResponse] emailRouterSendEmail(xSubAccountApiKey, body, opts)



Send Email To Contacts

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountEmailApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message
let opts = {
  'xSendPostMockEmail': true, // Boolean | Mock email header
  'xSendPostMockTimeShift': "xSendPostMockTimeShift_example" // String | Mock email time shift
};
apiInstance.emailRouterSendEmail(xSubAccountApiKey, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## emailRouterSendEmailWithTemplate

> [ModelsEmailResponse] emailRouterSendEmailWithTemplate(xSubAccountApiKey, body)



Send Email To Contacts With Template

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountEmailApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message
apiInstance.emailRouterSendEmailWithTemplate(xSubAccountApiKey, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

