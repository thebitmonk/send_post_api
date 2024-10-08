# SendPostApi.AccountsubaccountApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountRouterCount**](AccountsubaccountApi.md#subAccountRouterCount) | **GET** /account/subaccount/count | 
[**subAccountRouterCreate**](AccountsubaccountApi.md#subAccountRouterCreate) | **POST** /account/subaccount/ | 
[**subAccountRouterDelete**](AccountsubaccountApi.md#subAccountRouterDelete) | **DELETE** /account/subaccount/{subAccountId} | 
[**subAccountRouterGet**](AccountsubaccountApi.md#subAccountRouterGet) | **GET** /account/subaccount/{subAccountId} | 
[**subAccountRouterGetAll**](AccountsubaccountApi.md#subAccountRouterGetAll) | **GET** /account/subaccount/ | 
[**subAccountRouterGetAllSubAccountIncidents**](AccountsubaccountApi.md#subAccountRouterGetAllSubAccountIncidents) | **GET** /account/subaccount/{subAccountId}/incident | 
[**subAccountRouterMarkPlus**](AccountsubaccountApi.md#subAccountRouterMarkPlus) | **PUT** /account/subaccount/{subAccountKey}/plus | 
[**subAccountRouterUpdate**](AccountsubaccountApi.md#subAccountRouterUpdate) | **PUT** /account/subaccount/{subAccountId} | 


<a name="subAccountRouterCount"></a>
# **subAccountRouterCount**
> ModelsCountStat subAccountRouterCount(xAccountApiKey, opts)



Count Total Subaccounts <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterCount(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterCreate"></a>
# **subAccountRouterCreate**
> ModelsSubAccount subAccountRouterCreate(xAccountApiKey, body)



Create SubAccount <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsESubAccount(); // ModelsESubAccount | The SubAccount content


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
 **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The SubAccount content | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterDelete"></a>
# **subAccountRouterDelete**
> ModelsDeleteResponse subAccountRouterDelete(xAccountApiKey, subAccountId, body)



Delete SubAccount <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountId = 789; // Number | The SubAccountId you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterDelete(xAccountApiKey, subAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

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



Find SubAccount by SubAccountId <br>

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
> [ModelsSubAccount] subAccountRouterGetAll(xAccountApiKey, opts)



Get All SubAccounts <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsSubAccount]**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterGetAllSubAccountIncidents"></a>
# **subAccountRouterGetAllSubAccountIncidents**
> [ModelsIncident] subAccountRouterGetAllSubAccountIncidents(xAccountApiKey, subAccountId)



Get All Incidents associated with a sub-account <br>

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
apiInstance.subAccountRouterGetAllSubAccountIncidents(xAccountApiKey, subAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to delete | 

### Return type

[**[ModelsIncident]**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterMarkPlus"></a>
# **subAccountRouterMarkPlus**
> ModelsSubAccount subAccountRouterMarkPlus(xAccountApiKey, subAccountKey)



Mark Plus SubAccount <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountKey = 789; // Number | The SubAccountId you want to Mark Plus


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountRouterMarkPlus(xAccountApiKey, subAccountKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountKey** | **Number**| The SubAccountId you want to Mark Plus | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterUpdate"></a>
# **subAccountRouterUpdate**
> ModelsSubAccount subAccountRouterUpdate(xAccountApiKey, subAccountId, body)



Update SubAccount <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var subAccountId = 789; // Number | The SubAccountId you want to update

var body = new SendPostApi.ModelsESubAccount(); // ModelsESubAccount | The body


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
 **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The body | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

