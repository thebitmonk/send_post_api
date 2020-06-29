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
> Stats subAccountStatsRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, opts)



Get All Aggregate Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

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
apiInstance.subAccountStatsRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**Stats**](Stats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup"></a>
# **subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup**
> Stats subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group, opts)



Get All Aggregate Sub-Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

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
apiInstance.subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**Stats**](Stats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllSubAccountStats"></a>
# **subAccountStatsRouterGetAllSubAccountStats**
> [RStats] subAccountStatsRouterGetAllSubAccountStats(xSubAccountApiKey, opts)



Get All Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

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
apiInstance.subAccountStatsRouterGetAllSubAccountStats(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[RStats]**](RStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatsRouterGetAllSubAccountStatsByGroup"></a>
# **subAccountStatsRouterGetAllSubAccountStatsByGroup**
> [RStats] subAccountStatsRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group, opts)



Get All Sub-Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the tag whose stats you want

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
apiInstance.subAccountStatsRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the tag whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[RStats]**](RStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

