# SendPostApi.AccountstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatRouterGetAllAccountStats**](AccountstatApi.md#accountStatRouterGetAllAccountStats) | **GET** /account/stat/ | 
[**accountStatRouterGetAllAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
[**accountStatRouterGetAllAggregateAccountStats**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
[**accountStatRouterGetAllAggregateAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 
[**accountStatRouterGetAllAggregateIPStats**](AccountstatApi.md#accountStatRouterGetAllAggregateIPStats) | **GET** /account/stat/aggregate/ip | 
[**accountStatRouterGetAllAggregateSubAccountStats**](AccountstatApi.md#accountStatRouterGetAllAggregateSubAccountStats) | **GET** /account/stat/aggregate/subaccount | 

<a name="accountStatRouterGetAllAccountStats"></a>
# **accountStatRouterGetAllAccountStats**
> [ModelsRStat] accountStatRouterGetAllAccountStats(xAccountApiKey, opts)



Get All Account Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

<a name="accountStatRouterGetAllAccountStatsByGroup"></a>
# **accountStatRouterGetAllAccountStatsByGroup**
> [ModelsRStat] accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Account Stats by Group

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

<a name="accountStatRouterGetAllAggregateAccountStats"></a>
# **accountStatRouterGetAllAggregateAccountStats**
> ModelsStat accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts)



Get All Aggregate Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

<a name="accountStatRouterGetAllAggregateAccountStatsByGroup"></a>
# **accountStatRouterGetAllAggregateAccountStatsByGroup**
> ModelsStat accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Aggregate Stats by Group

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

<a name="accountStatRouterGetAllAggregateIPStats"></a>
# **accountStatRouterGetAllAggregateIPStats**
> [ModelsAGIPStat] accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts)



Get All Aggregate IP Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

<a name="accountStatRouterGetAllAggregateSubAccountStats"></a>
# **accountStatRouterGetAllAggregateSubAccountStats**
> [ModelsAGSubAccountStat] accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts)



Get All Aggregate SubAccount Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountstatApi();
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

