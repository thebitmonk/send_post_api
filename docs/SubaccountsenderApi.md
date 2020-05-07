# SendPostApi.SubaccountsenderApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**senderRouterCreate**](SubaccountsenderApi.md#senderRouterCreate) | **POST** /subaccount/sender/ | 
[**senderRouterDelete**](SubaccountsenderApi.md#senderRouterDelete) | **DELETE** /subaccount/sender/{senderId} | 
[**senderRouterGet**](SubaccountsenderApi.md#senderRouterGet) | **GET** /subaccount/sender/{senderId} | 
[**senderRouterGetAll**](SubaccountsenderApi.md#senderRouterGetAll) | **GET** /subaccount/sender/ | 
[**senderRouterUpdate**](SubaccountsenderApi.md#senderRouterUpdate) | **PUT** /subaccount/sender/{senderId} | 


<a name="senderRouterCreate"></a>
# **senderRouterCreate**
> senderRouterCreate(xSubAccountApiKey, body)



Create Sender

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsenderApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsESender(); // ModelsESender | The Sender content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.senderRouterCreate(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsESender**](ModelsESender.md)| The Sender content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="senderRouterDelete"></a>
# **senderRouterDelete**
> senderRouterDelete(xSubAccountApiKey, senderId)



Delete Sender

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsenderApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var senderId = 789; // Number | The SenderId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.senderRouterDelete(xSubAccountApiKey, senderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| The SenderId you want to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="senderRouterGet"></a>
# **senderRouterGet**
> ModelsSender senderRouterGet(xSubAccountApiKey, senderId)



Find Sender by SenderId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsenderApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var senderId = 789; // Number | the SenderId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.senderRouterGet(xSubAccountApiKey, senderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| the SenderId you want to get | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="senderRouterGetAll"></a>
# **senderRouterGetAll**
> [ModelsSender] senderRouterGetAll(xSubAccountApiKey)



Get All Senders

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsenderApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.senderRouterGetAll(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsSender]**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="senderRouterUpdate"></a>
# **senderRouterUpdate**
> ModelsSender senderRouterUpdate(xSubAccountApiKey, senderId, body)



Update Sender

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountsenderApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var senderId = 789; // Number | The SenderId you want to update

var body = new SendPostApi.ModelsESender(); // ModelsESender | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.senderRouterUpdate(xSubAccountApiKey, senderId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **senderId** | **Number**| The SenderId you want to update | 
 **body** | [**ModelsESender**](ModelsESender.md)| The body | 

### Return type

[**ModelsSender**](ModelsSender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

