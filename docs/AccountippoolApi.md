# SendPostApi.AccountippoolApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIPPoolRouterCount**](AccountippoolApi.md#accountIPPoolRouterCount) | **GET** /account/ippool/count | 
[**accountIPPoolRouterCreate**](AccountippoolApi.md#accountIPPoolRouterCreate) | **POST** /account/ippool/ | 
[**accountIPPoolRouterDelete**](AccountippoolApi.md#accountIPPoolRouterDelete) | **DELETE** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGet**](AccountippoolApi.md#accountIPPoolRouterGet) | **GET** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGetAll**](AccountippoolApi.md#accountIPPoolRouterGetAll) | **GET** /account/ippool/ | 
[**accountIPPoolRouterUpdate**](AccountippoolApi.md#accountIPPoolRouterUpdate) | **PUT** /account/ippool/{ippoolid} | 

<a name="accountIPPoolRouterCount"></a>
# **accountIPPoolRouterCount**
> ModelsCountStat accountIPPoolRouterCount(xAccountApiKey)



Count Total AccountIPPools

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.accountIPPoolRouterCount(xAccountApiKey, (error, data, response) => {
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

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountIPPoolRouterCreate"></a>
# **accountIPPoolRouterCreate**
> ModelsAccountIPPool accountIPPoolRouterCreate(body, xAccountApiKey)



Create AccountIPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The AccountIPPool content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.accountIPPoolRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The AccountIPPool content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIPPoolRouterDelete"></a>
# **accountIPPoolRouterDelete**
> ModelsDeleteResponse accountIPPoolRouterDelete(xAccountApiKey, ippoolid)



Delete AccountIPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ippoolid = 789; // Number | The AccountIPPoolId you want to delete

apiInstance.accountIPPoolRouterDelete(xAccountApiKey, ippoolid, (error, data, response) => {
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
 **ippoolid** | **Number**| The AccountIPPoolId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountIPPoolRouterGet"></a>
# **accountIPPoolRouterGet**
> ModelsAccountIPPool accountIPPoolRouterGet(xAccountApiKey, ippoolid)



Find AccountIPPool by AccountIPPoolId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ippoolid = 789; // Number | the AccountIPPoolId you want to get

apiInstance.accountIPPoolRouterGet(xAccountApiKey, ippoolid, (error, data, response) => {
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
 **ippoolid** | **Number**| the AccountIPPoolId you want to get | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountIPPoolRouterGetAll"></a>
# **accountIPPoolRouterGetAll**
> [ModelsAccountIPPool] accountIPPoolRouterGetAll(xAccountApiKey, opts)



Get All AccountIPPools

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.accountIPPoolRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsAccountIPPool]**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountIPPoolRouterUpdate"></a>
# **accountIPPoolRouterUpdate**
> ModelsAccountIPPool accountIPPoolRouterUpdate(body, xAccountApiKey, ippoolid)



Update AccountIPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountippoolApi();
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ippoolid = 789; // Number | The AccountIPPoolId you want to update

apiInstance.accountIPPoolRouterUpdate(body, xAccountApiKey, ippoolid, (error, data, response) => {
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
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The body | 
 **xAccountApiKey** | **String**| Account API Key | 
 **ippoolid** | **Number**| The AccountIPPoolId you want to update | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

