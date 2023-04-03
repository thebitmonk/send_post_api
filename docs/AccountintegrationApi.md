# SendPostApi.AccountintegrationApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIntegrationRouterCount**](AccountintegrationApi.md#accountIntegrationRouterCount) | **GET** /account/integration/count | 
[**accountIntegrationRouterCreate**](AccountintegrationApi.md#accountIntegrationRouterCreate) | **POST** /account/integration/{itype} | 
[**accountIntegrationRouterDelete**](AccountintegrationApi.md#accountIntegrationRouterDelete) | **DELETE** /account/integration/{itype} | 
[**accountIntegrationRouterDisableGlockappsIPMonitoring**](AccountintegrationApi.md#accountIntegrationRouterDisableGlockappsIPMonitoring) | **DELETE** /account/integration/glockapps/monitor/{ipid} | 
[**accountIntegrationRouterEnableGlockappsIPMonitoring**](AccountintegrationApi.md#accountIntegrationRouterEnableGlockappsIPMonitoring) | **POST** /account/integration/glockapps/monitor/{ipid} | 
[**accountIntegrationRouterGetAll**](AccountintegrationApi.md#accountIntegrationRouterGetAll) | **GET** /account/integration/ | 
[**accountIntegrationRouterGetMonitoredIPStats**](AccountintegrationApi.md#accountIntegrationRouterGetMonitoredIPStats) | **GET** /account/integration/glockapps/monitor/stat/{ipid} | 
[**accountIntegrationRouterUpdate**](AccountintegrationApi.md#accountIntegrationRouterUpdate) | **PUT** /account/integration/{itype} | 

<a name="accountIntegrationRouterCount"></a>
# **accountIntegrationRouterCount**
> ModelsCountStat accountIntegrationRouterCount(xAccountApiKey)



Count Total AccountIntegrations

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
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

<a name="accountIntegrationRouterCreate"></a>
# **accountIntegrationRouterCreate**
> ModelsIntegration accountIntegrationRouterCreate(body, xAccountApiKey, itype)



Create Integration

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
let body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let itype = "itype_example"; // String | The integration type you want to create

apiInstance.accountIntegrationRouterCreate(body, xAccountApiKey, itype, (error, data, response) => {
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
 **body** | [**ModelsEIntegration**](ModelsEIntegration.md)| The Integration content | 
 **xAccountApiKey** | **String**| Account API Key | 
 **itype** | **String**| The integration type you want to create | 

### Return type

[**ModelsIntegration**](ModelsIntegration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterDelete"></a>
# **accountIntegrationRouterDelete**
> ModelsDeleteResponse accountIntegrationRouterDelete(xAccountApiKey, itype)



Delete Integration

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
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

<a name="accountIntegrationRouterDisableGlockappsIPMonitoring"></a>
# **accountIntegrationRouterDisableGlockappsIPMonitoring**
> ModelsDeleteResponse accountIntegrationRouterDisableGlockappsIPMonitoring(xAccountApiKey, ipid)



Disable IP Monitoring for a single IP

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to disable monitoring for

apiInstance.accountIntegrationRouterDisableGlockappsIPMonitoring(xAccountApiKey, ipid, (error, data, response) => {
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

<a name="accountIntegrationRouterEnableGlockappsIPMonitoring"></a>
# **accountIntegrationRouterEnableGlockappsIPMonitoring**
> ModelsResponse accountIntegrationRouterEnableGlockappsIPMonitoring(xAccountApiKey, ipid)



Enable IP Monitoring for a single IP

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let ipid = 789; // Number | the IPId you want to enable monitoring for

apiInstance.accountIntegrationRouterEnableGlockappsIPMonitoring(xAccountApiKey, ipid, (error, data, response) => {
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

<a name="accountIntegrationRouterGetAll"></a>
# **accountIntegrationRouterGetAll**
> [ModelsIntegration] accountIntegrationRouterGetAll(xAccountApiKey)



Get All Integrations

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
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

<a name="accountIntegrationRouterGetMonitoredIPStats"></a>
# **accountIntegrationRouterGetMonitoredIPStats**
> [ModelsRGlockappsMonitorStat] accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts)



Get Monitored IP Stats

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
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

[**[ModelsRGlockappsMonitorStat]**](ModelsRGlockappsMonitorStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountIntegrationRouterUpdate"></a>
# **accountIntegrationRouterUpdate**
> ModelsIntegration accountIntegrationRouterUpdate(body, xAccountApiKey, itype)



Update Integration

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountintegrationApi();
let body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let itype = "itype_example"; // String | The integration type you want to update

apiInstance.accountIntegrationRouterUpdate(body, xAccountApiKey, itype, (error, data, response) => {
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
 **body** | [**ModelsEIntegration**](ModelsEIntegration.md)| The Integration content | 
 **xAccountApiKey** | **String**| Account API Key | 
 **itype** | **String**| The integration type you want to update | 

### Return type

[**ModelsIntegration**](ModelsIntegration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

