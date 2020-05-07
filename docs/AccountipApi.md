# SendPostApi.AccountipApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPRouterAllocateIP**](AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
[**iPRouterDelete**](AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
[**iPRouterGet**](AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
[**iPRouterGetAll**](AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
[**iPRouterUpdate**](AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 


<a name="iPRouterAllocateIP"></a>
# **iPRouterAllocateIP**
> [ModelsIP] iPRouterAllocateIP(xAccountApiKey)



Allocate IP To Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterAllocateIP(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterDelete"></a>
# **iPRouterDelete**
> iPRouterDelete(xAccountApiKey, ipid)



Delete IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | The IPId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.iPRouterDelete(xAccountApiKey, ipid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| The IPId you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterGet"></a>
# **iPRouterGet**
> ModelsIP iPRouterGet(xAccountApiKey, ipid)



Find IP by IPId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterGet(xAccountApiKey, ipid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterGetAll"></a>
# **iPRouterGetAll**
> [ModelsIP] iPRouterGetAll(xAccountApiKey)



Get All IPs

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterUpdate"></a>
# **iPRouterUpdate**
> iPRouterUpdate(xAccountApiKey, ipid)



Update an IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | The IPId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.iPRouterUpdate(xAccountApiKey, ipid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| The IPId you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

