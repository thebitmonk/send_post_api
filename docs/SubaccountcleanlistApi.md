# SendPostApi.SubaccountcleanlistApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCleaningRouterCleanBulkEmailList**](SubaccountcleanlistApi.md#listCleaningRouterCleanBulkEmailList) | **POST** /subaccount/cleanlist/bulk | 
[**listCleaningRouterCleanEmailist**](SubaccountcleanlistApi.md#listCleaningRouterCleanEmailist) | **POST** /subaccount/cleanlist/ | 


<a name="listCleaningRouterCleanBulkEmailList"></a>
# **listCleaningRouterCleanBulkEmailList**
> ApiBulkResponse listCleaningRouterCleanBulkEmailList(fileinput, xSubAccountApiKey)



Send Email To Contacts

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var fileinput = "/path/to/file.txt"; // File | csv to send

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCleaningRouterCleanBulkEmailList(fileinput, xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileinput** | **File**| csv to send | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ApiBulkResponse**](ApiBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="listCleaningRouterCleanEmailist"></a>
# **listCleaningRouterCleanEmailist**
> ModelsCleanedList listCleaningRouterCleanEmailist(xSubAccountApiKey, body)



Clean email list

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountcleanlistApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The List to be sent


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
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The List to be sent | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

