# SendPostApi.AccountIpApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPRouterAllocateIP**](AccountIpApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
[**iPRouterCount**](AccountIpApi.md#iPRouterCount) | **GET** /account/ip/count | 
[**iPRouterDelete**](AccountIpApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
[**iPRouterGet**](AccountIpApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
[**iPRouterGetAll**](AccountIpApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
[**iPRouterGetAllIPIncidents**](AccountIpApi.md#iPRouterGetAllIPIncidents) | **GET** /account/ip/{ipid}/incident | 
[**iPRouterGetIPAccountIPPools**](AccountIpApi.md#iPRouterGetIPAccountIPPools) | **GET** /account/ip/{ipid}/ippool | 
[**iPRouterGetIpHealth**](AccountIpApi.md#iPRouterGetIpHealth) | **GET** /account/ip/{ipid}/health | 
[**iPRouterUpdate**](AccountIpApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 



## iPRouterAllocateIP

> [ModelsIP] iPRouterAllocateIP(xAccountApiKey)



Allocate IP To Account

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.iPRouterAllocateIP(xAccountApiKey, (error, data, response) => {
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

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterCount

> ModelsCountStat iPRouterCount(xAccountApiKey, opts)



Count Total AccountIPs

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.iPRouterCount(xAccountApiKey, opts, (error, data, response) => {
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


## iPRouterDelete

> ModelsDeleteResponse iPRouterDelete(xAccountApiKey, ipid)



Delete IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | The IPId you want to delete
apiInstance.iPRouterDelete(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| The IPId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterGet

> ModelsIP iPRouterGet(xAccountApiKey, ipid)



Find IP by IPId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
apiInstance.iPRouterGet(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterGetAll

> [ModelsIP] iPRouterGetAll(xAccountApiKey, opts)



Get All IPs

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'filterBy': "filterBy_example", // String | filterBy
  'filterValue': 789, // Number | filterValue
  'search': "search_example" // String | search term
};
apiInstance.iPRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterGetAllIPIncidents

> [ModelsIncident] iPRouterGetAllIPIncidents(xAccountApiKey, ipid)



Get All Incidents associated with a IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | The ipid whose incidents you want to retrieve
apiInstance.iPRouterGetAllIPIncidents(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| The ipid whose incidents you want to retrieve | 

### Return type

[**[ModelsIncident]**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterGetIPAccountIPPools

> [ModelsAccountIPPool] iPRouterGetIPAccountIPPools(xAccountApiKey, ipid)



Find AccountIPPools for IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to get
apiInstance.iPRouterGetIPAccountIPPools(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to get | 

### Return type

[**[ModelsAccountIPPool]**](ModelsAccountIPPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterGetIpHealth

> ModelsIPHealthResponse iPRouterGetIpHealth(xAccountApiKey, ipid)



Get IP health

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | The IP you want to update
apiInstance.iPRouterGetIpHealth(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| The IP you want to update | 

### Return type

[**ModelsIPHealthResponse**](ModelsIPHealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## iPRouterUpdate

> ModelsIP iPRouterUpdate(xAccountApiKey, ipid, body)



Update an IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIpApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | The IP you want to update
let body = new SendPostApi.ModelsIIP(); // ModelsIIP | The IP Email Provider Settings
apiInstance.iPRouterUpdate(xAccountApiKey, ipid, body, (error, data, response) => {
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
 **ipid** | **Number**| The IP you want to update | 
 **body** | [**ModelsIIP**](ModelsIIP.md)| The IP Email Provider Settings | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

