# SendPostApi.AccountstatApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatsRouterGetAllAccountStats**](AccountstatApi.md#accountStatsRouterGetAllAccountStats) | **GET** /account/stat/ | 
[**accountStatsRouterGetAllAccountStatsByGroup**](AccountstatApi.md#accountStatsRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
[**accountStatsRouterGetAllAggregateAccountStats**](AccountstatApi.md#accountStatsRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
[**accountStatsRouterGetAllAggregateAccountStatsByGroup**](AccountstatApi.md#accountStatsRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 


<a name="accountStatsRouterGetAllAccountStats"></a>
# **accountStatsRouterGetAllAccountStats**
> [ModelsRStats] accountStatsRouterGetAllAccountStats(xAccountApiKey)



Get All Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAccountStats(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsRStats]**](ModelsRStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAccountStatsByGroup"></a>
# **accountStatsRouterGetAllAccountStatsByGroup**
> [ModelsRStats] accountStatsRouterGetAllAccountStatsByGroup(xAccountApiKey, group)



Get All Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAccountStatsByGroup(xAccountApiKey, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 

### Return type

[**[ModelsRStats]**](ModelsRStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAggregateAccountStats"></a>
# **accountStatsRouterGetAllAggregateAccountStats**
> ModelsStats accountStatsRouterGetAllAggregateAccountStats(xAccountApiKey)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAggregateAccountStats(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsStats**](ModelsStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAggregateAccountStatsByGroup"></a>
# **accountStatsRouterGetAllAggregateAccountStatsByGroup**
> ModelsStats accountStatsRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 

### Return type

[**ModelsStats**](ModelsStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

