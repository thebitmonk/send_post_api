# SendPostApi.SystemTemplateApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemTemplateRouterGetAllSystemTemplates**](SystemTemplateApi.md#systemTemplateRouterGetAllSystemTemplates) | **GET** /system/template/ | 



## systemTemplateRouterGetAllSystemTemplates

> [ModelsSystemTemplate] systemTemplateRouterGetAllSystemTemplates(xAccountApiKey)



Get all System Templates

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SystemTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.systemTemplateRouterGetAllSystemTemplates(xAccountApiKey, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsSystemTemplate]**](ModelsSystemTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

