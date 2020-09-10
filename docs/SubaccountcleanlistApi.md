# SendPostApi.SubaccountcleanlistApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCleaningRouterCleanBulkEmailList**](SubaccountcleanlistApi.md#listCleaningRouterCleanBulkEmailList) | **POST** /subaccount/cleanlist/bulk | 
[**listCleaningRouterCleanEmailist**](SubaccountcleanlistApi.md#listCleaningRouterCleanEmailist) | **POST** /subaccount/cleanlist/ | 


<a name="listCleaningRouterCleanBulkEmailList"></a>
# **listCleaningRouterCleanBulkEmailList**
> ModelsCleanedList listCleaningRouterCleanBulkEmailList(xSubAccountApiKey)



Send Email To Contacts

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCleaningRouterCleanBulkEmailList(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCleaningRouterCleanEmailist"></a>
# **listCleaningRouterCleanEmailist**
> ModelsCleanedList listCleaningRouterCleanEmailist(xSubAccountApiKey)



Clean email list

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCleaningRouterCleanEmailist(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

