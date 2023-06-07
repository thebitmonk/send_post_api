# SendPostApi.AccountdomainstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainStatRouterGetAllAggregateDomainStatsByGroup**](AccountdomainstatApi.md#domainStatRouterGetAllAggregateDomainStatsByGroup) | **GET** /account/domain/stat/{domainId}/aggregate/provider | 
[**domainStatRouterGetAllAggregatedProviderStatsForADomain**](AccountdomainstatApi.md#domainStatRouterGetAllAggregatedProviderStatsForADomain) | **GET** /account/domain/stat/{domainId}/aggregate/providers | 
[**domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain**](AccountdomainstatApi.md#domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain) | **GET** /account/domain/stat/{domainId}/aggregate/sid/{sid}/providers | 
[**domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain**](AccountdomainstatApi.md#domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain) | **GET** /account/domain/stat/{domainId}/aggregate/subaccounts | 
[**domainStatRouterGetAllDomainStats**](AccountdomainstatApi.md#domainStatRouterGetAllDomainStats) | **GET** /account/domain/stat/{domainId} | 
[**domainStatRouterGetStatsForASingleDomainStats**](AccountdomainstatApi.md#domainStatRouterGetStatsForASingleDomainStats) | **GET** /account/domain/stat/{domainId}/aggregate | 


<a name="domainStatRouterGetAllAggregateDomainStatsByGroup"></a>
# **domainStatRouterGetAllAggregateDomainStatsByGroup**
> ModelsStat domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the domainName you want to get

var provider = "provider_example"; // String | the group whose stats you want

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
apiInstance.domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the domainName you want to get | 
 **provider** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainStatRouterGetAllAggregatedProviderStatsForADomain"></a>
# **domainStatRouterGetAllAggregatedProviderStatsForADomain**
> ModelsPDStat domainStatRouterGetAllAggregatedProviderStatsForADomain(xAccountApiKey, domainId, opts)



Get All Aggregated Provider Stats for a Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the domainName you want to get

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
apiInstance.domainStatRouterGetAllAggregatedProviderStatsForADomain(xAccountApiKey, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the domainName you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsPDStat**](ModelsPDStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain"></a>
# **domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain**
> ModelsPDStat domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain(xAccountApiKey, domainId, sid, opts)



Get All Aggregated Provider Stats for a Specific Sub-Account of a Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the domainName you want to get

var sid = 789; // Number | the Sub Account Id you want to get

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
apiInstance.domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain(xAccountApiKey, domainId, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the domainName you want to get | 
 **sid** | **Number**| the Sub Account Id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsPDStat**](ModelsPDStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain"></a>
# **domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain**
> ModelsSDStat domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain(xAccountApiKey, domainId, provider, opts)



Get All Aggregated Sub-Account Stats for an Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the domainName you want to get

var provider = "provider_example"; // String | the group whose stats you want

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
apiInstance.domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain(xAccountApiKey, domainId, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the domainName you want to get | 
 **provider** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsSDStat**](ModelsSDStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainStatRouterGetAllDomainStats"></a>
# **domainStatRouterGetAllDomainStats**
> ModelsDomainStat domainStatRouterGetAllDomainStats(xAccountApiKey, domainId, provider, opts)



Get All Domain Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = 789; // Number | the domainName you want to get

var provider = "provider_example"; // String | the group whose stats you want

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
apiInstance.domainStatRouterGetAllDomainStats(xAccountApiKey, domainId, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **Number**| the domainName you want to get | 
 **provider** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsDomainStat**](ModelsDomainStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainStatRouterGetStatsForASingleDomainStats"></a>
# **domainStatRouterGetStatsForASingleDomainStats**
> ModelsStat domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainId = "domainId_example"; // String | the domainID you want to get

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
apiInstance.domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainId** | **String**| the domainID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

