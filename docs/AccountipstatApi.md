# SendPostApi.AccountipstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPStatRouterGetAllAggregateIPStats**](AccountipstatApi.md#iPStatRouterGetAllAggregateIPStats) | **GET** /account/ip/stat/{ipid}/aggregate | 
[**iPStatRouterGetAllAggregatedProviderStatsForAIP**](AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForAIP) | **GET** /account/ip/stat/{ipid}/aggregate/provider | 
[**iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](AccountipstatApi.md#iPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **GET** /account/ip/stat/{ipid}/aggregate/subaccount | 
[**iPStatRouterGetAllIPStats**](AccountipstatApi.md#iPStatRouterGetAllIPStats) | **GET** /account/ip/stat/{ipid} | 


<a name="iPStatRouterGetAllAggregateIPStats"></a>
# **iPStatRouterGetAllAggregateIPStats**
> ModelsStat iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts)



Get All Aggregate Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregatedProviderStatsForAIP"></a>
# **iPStatRouterGetAllAggregatedProviderStatsForAIP**
> [ModelsAPStat] iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts)



Get All Aggregated Provider Stats for a IP <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

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
apiInstance.iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregatedSubAccountStatsForAnIP"></a>
# **iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**
> [ModelsASStat] iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts)



Get All Aggregated Sub-Account Stats for an IP <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example", // String | the provider whose stats you want
  'sortBy': "sortBy_example" // String | the sorting order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 
 **sortBy** | **String**| the sorting order | [optional] 

### Return type

[**[ModelsASStat]**](ModelsASStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllIPStats"></a>
# **iPStatRouterGetAllIPStats**
> [ModelsRIPStat] iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts)



Get All IP Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsRIPStat]**](ModelsRIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

