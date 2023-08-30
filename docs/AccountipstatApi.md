# SendPostApi.AccountIpStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPStatRouterGetAllAggregateIPStats**](AccountIpStatApi.md#iPStatRouterGetAllAggregateIPStats) | **GET** /account/ip/stat/{ipid}/aggregate | 
[**iPStatRouterGetAllAggregatedProviderStatsForAIP**](AccountIpStatApi.md#iPStatRouterGetAllAggregatedProviderStatsForAIP) | **GET** /account/ip/stat/{ipid}/aggregate/provider | 
[**iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](AccountIpStatApi.md#iPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **GET** /account/ip/stat/{ipid}/aggregate/subaccount | 
[**iPStatRouterGetAllIPStats**](AccountIpStatApi.md#iPStatRouterGetAllIPStats) | **GET** /account/ip/stat/{ipid} | 



## iPStatRouterGetAllAggregateIPStats

> ModelsStat iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts)



Get All Aggregate Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 
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


## iPStatRouterGetAllAggregatedProviderStatsForAIP

> [ModelsAPStat] iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts)



Get All Aggregated Provider Stats for a IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPStatRouterGetAllAggregatedSubAccountStatsForAnIP

> [ModelsASStat] iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts)



Get All Aggregated Sub-Account Stats for an IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example", // String | the provider whose stats you want
  'sortBy': "sortBy_example" // String | the sorting order
};
apiInstance.iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts, (error, data, response) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## iPStatRouterGetAllIPStats

> [ModelsRIPStat] iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts)



Get All IP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'provider': "provider_example" // String | the provider whose stats you want
};
apiInstance.iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 
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

