# SendPostApi.AccountstatApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatRouterGetAccountCycleUsage**](AccountstatApi.md#accountStatRouterGetAccountCycleUsage) | **GET** /account/stat/cycleusage | 
[**accountStatRouterGetAllAccountStats**](AccountstatApi.md#accountStatRouterGetAllAccountStats) | **GET** /account/stat/ | 
[**accountStatRouterGetAllAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
[**accountStatRouterGetAllAggregateAccountStats**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
[**accountStatRouterGetAllAggregateAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 
[**accountStatRouterGetAllAggregateDomainStats**](AccountstatApi.md#accountStatRouterGetAllAggregateDomainStats) | **GET** /account/stat/aggregate/domain | 
[**accountStatRouterGetAllAggregateDomainStatsCount**](AccountstatApi.md#accountStatRouterGetAllAggregateDomainStatsCount) | **GET** /account/stat/aggregate/domain/count | 
[**accountStatRouterGetAllAggregateIPStats**](AccountstatApi.md#accountStatRouterGetAllAggregateIPStats) | **GET** /account/stat/aggregate/ip | 
[**accountStatRouterGetAllAggregateIPStatsCount**](AccountstatApi.md#accountStatRouterGetAllAggregateIPStatsCount) | **GET** /account/stat/aggregate/ip/count | 
[**accountStatRouterGetAllAggregateSubAccountStats**](AccountstatApi.md#accountStatRouterGetAllAggregateSubAccountStats) | **GET** /account/stat/aggregate/subaccount | 
[**accountStatRouterGetAllAggregateSubAccountStatsCount**](AccountstatApi.md#accountStatRouterGetAllAggregateSubAccountStatsCount) | **GET** /account/stat/aggregate/subaccount/count | 
[**accountStatRouterGetAllAggregateThirdPartyProvidersStats**](AccountstatApi.md#accountStatRouterGetAllAggregateThirdPartyProvidersStats) | **GET** /account/stat/aggregate/tpsp | 
[**accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount**](AccountstatApi.md#accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount) | **GET** /account/stat/aggregate/tpsp/count | 


<a name="accountStatRouterGetAccountCycleUsage"></a>
# **accountStatRouterGetAccountCycleUsage**
> ModelsAccountCycleUsage accountStatRouterGetAccountCycleUsage(xAccountApiKey)



Responds back with Account Processed Mails Stat <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAccountCycleUsage(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAccountStats"></a>
# **accountStatRouterGetAllAccountStats**
> [ModelsRStat] accountStatRouterGetAllAccountStats(xAccountApiKey, opts)



Get All Account Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

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
apiInstance.accountStatRouterGetAllAccountStats(xAccountApiKey, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAccountStatsByGroup"></a>
# **accountStatRouterGetAllAccountStatsByGroup**
> [ModelsRStat] accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Account Stats by Group <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

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
apiInstance.accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateAccountStats"></a>
# **accountStatRouterGetAllAggregateAccountStats**
> ModelsStat accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts)



Get All Aggregate Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateAccountStatsByGroup"></a>
# **accountStatRouterGetAllAggregateAccountStatsByGroup**
> ModelsStat accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Aggregate Stats by Group <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

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
apiInstance.accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateDomainStats"></a>
# **accountStatRouterGetAllAggregateDomainStats**
> [ModelsAGDomainStat] accountStatRouterGetAllAggregateDomainStats(xAccountApiKey, from, to, opts)



Get All Aggregate Domain Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateDomainStats(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateDomainStatsCount"></a>
# **accountStatRouterGetAllAggregateDomainStatsCount**
> ModelsCountStat accountStatRouterGetAllAggregateDomainStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate Domain Stats Count <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateDomainStatsCount(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateIPStats"></a>
# **accountStatRouterGetAllAggregateIPStats**
> [ModelsAGIPStat] accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts)



Get All Aggregate IP Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateIPStats(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateIPStatsCount"></a>
# **accountStatRouterGetAllAggregateIPStatsCount**
> ModelsCountStat accountStatRouterGetAllAggregateIPStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate IP Stats Count <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'limitBy': "limitBy_example", // String | limitBy
  'limitValue': 789, // Number | limitValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateIPStatsCount(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateSubAccountStats"></a>
# **accountStatRouterGetAllAggregateSubAccountStats**
> [ModelsAGSubAccountStat] accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts)



Get All Aggregate SubAccount Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateSubAccountStats(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateSubAccountStatsCount"></a>
# **accountStatRouterGetAllAggregateSubAccountStatsCount**
> ModelsCountStat accountStatRouterGetAllAggregateSubAccountStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate SubAccount Stats Count <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateSubAccountStatsCount(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateThirdPartyProvidersStats"></a>
# **accountStatRouterGetAllAggregateThirdPartyProvidersStats**
> [ModelsAGTPSPStat] accountStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, from, to, opts)



Get All Aggregate Third Party Providers Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'orderBy': "orderBy_example", // String | orderBy
  'sortOrder': "sortOrder_example", // String | sortOrder
  'search': "search_example", // String | search term
  'offset': 789, // Number | offset
  'limit': 789 // Number | limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateThirdPartyProvidersStats(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount"></a>
# **accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount**
> ModelsCountStat accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount(xAccountApiKey, from, to, opts)



Get All Aggregate Third Party Providers Stats Count <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var from = "from_example"; // String | from date

var to = "to_example"; // String | to date

var opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateThirdPartyProvidersStatsCount(xAccountApiKey, from, to, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

