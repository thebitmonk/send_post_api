# SendPostApi.SubaccountstatApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountStatsRouterGetAllAggregateSubAccountStats**](SubaccountstatApi.md#subAccountStatsRouterGetAllAggregateSubAccountStats) | **GET** /subaccount/stat/aggregate | 
[**subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup**](SubaccountstatApi.md#subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup) | **GET** /subaccount/stat/aggregate/group | 
[**subAccountStatsRouterGetAllSubAccountStats**](SubaccountstatApi.md#subAccountStatsRouterGetAllSubAccountStats) | **GET** /subaccount/stat/ | 
[**subAccountStatsRouterGetAllSubAccountStatsByGroup**](SubaccountstatApi.md#subAccountStatsRouterGetAllSubAccountStatsByGroup) | **GET** /subaccount/stat/group | 


<a name="subAccountStatsRouterGetAllAggregateSubAccountStats"></a>
# **subAccountStatsRouterGetAllAggregateSubAccountStats**
> ModelsStats subAccountStatsRouterGetAllAggregateSubAccountStats(xSubAccountApiKey)



Get All Aggregate Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountStatsRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsStats**](ModelsStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup"></a>
# **subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup**
> ModelsStats subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group)



Get All Aggregate Sub-Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 

### Return type

[**ModelsStats**](ModelsStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllSubAccountStats"></a>
# **subAccountStatsRouterGetAllSubAccountStats**
> [ModelsRStats] subAccountStatsRouterGetAllSubAccountStats(xSubAccountApiKey)



Get All Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountStatsRouterGetAllSubAccountStats(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsRStats]**](ModelsRStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllSubAccountStatsByGroup"></a>
# **subAccountStatsRouterGetAllSubAccountStatsByGroup**
> [ModelsRStats] subAccountStatsRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group)



Get All Sub-Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the tag whose stats you want


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subAccountStatsRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the tag whose stats you want | 

### Return type

[**[ModelsRStats]**](ModelsRStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

