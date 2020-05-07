# SendPostApi.SubaccountippoolApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPPoolRouterCreate**](SubaccountippoolApi.md#iPPoolRouterCreate) | **POST** /subaccount/ippool/ | 
[**iPPoolRouterDelete**](SubaccountippoolApi.md#iPPoolRouterDelete) | **DELETE** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGet**](SubaccountippoolApi.md#iPPoolRouterGet) | **GET** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGetAll**](SubaccountippoolApi.md#iPPoolRouterGetAll) | **GET** /subaccount/ippool/ | 
[**iPPoolRouterUpdate**](SubaccountippoolApi.md#iPPoolRouterUpdate) | **PUT** /subaccount/ippool/{ippoolid} | 


<a name="iPPoolRouterCreate"></a>
# **iPPoolRouterCreate**
> iPPoolRouterCreate(xSubAccountApiKey, body)



Create IPPool

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountippoolApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The IPPool content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.iPPoolRouterCreate(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The IPPool content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPPoolRouterDelete"></a>
# **iPPoolRouterDelete**
> iPPoolRouterDelete(xSubAccountApiKey, ippoolid)



Delete IPPool

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountippoolApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var ippoolid = 789; // Number | The IPPoolId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.iPPoolRouterDelete(xSubAccountApiKey, ippoolid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **ippoolid** | **Number**| The IPPoolId you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPPoolRouterGet"></a>
# **iPPoolRouterGet**
> ModelsIPPool iPPoolRouterGet(xSubAccountApiKey, ippoolid)



Find IPPool by IPPoolId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountippoolApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var ippoolid = 789; // Number | the IPPoolId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPPoolRouterGet(xSubAccountApiKey, ippoolid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **ippoolid** | **Number**| the IPPoolId you want to get | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPPoolRouterGetAll"></a>
# **iPPoolRouterGetAll**
> [ModelsIPPool] iPPoolRouterGetAll(xSubAccountApiKey)



Get All IPPools

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountippoolApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPPoolRouterGetAll(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsIPPool]**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPPoolRouterUpdate"></a>
# **iPPoolRouterUpdate**
> ModelsIPPool iPPoolRouterUpdate(xSubAccountApiKey, ippoolid, body)



Update IPPool

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountippoolApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var ippoolid = 789; // Number | The IPPoolId you want to update

var body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPPoolRouterUpdate(xSubAccountApiKey, ippoolid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **ippoolid** | **Number**| The IPPoolId you want to update | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The body | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

