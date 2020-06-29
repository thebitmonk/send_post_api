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
> [ModelsRStat] accountStatsRouterGetAllAccountStats(xAccountApiKey, opts)



Get All Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAccountStats(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAccountStatsByGroup"></a>
# **accountStatsRouterGetAllAccountStatsByGroup**
> [ModelsRStat] accountStatsRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAggregateAccountStats"></a>
# **accountStatsRouterGetAllAggregateAccountStats**
> ModelsStat accountStatsRouterGetAllAggregateAccountStats(xAccountApiKey, opts)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAggregateAccountStats(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatsRouterGetAllAggregateAccountStatsByGroup"></a>
# **accountStatsRouterGetAllAggregateAccountStatsByGroup**
> ModelsStat accountStatsRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatsRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

