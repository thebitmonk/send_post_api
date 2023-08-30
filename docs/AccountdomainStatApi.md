# SendPostApi.AccountDomainStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainStatRouterGetAllAggregateDomainStatsByGroup**](AccountDomainStatApi.md#domainStatRouterGetAllAggregateDomainStatsByGroup) | **GET** /account/domain/stat/{domainId}/aggregate/provider | 
[**domainStatRouterGetAllAggregatedProviderStatsForADomain**](AccountDomainStatApi.md#domainStatRouterGetAllAggregatedProviderStatsForADomain) | **GET** /account/domain/stat/{domainId}/aggregate/providers | 
[**domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain**](AccountDomainStatApi.md#domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain) | **GET** /account/domain/stat/{domainId}/aggregate/sid/{sid}/providers | 
[**domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain**](AccountDomainStatApi.md#domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain) | **GET** /account/domain/stat/{domainId}/aggregate/subaccounts | 
[**domainStatRouterGetAllDomainStats**](AccountDomainStatApi.md#domainStatRouterGetAllDomainStats) | **GET** /account/domain/stat/{domainId} | 
[**domainStatRouterGetCurrentDomainBlacklistStats**](AccountDomainStatApi.md#domainStatRouterGetCurrentDomainBlacklistStats) | **GET** /account/domain/stat/{domainId}/hetrixtools/stat | 
[**domainStatRouterGetCurrentDomainPostmasterStats**](AccountDomainStatApi.md#domainStatRouterGetCurrentDomainPostmasterStats) | **GET** /account/domain/stat/{domainId}/postmaster/stat | 
[**domainStatRouterGetStatsForASingleDomainStats**](AccountDomainStatApi.md#domainStatRouterGetStatsForASingleDomainStats) | **GET** /account/domain/stat/{domainId}/aggregate | 



## domainStatRouterGetAllAggregateDomainStatsByGroup

> ModelsStat domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts)



Get All Aggregate Stats by Group

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
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


## domainStatRouterGetAllAggregatedProviderStatsForADomain

> [ModelsPDStat] domainStatRouterGetAllAggregatedProviderStatsForADomain(xAccountApiKey, domainId, opts)



Get All Aggregated Provider Stats for a Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetAllAggregatedProviderStatsForADomain(xAccountApiKey, domainId, opts, (error, data, response) => {
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
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPDStat]**](ModelsPDStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain

> ModelsPDStat domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain(xAccountApiKey, domainId, sid, opts)



Get All Aggregated Provider Stats for a Specific Sub-Account of a Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let sid = 789; // Number | the Sub Account Id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain(xAccountApiKey, domainId, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the Sub Account Id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsPDStat**](ModelsPDStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain

> ModelsSDStat domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain(xAccountApiKey, domainId, provider, opts)



Get All Aggregated Sub-Account Stats for an Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let provider = "provider_example"; // String | the group whose stats you want
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain(xAccountApiKey, domainId, provider, opts, (error, data, response) => {
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

[**ModelsSDStat**](ModelsSDStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetAllDomainStats

> [ModelsRDStat] domainStatRouterGetAllDomainStats(xAccountApiKey, domainId, provider, opts)



Get All Domain Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let provider = "provider_example"; // String | the group whose stats you want
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetAllDomainStats(xAccountApiKey, domainId, provider, opts, (error, data, response) => {
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

[**[ModelsRDStat]**](ModelsRDStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetCurrentDomainBlacklistStats

> ModelsBlacklistResource domainStatRouterGetCurrentDomainBlacklistStats(xAccountApiKey, domainId)



Get All Current Domain Blacklist stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
apiInstance.domainStatRouterGetCurrentDomainBlacklistStats(xAccountApiKey, domainId, (error, data, response) => {
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

### Return type

[**ModelsBlacklistResource**](ModelsBlacklistResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetCurrentDomainPostmasterStats

> [ModelsPostmasterDomainStat] domainStatRouterGetCurrentDomainPostmasterStats(xAccountApiKey, domainId, opts)



Get All Current Domain Postmaster stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = 789; // Number | the domainName you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.domainStatRouterGetCurrentDomainPostmasterStats(xAccountApiKey, domainId, opts, (error, data, response) => {
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
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPostmasterDomainStat]**](ModelsPostmasterDomainStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainStatRouterGetStatsForASingleDomainStats

> ModelsStat domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts)



Get All Aggregate Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountDomainStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let domainId = "domainId_example"; // String | the domainID you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'filterValue': 789 // Number | filterValue
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
 **filterValue** | **Number**| filterValue | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

