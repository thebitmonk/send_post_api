# SendPostApi.SubaccountemailApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailRouterSendEmail**](SubaccountemailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
[**emailRouterSendEmailWithTemplate**](SubaccountemailApi.md#emailRouterSendEmailWithTemplate) | **POST** /subaccount/email/template | 

<a name="emailRouterSendEmail"></a>
# **emailRouterSendEmail**
> [ModelsEmailResponse] emailRouterSendEmail(body, xSubAccountApiKey, opts)



Send Email To Contacts

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountemailApi();
let body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'xSendPostMockEmail': true, // Boolean | Mock email header
  'xSendPostMockTimeShift': "xSendPostMockTimeShift_example" // String | Mock email time shift
};
apiInstance.emailRouterSendEmail(body, xSubAccountApiKey, opts, (error, data, response) => {
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
 **body** | [**ModelsEmailMessage**](ModelsEmailMessage.md)| The Email Message | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
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
> [ModelsEmailResponse] emailRouterSendEmailWithTemplate(body, xSubAccountApiKey)



Send Email To Contacts With Template

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountemailApi();
let body = new SendPostApi.ModelsEmailMessage(); // ModelsEmailMessage | The Email Message
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.emailRouterSendEmailWithTemplate(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEmailMessage**](ModelsEmailMessage.md)| The Email Message | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsEmailResponse]**](ModelsEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

