# SendPostApi.SubaccountstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountStatRouterGetAllAggregateSubAccountStats**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStats) | **GET** /subaccount/stat/aggregate | 
[**subAccountStatRouterGetAllAggregateSubAccountStatsByGroup**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregateSubAccountStatsByGroup) | **GET** /subaccount/stat/aggregate/group | 
[**subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount) | **GET** /subaccount/stat/aggregate/groups | 
[**subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedIPStatsForASubAccount) | **GET** /subaccount/stat/aggregate/ips | 
[**subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount) | **GET** /subaccount/stat/aggregate/ip/{ipid}/providers | 
[**subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**](SubaccountstatApi.md#subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount) | **GET** /subaccount/stat/aggregate/providers | 
[**subAccountStatRouterGetAllSubAccountStats**](SubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStats) | **GET** /subaccount/stat/ | 
[**subAccountStatRouterGetAllSubAccountStatsByGroup**](SubaccountstatApi.md#subAccountStatRouterGetAllSubAccountStatsByGroup) | **GET** /subaccount/stat/group | 

<a name="subAccountStatRouterGetAllAggregateSubAccountStats"></a>
# **subAccountStatRouterGetAllAggregateSubAccountStats**
> ModelsStat subAccountStatRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, opts)



Get All Aggregate Sub-Account Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregateSubAccountStats(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregateSubAccountStatsByGroup"></a>
# **subAccountStatRouterGetAllAggregateSubAccountStatsByGroup**
> ModelsStat subAccountStatRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group, opts)



Get All Aggregate Sub-Account Stats by Group

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let group = "group_example"; // String | the group whose stats you want
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregateSubAccountStatsByGroup(xSubAccountApiKey, group, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount**
> [ModelsAGStat] subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xSubAccountApiKey, opts)



Get All Aggregated Group Stats for a Sub-Account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedGroupStatsForASubAccount(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAGStat]**](ModelsAGStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedIPStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedIPStatsForASubAccount**
> [ModelsAIPStat] subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xSubAccountApiKey, opts)



Get All Aggregated IP Stats for a Sub-Account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsAIPStat]**](ModelsAIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount**
> [ModelsPIPStat] subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount(xSubAccountApiKey, ipid, opts)



Get All Aggregated Provider Stats for a Specific IP of a Sub-Account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let ipid = 789; // Number | the IPId you want to get
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount(xSubAccountApiKey, ipid, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPIPStat]**](ModelsPIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount"></a>
# **subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount**
> [ModelsPIPStat] subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xSubAccountApiKey, opts)



Get All Aggregated Provider Stats for a Sub-Account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPIPStat]**](ModelsPIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllSubAccountStats"></a>
# **subAccountStatRouterGetAllSubAccountStats**
> [ModelsRStat] subAccountStatRouterGetAllSubAccountStats(xSubAccountApiKey, opts)



Get All Sub-Account Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllSubAccountStats(xSubAccountApiKey, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountStatRouterGetAllSubAccountStatsByGroup"></a>
# **subAccountStatRouterGetAllSubAccountStatsByGroup**
> [ModelsRStat] subAccountStatRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group, opts)



Get All Sub-Account Stats by Group

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountstatApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let group = "group_example"; // String | the tag whose stats you want
let opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.subAccountStatRouterGetAllSubAccountStatsByGroup(xSubAccountApiKey, group, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the tag whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

