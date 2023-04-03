# SendPostApi.SystemsuppressionApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemSuppressionRouterCreateSuppressionsViaSendX**](SystemsuppressionApi.md#systemSuppressionRouterCreateSuppressionsViaSendX) | **POST** /system/suppression/{subAccountId} | 

<a name="systemSuppressionRouterCreateSuppressionsViaSendX"></a>
# **systemSuppressionRouterCreateSuppressionsViaSendX**
> ModelsSuppression systemSuppressionRouterCreateSuppressionsViaSendX(body, xSystemApiKey, subAccountId)



Add Email Addresses To Suppression List

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SystemsuppressionApi();
let body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let subAccountId = 789; // Number | The SubAccountId you want to delete

apiInstance.systemSuppressionRouterCreateSuppressionsViaSendX(body, xSystemApiKey, subAccountId, (error, data, response) => {
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
 **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 
 **xSystemApiKey** | **String**| System API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to delete | 

### Return type

[**ModelsSuppression**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

