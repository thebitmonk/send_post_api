# SendPostApi.AccountIntegrationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIntegrationRouterCount**](AccountIntegrationApi.md#accountIntegrationRouterCount) | **GET** /account/integration/count | 
[**accountIntegrationRouterCreate**](AccountIntegrationApi.md#accountIntegrationRouterCreate) | **POST** /account/integration/{itype} | 
[**accountIntegrationRouterDelete**](AccountIntegrationApi.md#accountIntegrationRouterDelete) | **DELETE** /account/integration/{itype} | 
[**accountIntegrationRouterDisableHetrixToolsIPMonitoring**](AccountIntegrationApi.md#accountIntegrationRouterDisableHetrixToolsIPMonitoring) | **DELETE** /account/integration/hetrixtools/monitor/{ipid} | 
[**accountIntegrationRouterEnableHetrixToolsIPMonitoring**](AccountIntegrationApi.md#accountIntegrationRouterEnableHetrixToolsIPMonitoring) | **POST** /account/integration/hetrixtools/monitor/{ipid} | 
[**accountIntegrationRouterGetAll**](AccountIntegrationApi.md#accountIntegrationRouterGetAll) | **GET** /account/integration/ | 
[**accountIntegrationRouterGetMonitoredIPStats**](AccountIntegrationApi.md#accountIntegrationRouterGetMonitoredIPStats) | **GET** /account/integration/hetrixtools/monitor/stat/{ipid} | 
[**accountIntegrationRouterUpdate**](AccountIntegrationApi.md#accountIntegrationRouterUpdate) | **PUT** /account/integration/{itype} | 



## accountIntegrationRouterCount

> ModelsCountStat accountIntegrationRouterCount(xAccountApiKey)



Count Total AccountIntegrations

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountIntegrationRouterCount(xAccountApiKey, (error, data, response) => {
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


## accountIntegrationRouterCreate

> ModelsIntegration accountIntegrationRouterCreate(xAccountApiKey, itype, body)



Create Integration

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let itype = "itype_example"; // String | The integration type you want to create
let body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content
apiInstance.accountIntegrationRouterCreate(xAccountApiKey, itype, body, (error, data, response) => {
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
 **itype** | **String**| The integration type you want to create | 
 **body** | [**ModelsEIntegration**](ModelsEIntegration.md)| The Integration content | 

### Return type

[**ModelsIntegration**](ModelsIntegration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountIntegrationRouterDelete

> ModelsDeleteResponse accountIntegrationRouterDelete(xAccountApiKey, itype)



Delete Integration

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let itype = "itype_example"; // String | The integration type you want to update
apiInstance.accountIntegrationRouterDelete(xAccountApiKey, itype, (error, data, response) => {
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
 **itype** | **String**| The integration type you want to update | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountIntegrationRouterDisableHetrixToolsIPMonitoring

> ModelsDeleteResponse accountIntegrationRouterDisableHetrixToolsIPMonitoring(xAccountApiKey, ipid)



Disable IP Monitoring for a single IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to disable monitoring for
apiInstance.accountIntegrationRouterDisableHetrixToolsIPMonitoring(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to disable monitoring for | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountIntegrationRouterEnableHetrixToolsIPMonitoring

> ModelsResponse accountIntegrationRouterEnableHetrixToolsIPMonitoring(xAccountApiKey, ipid)



Enable IP Monitoring for a single IP

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to enable monitoring for
apiInstance.accountIntegrationRouterEnableHetrixToolsIPMonitoring(xAccountApiKey, ipid, (error, data, response) => {
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
 **ipid** | **Number**| the IPId you want to enable monitoring for | 

### Return type

[**ModelsResponse**](ModelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountIntegrationRouterGetAll

> [ModelsIntegration] accountIntegrationRouterGetAll(xAccountApiKey)



Get All Integrations

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
apiInstance.accountIntegrationRouterGetAll(xAccountApiKey, (error, data, response) => {
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

[**[ModelsIntegration]**](ModelsIntegration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountIntegrationRouterGetMonitoredIPStats

> [ModelsRHetrixtoolsMonitorStat] accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts)



Get Monitored IP Stats

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId for which you want monitored stats
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts, (error, data, response) => {
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
 **ipid** | **Number**| the IPId for which you want monitored stats | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRHetrixtoolsMonitorStat]**](ModelsRHetrixtoolsMonitorStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountIntegrationRouterUpdate

> ModelsIntegration accountIntegrationRouterUpdate(xAccountApiKey, itype, body)



Update Integration

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountIntegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let itype = "itype_example"; // String | The integration type you want to update
let body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content
apiInstance.accountIntegrationRouterUpdate(xAccountApiKey, itype, body, (error, data, response) => {
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
 **itype** | **String**| The integration type you want to update | 
 **body** | [**ModelsEIntegration**](ModelsEIntegration.md)| The Integration content | 

### Return type

[**ModelsIntegration**](ModelsIntegration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

