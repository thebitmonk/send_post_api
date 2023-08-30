# SendPostApi.AccountTemplateApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountTemplateRouterCopy**](AccountTemplateApi.md#accountTemplateRouterCopy) | **POST** /account/template/{templateid}/copy | 
[**accountTemplateRouterCount**](AccountTemplateApi.md#accountTemplateRouterCount) | **GET** /account/template/count | 
[**accountTemplateRouterCreate**](AccountTemplateApi.md#accountTemplateRouterCreate) | **POST** /account/template/ | 
[**accountTemplateRouterDelete**](AccountTemplateApi.md#accountTemplateRouterDelete) | **DELETE** /account/template/{templateid} | 
[**accountTemplateRouterGet**](AccountTemplateApi.md#accountTemplateRouterGet) | **GET** /account/template/{templateid} | 
[**accountTemplateRouterGetAll**](AccountTemplateApi.md#accountTemplateRouterGetAll) | **GET** /account/template/ | 
[**accountTemplateRouterUpdate**](AccountTemplateApi.md#accountTemplateRouterUpdate) | **PUT** /account/template/{templateid} | 



## accountTemplateRouterCopy

> ModelsAccountTemplate accountTemplateRouterCopy(xAccountApiKey, templateid)



Copy AccountTemplate

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let templateid = 789; // Number | The id of the template you want to copy
apiInstance.accountTemplateRouterCopy(xAccountApiKey, templateid, (error, data, response) => {
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
 **templateid** | **Number**| The id of the template you want to copy | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountTemplateRouterCount

> ModelsCountStat accountTemplateRouterCount(xAccountApiKey, opts)



Count total templates

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'search': "search_example" // String | search term
};
apiInstance.accountTemplateRouterCount(xAccountApiKey, opts, (error, data, response) => {
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
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountTemplateRouterCreate

> ModelsAccountTemplate accountTemplateRouterCreate(xAccountApiKey, body)



Create a new template

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsAccountTemplate(); // ModelsAccountTemplate | The AccountTemplate content
apiInstance.accountTemplateRouterCreate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsAccountTemplate**](ModelsAccountTemplate.md)| The AccountTemplate content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountTemplateRouterDelete

> ModelsDeleteResponse accountTemplateRouterDelete(xAccountApiKey, templateid)



Delete AccountTemplate

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let templateid = 789; // Number | The id of the template you want to delete
apiInstance.accountTemplateRouterDelete(xAccountApiKey, templateid, (error, data, response) => {
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
 **templateid** | **Number**| The id of the template you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountTemplateRouterGet

> ModelsAccountTemplate accountTemplateRouterGet(xAccountApiKey, templateid)



Get single template

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let templateid = 789; // Number | ID of the template required
apiInstance.accountTemplateRouterGet(xAccountApiKey, templateid, (error, data, response) => {
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
 **templateid** | **Number**| ID of the template required | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountTemplateRouterGetAll

> [ModelsAccountTemplate] accountTemplateRouterGetAll(xAccountApiKey, opts)



Get all templates

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.accountTemplateRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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

[**[ModelsAccountTemplate]**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountTemplateRouterUpdate

> ModelsAccountTemplate accountTemplateRouterUpdate(xAccountApiKey, templateid, body)



update template

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountTemplateApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let templateid = 789; // Number | The id of the template you want to update
let body = new SendPostApi.ModelsAccountTemplate(); // ModelsAccountTemplate | The template content
apiInstance.accountTemplateRouterUpdate(xAccountApiKey, templateid, body, (error, data, response) => {
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
 **templateid** | **Number**| The id of the template you want to update | 
 **body** | [**ModelsAccountTemplate**](ModelsAccountTemplate.md)| The template content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

