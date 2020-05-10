# SendPostApi.AccountsubaccountApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountRouterCreate**](AccountsubaccountApi.md#subAccountRouterCreate) | **POST** /account/subaccount/ | 
[**subAccountRouterDelete**](AccountsubaccountApi.md#subAccountRouterDelete) | **DELETE** /account/subaccount/{subAccountId} | 
[**subAccountRouterGet**](AccountsubaccountApi.md#subAccountRouterGet) | **GET** /account/subaccount/{subAccountId} | 
[**subAccountRouterGetAll**](AccountsubaccountApi.md#subAccountRouterGetAll) | **GET** /account/subaccount/ | 
[**subAccountRouterUpdate**](AccountsubaccountApi.md#subAccountRouterUpdate) | **PUT** /account/subaccount/{subAccountId} | 


<a name="subAccountRouterCreate"></a>
# **subAccountRouterCreate**
> ModelsSubAccount subAccountRouterCreate(xAccountApiKey, body)



Create SubAccount

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsSubAccount(); // ModelsSubAccount | The SubAccount content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsSubAccount**](ModelsSubAccount.md)| The SubAccount content | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterDelete"></a>
# **subAccountRouterDelete**
> ModelsDeleteResponse subAccountRouterDelete(xAccountApiKey, subAccountId)



Delete SubAccount

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountId = 789; // Number | The SubAccountId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterDelete(xAccountApiKey, subAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterGet"></a>
# **subAccountRouterGet**
> ModelsSubAccount subAccountRouterGet(xAccountApiKey, subAccountId)



Find SubAccount by SubAccountId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountId = 789; // Number | the SubAccountId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterGet(xAccountApiKey, subAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| the SubAccountId you want to get | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterGetAll"></a>
# **subAccountRouterGetAll**
> [ModelsSubAccount] subAccountRouterGetAll(xAccountApiKey)



Get All SubAccounts

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsSubAccount]**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterUpdate"></a>
# **subAccountRouterUpdate**
> ModelsSubAccount subAccountRouterUpdate(xAccountApiKey, subAccountId, body)



Update SubAccount

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountId = 789; // Number | The SubAccountId you want to update

var body = new SendPostApi.ModelsSubAccount(); // ModelsSubAccount | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterUpdate(xAccountApiKey, subAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to update | 
 **body** | [**ModelsSubAccount**](ModelsSubAccount.md)| The body | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
