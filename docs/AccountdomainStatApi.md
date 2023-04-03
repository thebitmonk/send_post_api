# SendPostApi.AccountdomainStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainStatRouterGetAllAggregateDomainStatsByGroup**](AccountdomainStatApi.md#domainStatRouterGetAllAggregateDomainStatsByGroup) | **GET** /account/domainStat/{domainId}/aggregate/provider | 
[**domainStatRouterGetStatsForASingleDomainStats**](AccountdomainStatApi.md#domainStatRouterGetStatsForASingleDomainStats) | **GET** /account/domainStat/{domainId}/aggregate | 

<a name="domainStatRouterGetAllAggregateDomainStatsByGroup"></a>
# **domainStatRouterGetAllAggregateDomainStatsByGroup**
> ModelsStat domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts)



Get All Aggregate Stats by Group

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountdomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let provider = "provider_example"; // String | the group whose stats you want
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainStatRouterGetStatsForASingleDomainStats"></a>
# **domainStatRouterGetStatsForASingleDomainStats**
> ModelsStat domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts)



Get All Aggregate Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountdomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = "domainId_example"; // String | the domainID you want to get
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

