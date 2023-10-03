# SendPostApi.AccounttpspstatApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats**](AccounttpspstatApi.md#thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats) | **GET** /account/tpsp/stat/{tpspid}/aggregate | 
[**thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider**](AccounttpspstatApi.md#thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider) | **GET** /account/tpsp/stat/{tpspid}/aggregate/provider | 
[**thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider**](AccounttpspstatApi.md#thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider) | **GET** /account/tpsp/stat/{tpspid}/aggregate/subaccount | 
[**thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats**](AccounttpspstatApi.md#thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats) | **GET** /account/tpsp/stat/{tpspid} | 


<a name="thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats"></a>
# **thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats**
> ModelsStat thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, tpspid, opts)



Get All Aggregate Stats 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspid = 789; // Number | the tpspId you want to get

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
apiInstance.thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, tpspid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspid** | **Number**| the tpspId you want to get | 
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

<a name="thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider"></a>
# **thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider**
> [ModelsAPStat] thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider(xAccountApiKey, tpspid, opts)



Get All Aggregated Provider Stats for a Third Party Provider 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspid = 789; // Number | the tpspId you want to get

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
apiInstance.thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider(xAccountApiKey, tpspid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspid** | **Number**| the tpspId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider"></a>
# **thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider**
> [ModelsASStat] thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider(xAccountApiKey, tpspid, opts)



Get All Aggregated Sub-Account Stats for an Third Party Provider 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspid = 789; // Number | the TPSPId you want to get

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
apiInstance.thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider(xAccountApiKey, tpspid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspid** | **Number**| the TPSPId you want to get | 
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

<a name="thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats"></a>
# **thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats**
> [ModelsRIPStat] thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats(xAccountApiKey, tpspid, opts)



Get All Third Party Providers Stats 

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttpspstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tpspid = 789; // Number | the tpspId you want to get

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
apiInstance.thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats(xAccountApiKey, tpspid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tpspid** | **Number**| the tpspId you want to get | 
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

