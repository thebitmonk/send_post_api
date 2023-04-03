# SendPostApi.SubaccountdomainApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainRouterCount**](SubaccountdomainApi.md#domainRouterCount) | **GET** /subaccount/domain/count | 
[**domainRouterCreate**](SubaccountdomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
[**domainRouterDelete**](SubaccountdomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
[**domainRouterGet**](SubaccountdomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
[**domainRouterGetAll**](SubaccountdomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
[**domainRouterUpdate**](SubaccountdomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
[**domainRouterVerify**](SubaccountdomainApi.md#domainRouterVerify) | **POST** /subaccount/domain/{domainId}/verify | 
[**domainRouterVerifyByToken**](SubaccountdomainApi.md#domainRouterVerifyByToken) | **POST** /subaccount/domain/{domainId}/verify/email/{token} | 
[**domainRouterVerifyRequest**](SubaccountdomainApi.md#domainRouterVerifyRequest) | **POST** /subaccount/domain/{domainId}/verify/email | 

<a name="domainRouterCount"></a>
# **domainRouterCount**
> ModelsCountStat domainRouterCount(xSubAccountApiKey)



Count Total Domains

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.domainRouterCount(xSubAccountApiKey, (error, data, response) => {
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

<a name="domainRouterCreate"></a>
# **domainRouterCreate**
> ModelsDomain domainRouterCreate(body, xSubAccountApiKey)



Create Domain

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The Domain content
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

apiInstance.domainRouterCreate(body, xSubAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The Domain content | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterDelete"></a>
# **domainRouterDelete**
> ModelsDeleteResponse domainRouterDelete(xSubAccountApiKey, domainId)



Delete Domain

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | The DomainId you want to delete

apiInstance.domainRouterDelete(xSubAccountApiKey, domainId, (error, data, response) => {
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
 **domainId** | **Number**| The DomainId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainRouterGet"></a>
# **domainRouterGet**
> ModelsDomain domainRouterGet(xSubAccountApiKey, domainId)



Find Domain by DomainId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | the DomainId you want to get

apiInstance.domainRouterGet(xSubAccountApiKey, domainId, (error, data, response) => {
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
 **domainId** | **Number**| the DomainId you want to get | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainRouterGetAll"></a>
# **domainRouterGetAll**
> [ModelsDomain] domainRouterGetAll(xSubAccountApiKey, opts)



Get All Domains

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.domainRouterGetAll(xSubAccountApiKey, opts, (error, data, response) => {
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

[**[ModelsDomain]**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainRouterUpdate"></a>
# **domainRouterUpdate**
> ModelsDomain domainRouterUpdate(body, xSubAccountApiKey, domainId)



Update Domain

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The body
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | The DomainId you want to update

apiInstance.domainRouterUpdate(body, xSubAccountApiKey, domainId, (error, data, response) => {
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
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The body | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| The DomainId you want to update | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterVerify"></a>
# **domainRouterVerify**
> ModelsDomain domainRouterVerify(xSubAccountApiKey, domainId)



Verify Domain By Domain Id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | the DomainId you want to get

apiInstance.domainRouterVerify(xSubAccountApiKey, domainId, (error, data, response) => {
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
 **domainId** | **Number**| the DomainId you want to get | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainRouterVerifyByToken"></a>
# **domainRouterVerifyByToken**
> ModelsDomain domainRouterVerifyByToken(xSubAccountApiKey, domainId, token)



Verify Domain By Signed Token

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | the DomainId you want to get
let token = "token_example"; // String | The signed token used to verify

apiInstance.domainRouterVerifyByToken(xSubAccountApiKey, domainId, token, (error, data, response) => {
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
 **domainId** | **Number**| the DomainId you want to get | 
 **token** | **String**| The signed token used to verify | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="domainRouterVerifyRequest"></a>
# **domainRouterVerifyRequest**
> domainRouterVerifyRequest(body, xSubAccountApiKey, domainId, opts)



Verify Domain By Email Request

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountdomainApi();
let body = new SendPostApi.ModelsVerifyByTokenRequest(); // ModelsVerifyByTokenRequest | The Email to be used to verify
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | the DomainId you want to get
let opts = { 
  'redirectPath': "redirectPath_example" // String | redirectPath
};
apiInstance.domainRouterVerifyRequest(body, xSubAccountApiKey, domainId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsVerifyByTokenRequest**](ModelsVerifyByTokenRequest.md)| The Email to be used to verify | 
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| the DomainId you want to get | 
 **redirectPath** | **String**| redirectPath | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

