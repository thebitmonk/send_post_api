# SendPostApi.SystemsuppressionApi

All URIs are relative to *https://apiv2.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemSuppressionRouterCreateSuppressionsViaSendX**](SystemsuppressionApi.md#systemSuppressionRouterCreateSuppressionsViaSendX) | **POST** /system/suppression/{subAccountId} | 


<a name="systemSuppressionRouterCreateSuppressionsViaSendX"></a>
# **systemSuppressionRouterCreateSuppressionsViaSendX**
> ModelsSuppression systemSuppressionRouterCreateSuppressionsViaSendX(xSystemApiKey, subAccountId, body)



Add Email Addresses To Suppression List <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SystemsuppressionApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var subAccountId = 789; // Number | The SubAccountId you want to delete

var body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.systemSuppressionRouterCreateSuppressionsViaSendX(xSystemApiKey, subAccountId, body, callback);
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

