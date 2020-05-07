# SendPostApi.SubaccountsuppressionApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppressionRouterCreateSuppressions**](SubaccountsuppressionApi.md#suppressionRouterCreateSuppressions) | **POST** /subaccount/suppression/ | 
[**suppressionRouterCreateSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#suppressionRouterCreateSuppressionsInSuppressionFilter) | **POST** /subaccount/suppression/filter | 
[**suppressionRouterDeleteSuppression**](SubaccountsuppressionApi.md#suppressionRouterDeleteSuppression) | **DELETE** /subaccount/suppression/ | 
[**suppressionRouterDeleteSuppressionsInSuppressionFilter**](SubaccountsuppressionApi.md#suppressionRouterDeleteSuppressionsInSuppressionFilter) | **DELETE** /subaccount/suppression/filter | 
[**suppressionRouterGetAllSuppressions**](SubaccountsuppressionApi.md#suppressionRouterGetAllSuppressions) | **GET** /subaccount/suppression/ | 


<a name="suppressionRouterCreateSuppressions"></a>
# **suppressionRouterCreateSuppressions**
> suppressionRouterCreateSuppressions(xSubAccountApiKey, body)



Add Email Addresses To Suppression List

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsuppressionApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsRSuppression(); // ModelsRSuppression | Suppression content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppressionRouterCreateSuppressions(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsRSuppression**](ModelsRSuppression.md)| Suppression content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterCreateSuppressionsInSuppressionFilter"></a>
# **suppressionRouterCreateSuppressionsInSuppressionFilter**
> suppressionRouterCreateSuppressionsInSuppressionFilter(body)



Add Email Addresses To Suppression Filter

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsuppressionApi();

var body = [new SendPostApi.ModelsSuppression()]; // [ModelsSuppression] | Add suppressions to suppression filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppressionRouterCreateSuppressionsInSuppressionFilter(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ModelsSuppression]**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterDeleteSuppression"></a>
# **suppressionRouterDeleteSuppression**
> suppressionRouterDeleteSuppression(xSubAccountApiKey, body)



Delete specific emails which are in suppression list

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsuppressionApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsRDSuppression(); // ModelsRDSuppression | Suppression content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppressionRouterDeleteSuppression(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsRDSuppression**](ModelsRDSuppression.md)| Suppression content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterDeleteSuppressionsInSuppressionFilter"></a>
# **suppressionRouterDeleteSuppressionsInSuppressionFilter**
> suppressionRouterDeleteSuppressionsInSuppressionFilter(body)



Delete specific emails which are in suppression list

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsuppressionApi();

var body = [new SendPostApi.ModelsSuppression()]; // [ModelsSuppression] | Suppression content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppressionRouterDeleteSuppressionsInSuppressionFilter(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ModelsSuppression]**](ModelsSuppression.md)| Suppression content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suppressionRouterGetAllSuppressions"></a>
# **suppressionRouterGetAllSuppressions**
> suppressionRouterGetAllSuppressions(xSubAccountApiKey)



Get all suppressions

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsuppressionApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suppressionRouterGetAllSuppressions(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

