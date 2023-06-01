# SendPostApi.AccountsubaccountstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountStatRouterGetAllAggregateSubAccountStats**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStats) | **GET** /account/subaccount/stat/{sid}/aggregate | 
[**subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/domain | 
[**subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/group | 
[**subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/ip | 
[**subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/provider | 
[**subAccountStatRouterGetAllSubAccountStats**](AccountsubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStats) | **GET** /account/subaccount/stat/{sid} | 


<a name="subAccountStatRouterGetAllAggregateSubAccountStats"></a>
# **subAccountStatRouterGetAllAggregateSubAccountStats**
> ModelsStat subAccountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, sid, opts)



Get All Aggregate Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **sid** | **Number**| the subaccount id you want to get | 
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
> [ModelsAGDomainStat] subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Domain Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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
> [ModelsAGStat] subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Group Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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
> [ModelsAIPStat] subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated IP Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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
> [ModelsAPStat] subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Provider Stats for a Sub-Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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
> [ModelsRStat] subAccountStatRouterGetAllSubAccountStats(xAccountApiKey, sid, opts)



Get All Sub-Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsubaccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.subAccountStatRouterGetAllSubAccountStats(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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

