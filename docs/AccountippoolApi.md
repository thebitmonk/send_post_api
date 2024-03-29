# SendPostApi.AccountippoolApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIPPoolRouterCount**](AccountippoolApi.md#accountIPPoolRouterCount) | **GET** /account/ippool/count | 
[**accountIPPoolRouterCreate**](AccountippoolApi.md#accountIPPoolRouterCreate) | **POST** /account/ippool/ | 
[**accountIPPoolRouterDelete**](AccountippoolApi.md#accountIPPoolRouterDelete) | **DELETE** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGet**](AccountippoolApi.md#accountIPPoolRouterGet) | **GET** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGetAll**](AccountippoolApi.md#accountIPPoolRouterGetAll) | **GET** /account/ippool/ | 
[**accountIPPoolRouterSearchAll**](AccountippoolApi.md#accountIPPoolRouterSearchAll) | **GET** /account/ippool/search | 
[**accountIPPoolRouterUpdate**](AccountippoolApi.md#accountIPPoolRouterUpdate) | **PUT** /account/ippool/{ippoolid} | 


<a name="accountIPPoolRouterCount"></a>
# **accountIPPoolRouterCount**
> ModelsCountStat accountIPPoolRouterCount(xAccountApiKey)



Count Total AccountIPPools <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterCount(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterCreate"></a>
# **accountIPPoolRouterCreate**
> ModelsAccountIPPool accountIPPoolRouterCreate(xAccountApiKey, body)



Create AccountIPPool <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The AccountIPPool content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The AccountIPPool content | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterDelete"></a>
# **accountIPPoolRouterDelete**
> ModelsDeleteResponse accountIPPoolRouterDelete(xAccountApiKey, ippoolid, body)



Delete AccountIPPool <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ippoolid = 789; // Number | The AccountIPPoolId you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterDelete(xAccountApiKey, ippoolid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ippoolid** | **Number**| The AccountIPPoolId you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterGet"></a>
# **accountIPPoolRouterGet**
> ModelsAccountIPPool accountIPPoolRouterGet(xAccountApiKey, ippoolid)



Find AccountIPPool by AccountIPPoolId <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ippoolid = 789; // Number | the AccountIPPoolId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterGet(xAccountApiKey, ippoolid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ippoolid** | **Number**| the AccountIPPoolId you want to get | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterGetAll"></a>
# **accountIPPoolRouterGetAll**
> [ModelsAccountIPPool] accountIPPoolRouterGetAll(xAccountApiKey, opts)



Get All AccountIPPools <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsAccountIPPool]**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterSearchAll"></a>
# **accountIPPoolRouterSearchAll**
> [ModelsAccountIPPool] accountIPPoolRouterSearchAll(xAccountApiKey, opts)



Get All AccountIPPools without fetching IPs, TPSPs and other pools <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterSearchAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsAccountIPPool]**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterUpdate"></a>
# **accountIPPoolRouterUpdate**
> ModelsAccountIPPool accountIPPoolRouterUpdate(xAccountApiKey, ippoolid, body)



Update AccountIPPool <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountippoolApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ippoolid = 789; // Number | The AccountIPPoolId you want to update

var body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIPPoolRouterUpdate(xAccountApiKey, ippoolid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ippoolid** | **Number**| The AccountIPPoolId you want to update | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The body | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

