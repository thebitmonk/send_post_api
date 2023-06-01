# SendPostApi.SubaccountstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountStatRouterGetAllAggregateSubAccountStats**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStats) | **GET** /subaccount/stat/{sid}/aggregate | 
[**subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount) | **GET** /subaccount/stat/{sid}/aggregate/domain | 
[**subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **GET** /subaccount/stat/{sid}/aggregate/group | 
[**subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **GET** /subaccount/stat/{sid}/aggregate/ip | 
[**subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **GET** /subaccount/stat/{sid}/aggregate/provider | 
[**subAccountStatRouterGetAllSubAccountStats**](SubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStats) | **GET** /subaccount/stat/{sid} | 


<a name="subAccountStatRouterGetAllAggregateSubAccountStats"></a>
# **subAccountStatRouterGetAllAggregateSubAccountStats**
> ModelsStat subAccountStatRouterGetAllAggregateSubAccountStats(sid, xSubAccountApiKey, opts)



Get All Aggregate Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllAggregateSubAccountStats(sid, xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **Number**| the subaccount id you want to get | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount**
> [ModelsAGDomainStat] subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xSubAccountApiKey, sid, opts)



Get All Aggregated Domain Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xSubAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAGDomainStat]**](ModelsAGDomainStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**
> [ModelsAGStat] subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xSubAccountApiKey, sid, opts)



Get All Aggregated Group Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xSubAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAGStat]**](ModelsAGStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedIPStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**
> [ModelsAIPStat] subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xSubAccountApiKey, sid, opts)



Get All Aggregated IP Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xSubAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAIPStat]**](ModelsAIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**
> [ModelsAPStat] subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xSubAccountApiKey, sid, opts)



Get All Aggregated Provider Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xSubAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllSubAccountStats"></a>
# **subAccountStatRouterGetAllSubAccountStats**
> [ModelsRStat] subAccountStatRouterGetAllSubAccountStats(xSubAccountApiKey, sid, opts)



Get All Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountstatApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var sid = 789; // Number | the subaccount id you want to get

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
apiInstance.subAccountStatRouterGetAllSubAccountStats(xSubAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

