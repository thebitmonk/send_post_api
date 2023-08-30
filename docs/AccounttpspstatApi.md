# SendPostApi.AccountTpspStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats**](AccountTpspStatApi.md#thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats) | **GET** /account/tpsp/stat/{tpspid}/aggregate | 
[**thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider**](AccountTpspStatApi.md#thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider) | **GET** /account/tpsp/stat/{tpspid}/aggregate/provider | 
[**thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider**](AccountTpspStatApi.md#thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider) | **GET** /account/tpsp/stat/{tpspid}/aggregate/subaccount | 
[**thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats**](AccountTpspStatApi.md#thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats) | **GET** /account/tpsp/stat/{tpspid} | 



## thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats

> ModelsStat thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, tpspid, opts)



Get All Aggregate Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspid = 789; // Number | the tpspId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, tpspid, opts, (error, data, response) => {
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
 **tpspid** | **Number**| the tpspId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider

> [ModelsAPStat] thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider(xAccountApiKey, tpspid, opts)



Get All Aggregated Provider Stats for a Third Party Provider

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspid = 789; // Number | the tpspId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider(xAccountApiKey, tpspid, opts, (error, data, response) => {
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
 **tpspid** | **Number**| the tpspId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider

> [ModelsASStat] thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider(xAccountApiKey, tpspid, opts)



Get All Aggregated Sub-Account Stats for an Third Party Provider

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspid = 789; // Number | the TPSPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example", // String | the provider whose stats you want
  'sortBy': "sortBy_example" // String | the sorting order
};
apiInstance.thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider(xAccountApiKey, tpspid, opts, (error, data, response) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats

> [ModelsRIPStat] thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats(xAccountApiKey, tpspid, opts)



Get All Third Party Providers Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTpspStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tpspid = 789; // Number | the tpspId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats(xAccountApiKey, tpspid, opts, (error, data, response) => {
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
 **tpspid** | **Number**| the tpspId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **provider** | **String**| the provider whose stats you want | [optional] 

### Return type

[**[ModelsRIPStat]**](ModelsRIPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

