# SendPostApi.AccountStatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatRouterGetAccountCycleUsage**](AccountStatApi.md#accountStatRouterGetAccountCycleUsage) | **GET** /account/stat/cycleusage | 
[**accountStatRouterGetAllAccountStats**](AccountStatApi.md#accountStatRouterGetAllAccountStats) | **GET** /account/stat/ | 
[**accountStatRouterGetAllAccountStatsByGroup**](AccountStatApi.md#accountStatRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
[**accountStatRouterGetAllAggregateAccountStats**](AccountStatApi.md#accountStatRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
[**accountStatRouterGetAllAggregateAccountStatsByGroup**](AccountStatApi.md#accountStatRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 
[**accountStatRouterGetAllAggregateDomainStats**](AccountStatApi.md#accountStatRouterGetAllAggregateDomainStats) | **GET** /account/stat/aggregate/domain | 
[**accountStatRouterGetAllAggregateDomainStatsCount**](AccountStatApi.md#accountStatRouterGetAllAggregateDomainStatsCount) | **GET** /account/stat/aggregate/domain/count | 
[**accountStatRouterGetAllAggregateIPStats**](AccountStatApi.md#accountStatRouterGetAllAggregateIPStats) | **GET** /account/stat/aggregate/ip | 
[**accountStatRouterGetAllAggregateIPStatsCount**](AccountStatApi.md#accountStatRouterGetAllAggregateIPStatsCount) | **GET** /account/stat/aggregate/ip/count | 
[**accountStatRouterGetAllAggregateSubAccountStats**](AccountStatApi.md#accountStatRouterGetAllAggregateSubAccountStats) | **GET** /account/stat/aggregate/subaccount | 
[**accountStatRouterGetAllAggregateSubAccountStatsCount**](AccountStatApi.md#accountStatRouterGetAllAggregateSubAccountStatsCount) | **GET** /account/stat/aggregate/subaccount/count | 
[**accountStatRouterGetAllAggregateThirdPartyProvidersStats**](AccountStatApi.md#accountStatRouterGetAllAggregateThirdPartyProvidersStats) | **GET** /account/stat/aggregate/tpsp | 
[**accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount**](AccountStatApi.md#accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount) | **GET** /account/stat/aggregate/tpsp/count | 



## accountStatRouterGetAccountCycleUsage

> ModelsAccountCycleUsage accountStatRouterGetAccountCycleUsage(xAccountApiKey)



Responds back with Account Processed Mails Stat

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountStatRouterGetAccountCycleUsage(xAccountApiKey, (error, data, response) => {
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

### Return type

[**ModelsAccountCycleUsage**](ModelsAccountCycleUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAccountStats

> [ModelsRStat] accountStatRouterGetAllAccountStats(xAccountApiKey, opts)



Get All Account Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.accountStatRouterGetAllAccountStats(xAccountApiKey, opts, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAccountStatsByGroup

> [ModelsRStat] accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Account Stats by Group

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key
let group = "group_example"; // String | the group whose stats you want
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateAccountStats

> ModelsStat accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts)



Get All Aggregate Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts, (error, data, response) => {
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
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateAccountStatsByGroup

> ModelsStat accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Aggregate Stats by Group

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key
let group = "group_example"; // String | the group whose stats you want
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Sub-Account API Key | 
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


## accountStatRouterGetAllAggregateDomainStats

> [ModelsAGDomainStat] accountStatRouterGetAllAggregateDomainStats(xAccountApiKey, from, to, opts)



Get All Aggregate Domain Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};
apiInstance.accountStatRouterGetAllAggregateDomainStats(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **orderBy** | **String**| orderBy | [optional] 
 **sortOrder** | **String**| sortOrder | [optional] 
 **search** | **String**| search term | [optional] 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[ModelsAGDomainStat]**](ModelsAGDomainStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateDomainStatsCount

> ModelsCountStat accountStatRouterGetAllAggregateDomainStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate Domain Stats Count

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.accountStatRouterGetAllAggregateDomainStatsCount(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateIPStats

> [ModelsAGIPStat] accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts)



Get All Aggregate IP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'limitBy': "limitBy_example", // String | limitBy
  'limitValue': 789, // Number | limitValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};
apiInstance.accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **limitBy** | **String**| limitBy | [optional] 
 **limitValue** | **Number**| limitValue | [optional] 
 **orderBy** | **String**| orderBy | [optional] 
 **sortOrder** | **String**| sortOrder | [optional] 
 **search** | **String**| search term | [optional] 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[ModelsAGIPStat]**](ModelsAGIPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateIPStatsCount

> ModelsCountStat accountStatRouterGetAllAggregateIPStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate IP Stats Count

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'limitBy': "limitBy_example", // String | limitBy
  'limitValue': 789, // Number | limitValue
  'search': "search_example" // String | search term
};
apiInstance.accountStatRouterGetAllAggregateIPStatsCount(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **limitBy** | **String**| limitBy | [optional] 
 **limitValue** | **Number**| limitValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateSubAccountStats

> [ModelsAGSubAccountStat] accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts)



Get All Aggregate SubAccount Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};
apiInstance.accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **orderBy** | **String**| orderBy | [optional] 
 **sortOrder** | **String**| sortOrder | [optional] 
 **search** | **String**| search term | [optional] 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[ModelsAGSubAccountStat]**](ModelsAGSubAccountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateSubAccountStatsCount

> ModelsCountStat accountStatRouterGetAllAggregateSubAccountStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate SubAccount Stats Count

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.accountStatRouterGetAllAggregateSubAccountStatsCount(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateThirdPartyProvidersStats

> [ModelsAGTPSPStat] accountStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, from, to, opts)



Get All Aggregate Third Party Providers Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};
apiInstance.accountStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **orderBy** | **String**| orderBy | [optional] 
 **sortOrder** | **String**| sortOrder | [optional] 
 **search** | **String**| search term | [optional] 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 

### Return type

[**[ModelsAGTPSPStat]**](ModelsAGTPSPStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount

> ModelsCountStat accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate Third Party Providers Stats Count

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountStatApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let from = "from_example"; // String | from date
let to = "to_example"; // String | to date
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount(xAccountApiKey, from, to, opts, (error, data, response) => {
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
 **from** | **String**| from date | 
 **to** | **String**| to date | 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

