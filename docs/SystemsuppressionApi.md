# SendPostApi.SystemSuppressionApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemSuppressionRouterCreateSuppressionsViaSendX**](SystemSuppressionApi.md#systemSuppressionRouterCreateSuppressionsViaSendX) | **POST** /system/suppression/{subAccountId} | 



## systemSuppressionRouterCreateSuppressionsViaSendX

> ModelsSuppression systemSuppressionRouterCreateSuppressionsViaSendX(xSystemApiKey, subAccountId, body)



Add Email Addresses To Suppression List

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SystemSuppressionApi();
let xSystemApiKey = "xSystemApiKey_example"; // String | System API Key
let subAccountId = 789; // Number | The SubAccountId you want to delete
let body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content
apiInstance.systemSuppressionRouterCreateSuppressionsViaSendX(xSystemApiKey, subAccountId, body, (error, data, response) => {
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
 **xSystemApiKey** | **String**| System API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to delete | 
 **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 

### Return type

[**ModelsSuppression**](ModelsSuppression.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

