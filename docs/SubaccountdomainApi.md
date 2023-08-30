# SendPostApi.SubaccountDomainApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainRouterCount**](SubaccountDomainApi.md#domainRouterCount) | **GET** /subaccount/domain/count | 
[**domainRouterCreate**](SubaccountDomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
[**domainRouterDelete**](SubaccountDomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
[**domainRouterGet**](SubaccountDomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
[**domainRouterGetAll**](SubaccountDomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
[**domainRouterUpdate**](SubaccountDomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
[**domainRouterVerify**](SubaccountDomainApi.md#domainRouterVerify) | **POST** /subaccount/domain/{domainId}/verify | 
[**domainRouterVerifyByToken**](SubaccountDomainApi.md#domainRouterVerifyByToken) | **POST** /subaccount/domain/{domainId}/verify/email/{token} | 
[**domainRouterVerifyRequest**](SubaccountDomainApi.md#domainRouterVerifyRequest) | **POST** /subaccount/domain/{domainId}/verify/email | 



## domainRouterCount

> ModelsCountStat domainRouterCount(xSubAccountApiKey)



Count Total Domains

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterCreate

> ModelsDomain domainRouterCreate(xSubAccountApiKey, body)



Create Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The Domain content
apiInstance.domainRouterCreate(xSubAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The Domain content | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainRouterDelete

> ModelsDeleteResponse domainRouterDelete(xSubAccountApiKey, domainId)



Delete Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterGet

> ModelsDomain domainRouterGet(xSubAccountApiKey, domainId)



Find Domain by DomainId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterGetAll

> [ModelsDomain] domainRouterGetAll(xSubAccountApiKey, opts)



Get All Domains

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterUpdate

> ModelsDomain domainRouterUpdate(xSubAccountApiKey, domainId, body)



Update Domain

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | The DomainId you want to update
let body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The body
apiInstance.domainRouterUpdate(xSubAccountApiKey, domainId, body, (error, data, response) => {
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
 **domainId** | **Number**| The DomainId you want to update | 
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The body | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainRouterVerify

> ModelsDomain domainRouterVerify(xSubAccountApiKey, domainId)



Verify Domain By Domain Id

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterVerifyByToken

> ModelsDomain domainRouterVerifyByToken(xSubAccountApiKey, domainId, token)



Verify Domain By Signed Token

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
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


## domainRouterVerifyRequest

> domainRouterVerifyRequest(xSubAccountApiKey, domainId, body, opts)



Verify Domain By Email Request

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SubaccountDomainApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let domainId = 789; // Number | the DomainId you want to get
let body = new SendPostApi.ModelsVerifyByTokenRequest(); // ModelsVerifyByTokenRequest | The Email to be used to verify
let opts = {
  'redirectPath': "redirectPath_example" // String | redirectPath
};
apiInstance.domainRouterVerifyRequest(xSubAccountApiKey, domainId, body, opts, (error, data, response) => {
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
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| the DomainId you want to get | 
 **body** | [**ModelsVerifyByTokenRequest**](ModelsVerifyByTokenRequest.md)| The Email to be used to verify | 
 **redirectPath** | **String**| redirectPath | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

