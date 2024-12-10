# SendPostApi.AccountintegrationApi

All URIs are relative to *https://apiv2.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountIntegrationRouterCount**](AccountintegrationApi.md#accountIntegrationRouterCount) | **GET** /account/integration/count | 
[**accountIntegrationRouterCreate**](AccountintegrationApi.md#accountIntegrationRouterCreate) | **POST** /account/integration/{itype} | 
[**accountIntegrationRouterDelete**](AccountintegrationApi.md#accountIntegrationRouterDelete) | **DELETE** /account/integration/{itype} | 
[**accountIntegrationRouterDisableHetrixToolsIPMonitoring**](AccountintegrationApi.md#accountIntegrationRouterDisableHetrixToolsIPMonitoring) | **DELETE** /account/integration/hetrixtools/monitor/{ipid} | 
[**accountIntegrationRouterEnableHetrixToolsIPMonitoring**](AccountintegrationApi.md#accountIntegrationRouterEnableHetrixToolsIPMonitoring) | **POST** /account/integration/hetrixtools/monitor/{ipid} | 
[**accountIntegrationRouterGetAll**](AccountintegrationApi.md#accountIntegrationRouterGetAll) | **GET** /account/integration/ | 
[**accountIntegrationRouterGetMonitoredIPStats**](AccountintegrationApi.md#accountIntegrationRouterGetMonitoredIPStats) | **GET** /account/integration/hetrixtools/monitor/stat/{ipid} | 
[**accountIntegrationRouterUpdate**](AccountintegrationApi.md#accountIntegrationRouterUpdate) | **PUT** /account/integration/{itype} | 


<a name="accountIntegrationRouterCount"></a>
# **accountIntegrationRouterCount**
> ModelsCountStat accountIntegrationRouterCount(xAccountApiKey)



Count Total AccountIntegrations <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterCount(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterCreate"></a>
# **accountIntegrationRouterCreate**
> ModelsIntegration accountIntegrationRouterCreate(xAccountApiKey, itype, body)



Create Integration <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var itype = "itype_example"; // String | The integration type you want to create

var body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterCreate(xAccountApiKey, itype, body, callback);
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

<a name="accountIntegrationRouterDelete"></a>
# **accountIntegrationRouterDelete**
> ModelsDeleteResponse accountIntegrationRouterDelete(xAccountApiKey, itype, body)



Delete Integration <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var itype = "itype_example"; // String | The integration type you want to update

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterDelete(xAccountApiKey, itype, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **itype** | **String**| The integration type you want to update | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterDisableHetrixToolsIPMonitoring"></a>
# **accountIntegrationRouterDisableHetrixToolsIPMonitoring**
> ModelsDeleteResponse accountIntegrationRouterDisableHetrixToolsIPMonitoring(xAccountApiKey, ipid, body)



Disable IP Monitoring for a single IP <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to disable monitoring for

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterDisableHetrixToolsIPMonitoring(xAccountApiKey, ipid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to disable monitoring for | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterEnableHetrixToolsIPMonitoring"></a>
# **accountIntegrationRouterEnableHetrixToolsIPMonitoring**
> ModelsResponse accountIntegrationRouterEnableHetrixToolsIPMonitoring(xAccountApiKey, ipid, body)



Enable IP Monitoring for a single IP <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to enable monitoring for

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterEnableHetrixToolsIPMonitoring(xAccountApiKey, ipid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to enable monitoring for | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsResponse**](ModelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterGetAll"></a>
# **accountIntegrationRouterGetAll**
> [ModelsIntegration] accountIntegrationRouterGetAll(xAccountApiKey)



Get All Integrations <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterGetAll(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterGetMonitoredIPStats"></a>
# **accountIntegrationRouterGetMonitoredIPStats**
> [ModelsRHetrixtoolsMonitorStat] accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts)



Get Monitored IP Stats <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId for which you want monitored stats

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
apiInstance.accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIntegrationRouterUpdate"></a>
# **accountIntegrationRouterUpdate**
> ModelsIntegration accountIntegrationRouterUpdate(xAccountApiKey, itype, body)



Update Integration <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountintegrationApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var itype = "itype_example"; // String | The integration type you want to update

var body = new SendPostApi.ModelsEIntegration(); // ModelsEIntegration | The Integration content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIntegrationRouterUpdate(xAccountApiKey, itype, body, callback);
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

