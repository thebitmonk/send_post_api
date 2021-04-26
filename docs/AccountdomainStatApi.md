# SendPostApi.AccountdomainStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainStatRouterGetAllAggregateDomainStatsByGroup**](AccountdomainStatApi.md#domainStatRouterGetAllAggregateDomainStatsByGroup) | **GET** /account/domainStat/{domainName}/aggregate/provider | 
[**domainStatRouterGetStatsForASingleDomainStats**](AccountdomainStatApi.md#domainStatRouterGetStatsForASingleDomainStats) | **GET** /account/domainStat/{domainName}/aggregate | 


<a name="domainStatRouterGetAllAggregateDomainStatsByGroup"></a>
# **domainStatRouterGetAllAggregateDomainStatsByGroup**
> ModelsStat domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainName, provider, opts)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainStatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainName = 789; // Number | the domainName you want to get

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
apiInstance.domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainName, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainName** | **Number**| the domainName you want to get | 
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

<a name="domainStatRouterGetStatsForASingleDomainStats"></a>
# **domainStatRouterGetStatsForASingleDomainStats**
> ModelsStat domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainName, opts)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountdomainStatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var domainName = "domainName_example"; // String | the IPId you want to get

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
apiInstance.domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **domainName** | **String**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

