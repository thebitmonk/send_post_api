# SendPostApi.AccountSubaccountStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountStatRouterGetAllAggregateSubAccountStats**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllAggregateSubAccountStats) | **GET** /account/subaccount/stat/{sid}/aggregate | 
[**subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/domain | 
[**subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/group | 
[**subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/ip | 
[**subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **GET** /account/subaccount/stat/{sid}/aggregate/provider | 
[**subAccountStatRouterGetAllSubAccountStats**](AccountSubaccountStatApi.md#subAccountStatRouterGetAllSubAccountStats) | **GET** /account/subaccount/stat/{sid} | 



## subAccountStatRouterGetAllAggregateSubAccountStats

> ModelsStat subAccountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, sid, opts)



Get All Aggregate Sub-Account Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount

> [ModelsAGDomainStat] subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Domain Stats for a Sub-Account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedDomainStatsForASubAccount(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAGDomainStat]**](ModelsAGDomainStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount

> [ModelsAGStat] subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Group Stats for a Sub-Account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAGStat]**](ModelsAGStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subAccountStatRouterGetAllAggregatedIPStatsForASubAccount

> [ModelsAIPStat] subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated IP Stats for a Sub-Account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAIPStat]**](ModelsAIPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount

> [ModelsAPStat] subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xAccountApiKey, sid, opts)



Get All Aggregated Provider Stats for a Sub-Account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAPStat]**](ModelsAPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subAccountStatRouterGetAllSubAccountStats

> [ModelsRStat] subAccountStatRouterGetAllSubAccountStats(xAccountApiKey, sid, opts)



Get All Sub-Account Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountSubaccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let sid = 789; // Number | the subaccount id you want to get
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllSubAccountStats(xAccountApiKey, sid, opts, (error, data, response) => {
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
 **sid** | **Number**| the subaccount id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

