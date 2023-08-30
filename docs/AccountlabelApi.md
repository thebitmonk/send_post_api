# SendPostApi.AccountLabelApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**labelRouterCount**](AccountLabelApi.md#labelRouterCount) | **GET** /account/label/count | 
[**labelRouterCreate**](AccountLabelApi.md#labelRouterCreate) | **POST** /account/label/ | 
[**labelRouterDelete**](AccountLabelApi.md#labelRouterDelete) | **DELETE** /account/label/{labelId} | 
[**labelRouterGet**](AccountLabelApi.md#labelRouterGet) | **GET** /account/label/{labelId} | 
[**labelRouterGetAll**](AccountLabelApi.md#labelRouterGetAll) | **GET** /account/label/ | 
[**labelRouterUpdate**](AccountLabelApi.md#labelRouterUpdate) | **PUT** /account/label/{labelId} | 



## labelRouterCount

> ModelsCountStat labelRouterCount(xAccountApiKey, type)



Count Total Labels

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let type = "type_example"; // String | get all labels type
apiInstance.labelRouterCount(xAccountApiKey, type, (error, data, response) => {
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
 **type** | **String**| get all labels type | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labelRouterCreate

> ModelsLabel labelRouterCreate(xAccountApiKey, body)



Create Label

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let body = new SendPostApi.ModelsLabel(); // ModelsLabel | The Label content
apiInstance.labelRouterCreate(xAccountApiKey, body, (error, data, response) => {
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
 **body** | [**ModelsLabel**](ModelsLabel.md)| The Label content | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## labelRouterDelete

> ModelsDeleteResponse labelRouterDelete(xAccountApiKey, labelId)



Delete Label

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let labelId = 789; // Number | The LabelId you want to delete
apiInstance.labelRouterDelete(xAccountApiKey, labelId, (error, data, response) => {
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
 **labelId** | **Number**| The LabelId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labelRouterGet

> ModelsLabel labelRouterGet(xAccountApiKey, labelId)



Find Label by LabelId

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let labelId = 789; // Number | the LabelId you want to get
apiInstance.labelRouterGet(xAccountApiKey, labelId, (error, data, response) => {
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
 **labelId** | **Number**| the LabelId you want to get | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labelRouterGetAll

> [ModelsLabel] labelRouterGetAll(xAccountApiKey, type, opts)



Get All Labels

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let type = "type_example"; // String | get all labels type
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.labelRouterGetAll(xAccountApiKey, type, opts, (error, data, response) => {
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
 **type** | **String**| get all labels type | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsLabel]**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labelRouterUpdate

> ModelsLabel labelRouterUpdate(xAccountApiKey, labelId, body)



Update Label

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.AccountLabelApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let labelId = 789; // Number | The LabelId you want to update
let body = new SendPostApi.ModelsLabel(); // ModelsLabel | The body
apiInstance.labelRouterUpdate(xAccountApiKey, labelId, body, (error, data, response) => {
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
 **labelId** | **Number**| The LabelId you want to update | 
 **body** | [**ModelsLabel**](ModelsLabel.md)| The body | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

