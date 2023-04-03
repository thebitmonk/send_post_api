# SendPostApi.SubaccountippoolApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPPoolRouterCount**](SubaccountippoolApi.md#iPPoolRouterCount) | **GET** /subaccount/ippool/count | 
[**iPPoolRouterCreate**](SubaccountippoolApi.md#iPPoolRouterCreate) | **POST** /subaccount/ippool/ | 
[**iPPoolRouterDelete**](SubaccountippoolApi.md#iPPoolRouterDelete) | **DELETE** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGet**](SubaccountippoolApi.md#iPPoolRouterGet) | **GET** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGetAll**](SubaccountippoolApi.md#iPPoolRouterGetAll) | **GET** /subaccount/ippool/ | 
[**iPPoolRouterUpdate**](SubaccountippoolApi.md#iPPoolRouterUpdate) | **PUT** /subaccount/ippool/{ippoolid} | 

<a name="iPPoolRouterCount"></a>
# **iPPoolRouterCount**
> ModelsCountStat iPPoolRouterCount(xSubAccountApiKey)



Count Total IPPools

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.iPPoolRouterCount(xSubAccountApiKey, (error, data, response) => {
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

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iPPoolRouterCreate"></a>
# **iPPoolRouterCreate**
> ModelsIPPool iPPoolRouterCreate(body, xSubAccountApiKey)



Create IPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The IPPool content
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.iPPoolRouterCreate(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The IPPool content | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPPoolRouterDelete"></a>
# **iPPoolRouterDelete**
> ModelsDeleteResponse iPPoolRouterDelete(xSubAccountApiKey, ippoolid)



Delete IPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let ippoolid = 789; // Number | The IPPoolId you want to delete

apiInstance.iPPoolRouterDelete(xSubAccountApiKey, ippoolid, (error, data, response) => {
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
 **ippoolid** | **Number**| The IPPoolId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iPPoolRouterGet"></a>
# **iPPoolRouterGet**
> ModelsIPPool iPPoolRouterGet(xSubAccountApiKey, ippoolid)



Find IPPool by IPPoolId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let ippoolid = 789; // Number | the IPPoolId you want to get

apiInstance.iPPoolRouterGet(xSubAccountApiKey, ippoolid, (error, data, response) => {
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
 **ippoolid** | **Number**| the IPPoolId you want to get | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iPPoolRouterGetAll"></a>
# **iPPoolRouterGetAll**
> [ModelsIPPool] iPPoolRouterGetAll(xSubAccountApiKey, opts)



Get All IPPools

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.iPPoolRouterGetAll(xSubAccountApiKey, opts, (error, data, response) => {
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
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsIPPool]**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iPPoolRouterUpdate"></a>
# **iPPoolRouterUpdate**
> ModelsIPPool iPPoolRouterUpdate(body, xSubAccountApiKey, ippoolid)



Update IPPool

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountippoolApi();
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let ippoolid = 789; // Number | The IPPoolId you want to update

apiInstance.iPPoolRouterUpdate(body, xSubAccountApiKey, ippoolid, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **ippoolid** | **Number**| The IPPoolId you want to update | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

