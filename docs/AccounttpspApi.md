# SendPostApi.AccounttpspApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tPSPRouterCount**](AccounttpspApi.md#tPSPRouterCount) | **GET** /account/tpsp/count | 
[**tPSPRouterDelete**](AccounttpspApi.md#tPSPRouterDelete) | **DELETE** /account/tpsp/{tpspId} | 
[**tPSPRouterGet**](AccounttpspApi.md#tPSPRouterGet) | **GET** /account/tpsp/{tpspId} | 
[**tPSPRouterGetAll**](AccounttpspApi.md#tPSPRouterGetAll) | **GET** /account/tpsp/ | 
[**tPSPRouterInsert**](AccounttpspApi.md#tPSPRouterInsert) | **POST** /account/tpsp/ | 
[**tPSPRouterUpdate**](AccounttpspApi.md#tPSPRouterUpdate) | **PUT** /account/tpsp/{tpspId} | 


<a name="tPSPRouterCount"></a>
# **tPSPRouterCount**
> ModelsCountStat tPSPRouterCount(xAccountApiKey, opts)



Count Total TPSPs <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tPSPRouterCount(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tPSPRouterDelete"></a>
# **tPSPRouterDelete**
> ModelsDeleteResponse tPSPRouterDelete(xAccountApiKey, tpspId, body)



Delete ThirdPartySendingProvider <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspId = 789; // Number | The TPSPID you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tPSPRouterDelete(xAccountApiKey, tpspId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| The TPSPID you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tPSPRouterGet"></a>
# **tPSPRouterGet**
> ModelsThirdPartySendingProvider tPSPRouterGet(xAccountApiKey, tpspId)



Find ThirdPartySendingProvider by TPSPID <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspId = 789; // Number | the TPSPID you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tPSPRouterGet(xAccountApiKey, tpspId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| the TPSPID you want to get | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tPSPRouterGetAll"></a>
# **tPSPRouterGetAll**
> [ModelsThirdPartySendingProvider] tPSPRouterGetAll(xAccountApiKey, opts)



Get All TPSPs <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

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
apiInstance.tPSPRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsThirdPartySendingProvider]**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tPSPRouterInsert"></a>
# **tPSPRouterInsert**
> ModelsThirdPartySendingProvider tPSPRouterInsert(xAccountApiKey, body)



Insert ThirdPartySendingProvider <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEThirdPartySendingProvider(); // ModelsEThirdPartySendingProvider | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tPSPRouterInsert(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEThirdPartySendingProvider**](ModelsEThirdPartySendingProvider.md)| The body | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tPSPRouterUpdate"></a>
# **tPSPRouterUpdate**
> ModelsThirdPartySendingProvider tPSPRouterUpdate(xAccountApiKey, tpspId, body)



Update ThirdPartySendingProvider <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspId = 789; // Number | The TPSPID you want to update

var body = new SendPostApi.ModelsEUpdateTPSP(); // ModelsEUpdateTPSP | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tPSPRouterUpdate(xAccountApiKey, tpspId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspId** | **Number**| The TPSPID you want to update | 
 **body** | [**ModelsEUpdateTPSP**](ModelsEUpdateTPSP.md)| The body | 

### Return type

[**ModelsThirdPartySendingProvider**](ModelsThirdPartySendingProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

