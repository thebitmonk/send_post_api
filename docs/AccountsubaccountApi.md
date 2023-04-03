# SendPostApi.AccountsubaccountApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subAccountRouterCount**](AccountsubaccountApi.md#subAccountRouterCount) | **GET** /account/subaccount/count | 
[**subAccountRouterCreate**](AccountsubaccountApi.md#subAccountRouterCreate) | **POST** /account/subaccount/ | 
[**subAccountRouterDelete**](AccountsubaccountApi.md#subAccountRouterDelete) | **DELETE** /account/subaccount/{subAccountId} | 
[**subAccountRouterGet**](AccountsubaccountApi.md#subAccountRouterGet) | **GET** /account/subaccount/{subAccountId} | 
[**subAccountRouterGetAll**](AccountsubaccountApi.md#subAccountRouterGetAll) | **GET** /account/subaccount/ | 
[**subAccountRouterGetAllSubAccountIncidents**](AccountsubaccountApi.md#subAccountRouterGetAllSubAccountIncidents) | **GET** /account/subaccount/{subAccountId}/incident | 
[**subAccountRouterUpdate**](AccountsubaccountApi.md#subAccountRouterUpdate) | **PUT** /account/subaccount/{subAccountId} | 

<a name="subAccountRouterCount"></a>
# **subAccountRouterCount**
> ModelsCountStat subAccountRouterCount(xAccountApiKey, opts)



Count Total Subaccounts

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.subAccountRouterCount(xAccountApiKey, opts, (error, data, response) => {
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

<a name="subAccountRouterCreate"></a>
# **subAccountRouterCreate**
> ModelsSubAccount subAccountRouterCreate(body, xAccountApiKey)



Create SubAccount

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let body = new SendPostApi.ModelsESubAccount(); // ModelsESubAccount | The SubAccount content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.subAccountRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The SubAccount content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subAccountRouterDelete"></a>
# **subAccountRouterDelete**
> ModelsDeleteResponse subAccountRouterDelete(xAccountApiKey, subAccountId)



Delete SubAccount

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let subAccountId = 789; // Number | The SubAccountId you want to delete

apiInstance.subAccountRouterDelete(xAccountApiKey, subAccountId, (error, data, response) => {
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
 **subAccountId** | **Number**| The SubAccountId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountRouterGet"></a>
# **subAccountRouterGet**
> ModelsSubAccount subAccountRouterGet(xAccountApiKey, subAccountId)



Find SubAccount by SubAccountId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let subAccountId = 789; // Number | the SubAccountId you want to get

apiInstance.subAccountRouterGet(xAccountApiKey, subAccountId, (error, data, response) => {
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
 **subAccountId** | **Number**| the SubAccountId you want to get | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountRouterGetAll"></a>
# **subAccountRouterGetAll**
> [ModelsSubAccount] subAccountRouterGetAll(xAccountApiKey, opts)



Get All SubAccounts

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.subAccountRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **filterBy** | **String**| filterBy | [optional] 
 **filterValue** | **Number**| filterValue | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsSubAccount]**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountRouterGetAllSubAccountIncidents"></a>
# **subAccountRouterGetAllSubAccountIncidents**
> [ModelsIncident] subAccountRouterGetAllSubAccountIncidents(xAccountApiKey, subAccountId)



Get All Incidents associated with a sub-account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let subAccountId = 789; // Number | The SubAccountId you want to delete

apiInstance.subAccountRouterGetAllSubAccountIncidents(xAccountApiKey, subAccountId, (error, data, response) => {
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
 **subAccountId** | **Number**| The SubAccountId you want to delete | 

### Return type

[**[ModelsIncident]**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subAccountRouterUpdate"></a>
# **subAccountRouterUpdate**
> ModelsSubAccount subAccountRouterUpdate(body, xAccountApiKey, subAccountId)



Update SubAccount

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountsubaccountApi();
let body = new SendPostApi.ModelsESubAccount(); // ModelsESubAccount | The body
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let subAccountId = 789; // Number | The SubAccountId you want to update

apiInstance.subAccountRouterUpdate(body, xAccountApiKey, subAccountId, (error, data, response) => {
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
 **body** | [**ModelsESubAccount**](ModelsESubAccount.md)| The body | 
 **xAccountApiKey** | **String**| Account API Key | 
 **subAccountId** | **Number**| The SubAccountId you want to update | 

### Return type

[**ModelsSubAccount**](ModelsSubAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

