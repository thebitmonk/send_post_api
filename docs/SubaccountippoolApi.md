# SendPostApi.SubaccountIppoolApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPPoolRouterCount**](SubaccountIppoolApi.md#iPPoolRouterCount) | **GET** /subaccount/ippool/count | 
[**iPPoolRouterCreate**](SubaccountIppoolApi.md#iPPoolRouterCreate) | **POST** /subaccount/ippool/ | 
[**iPPoolRouterDelete**](SubaccountIppoolApi.md#iPPoolRouterDelete) | **DELETE** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGet**](SubaccountIppoolApi.md#iPPoolRouterGet) | **GET** /subaccount/ippool/{ippoolid} | 
[**iPPoolRouterGetAll**](SubaccountIppoolApi.md#iPPoolRouterGetAll) | **GET** /subaccount/ippool/ | 
[**iPPoolRouterUpdate**](SubaccountIppoolApi.md#iPPoolRouterUpdate) | **PUT** /subaccount/ippool/{ippoolid} | 



## iPPoolRouterCount

> ModelsCountStat iPPoolRouterCount(xSubAccountApiKey)



Count Total IPPools

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
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


## iPPoolRouterCreate

> ModelsIPPool iPPoolRouterCreate(xSubAccountApiKey, body)



Create IPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The IPPool content
apiInstance.iPPoolRouterCreate(xSubAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The IPPool content | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## iPPoolRouterDelete

> ModelsDeleteResponse iPPoolRouterDelete(xSubAccountApiKey, ippoolid)



Delete IPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
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


## iPPoolRouterGet

> ModelsIPPool iPPoolRouterGet(xSubAccountApiKey, ippoolid)



Find IPPool by IPPoolId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
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


## iPPoolRouterGetAll

> [ModelsIPPool] iPPoolRouterGetAll(xSubAccountApiKey, opts)



Get All IPPools

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
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


## iPPoolRouterUpdate

> ModelsIPPool iPPoolRouterUpdate(xSubAccountApiKey, ippoolid, body)



Update IPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountIppoolApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let ippoolid = 789; // Number | The IPPoolId you want to update
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body
apiInstance.iPPoolRouterUpdate(xSubAccountApiKey, ippoolid, body, (error, data, response) => {
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
 **ippoolid** | **Number**| The IPPoolId you want to update | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The body | 

### Return type

[**ModelsIPPool**](ModelsIPPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

