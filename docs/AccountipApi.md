# SendPostApi.AccountipApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPRouterAllocateIP**](AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
[**iPRouterCount**](AccountipApi.md#iPRouterCount) | **GET** /account/ip/count | 
[**iPRouterDelete**](AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
[**iPRouterGet**](AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
[**iPRouterGetAll**](AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
[**iPRouterGetAllIPIncidents**](AccountipApi.md#iPRouterGetAllIPIncidents) | **GET** /account/ip/{ipid}/incident | 
[**iPRouterGetIpHealth**](AccountipApi.md#iPRouterGetIpHealth) | **GET** /account/ip/{ipid}/health | 
[**iPRouterUpdate**](AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 

<a name="iPRouterAllocateIP"></a>
# **iPRouterAllocateIP**
> [ModelsIP] iPRouterAllocateIP(xAccountApiKey)



Allocate IP To Account

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterCount"></a>
# **iPRouterCount**
> ModelsCountStat iPRouterCount(xAccountApiKey, opts)



Count Total AccountIPs

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterDelete"></a>
# **iPRouterDelete**
> ModelsDeleteResponse iPRouterDelete(xAccountApiKey, ipid)



Delete IP

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterGet"></a>
# **iPRouterGet**
> ModelsIP iPRouterGet(xAccountApiKey, ipid)



Find IP by IPId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterGetAll"></a>
# **iPRouterGetAll**
> [ModelsIP] iPRouterGetAll(xAccountApiKey, opts)



Get All IPs

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterGetAllIPIncidents"></a>
# **iPRouterGetAllIPIncidents**
> [ModelsIncident] iPRouterGetAllIPIncidents(xAccountApiKey, ipid)



Get All Incidents associated with a IP

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterGetIpHealth"></a>
# **iPRouterGetIpHealth**
> ModelsIPHealthResponse iPRouterGetIpHealth(xAccountApiKey, ipid)



Get IP health

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
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

<a name="iPRouterUpdate"></a>
# **iPRouterUpdate**
> ModelsIP iPRouterUpdate(body, xAccountApiKey, ipid)



Update an IP

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountipApi();
let body = new SendPostApi.ModelsIIP(); // ModelsIIP | The IP Email Provider Settings
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | The IP you want to update

apiInstance.iPRouterUpdate(body, xAccountApiKey, ipid, (error, data, response) => {
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
 **body** | [**ModelsIIP**](ModelsIIP.md)| The IP Email Provider Settings | 
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| The IP you want to update | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

