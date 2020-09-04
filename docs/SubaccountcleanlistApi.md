# SendPostApi.SubaccountcleanlistApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCleaningRouterCleanBulkEmailList**](SubaccountcleanlistApi.md#listCleaningRouterCleanBulkEmailList) | **POST** /subaccount/cleanlist/bulk | 
[**listCleaningRouterCleanEmailist**](SubaccountcleanlistApi.md#listCleaningRouterCleanEmailist) | **POST** /subaccount/cleanlist/ | 


<a name="listCleaningRouterCleanBulkEmailList"></a>
# **listCleaningRouterCleanBulkEmailList**
> ModelsBulkResponse listCleaningRouterCleanBulkEmailList(xSubAccountApiKey, opts)



Upload a csv of emails which will be processed and sent as a mail

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'fileinput': "/path/to/file.txt" // File | true
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCleaningRouterCleanBulkEmailList(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **fileinput** | **File**| true | [optional] 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

<a name="listCleaningRouterCleanEmailist"></a>
# **listCleaningRouterCleanEmailist**
> ModelsCleanedList listCleaningRouterCleanEmailist(xSubAccountApiKey, body)



Send a list of emails and will get a result containing valid,invalid and detailed list response

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The list of emails to clean


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCleaningRouterCleanEmailist(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The list of emails to clean | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

