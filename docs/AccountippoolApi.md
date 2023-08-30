# SendPostApi.AccountIppoolApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIPPoolRouterCount**](AccountIppoolApi.md#accountIPPoolRouterCount) | **GET** /account/ippool/count | 
[**accountIPPoolRouterCreate**](AccountIppoolApi.md#accountIPPoolRouterCreate) | **POST** /account/ippool/ | 
[**accountIPPoolRouterDelete**](AccountIppoolApi.md#accountIPPoolRouterDelete) | **DELETE** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGet**](AccountIppoolApi.md#accountIPPoolRouterGet) | **GET** /account/ippool/{ippoolid} | 
[**accountIPPoolRouterGetAll**](AccountIppoolApi.md#accountIPPoolRouterGetAll) | **GET** /account/ippool/ | 
[**accountIPPoolRouterSearchAll**](AccountIppoolApi.md#accountIPPoolRouterSearchAll) | **GET** /account/ippool/search | 
[**accountIPPoolRouterUpdate**](AccountIppoolApi.md#accountIPPoolRouterUpdate) | **PUT** /account/ippool/{ippoolid} | 



## accountIPPoolRouterCount

> ModelsCountStat accountIPPoolRouterCount(xAccountApiKey)



Count Total AccountIPPools

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
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


## accountIPPoolRouterCreate

> ModelsAccountIPPool accountIPPoolRouterCreate(xAccountApiKey, body)



Create AccountIPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The AccountIPPool content
apiInstance.accountIPPoolRouterCreate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The AccountIPPool content | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountIPPoolRouterDelete

> ModelsDeleteResponse accountIPPoolRouterDelete(xAccountApiKey, ippoolid)



Delete AccountIPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
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


## accountIPPoolRouterGet

> ModelsAccountIPPool accountIPPoolRouterGet(xAccountApiKey, ippoolid)



Find AccountIPPool by AccountIPPoolId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
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


## accountIPPoolRouterGetAll

> [ModelsAccountIPPool] accountIPPoolRouterGetAll(xAccountApiKey, opts)



Get All AccountIPPools

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
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


## accountIPPoolRouterSearchAll

> [ModelsAccountIPPool] accountIPPoolRouterSearchAll(xAccountApiKey, opts)



Get All AccountIPPools without fetching IPs, TPSPs and other pools

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.accountIPPoolRouterSearchAll(xAccountApiKey, opts, (error, data, response) => {
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


## accountIPPoolRouterUpdate

> ModelsAccountIPPool accountIPPoolRouterUpdate(xAccountApiKey, ippoolid, body)



Update AccountIPPool

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIppoolApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ippoolid = 789; // Number | The AccountIPPoolId you want to update
let body = new SendPostApi.ModelsEIPPool(); // ModelsEIPPool | The body
apiInstance.accountIPPoolRouterUpdate(xAccountApiKey, ippoolid, body, (error, data, response) => {
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
 **ippoolid** | **Number**| The AccountIPPoolId you want to update | 
 **body** | [**ModelsEIPPool**](ModelsEIPPool.md)| The body | 

### Return type

[**ModelsAccountIPPool**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

