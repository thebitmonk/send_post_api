# SendPostApi.AccountlabelApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**labelRouterCount**](AccountlabelApi.md#labelRouterCount) | **GET** /account/label/count | 
[**labelRouterCreate**](AccountlabelApi.md#labelRouterCreate) | **POST** /account/label/ | 
[**labelRouterDelete**](AccountlabelApi.md#labelRouterDelete) | **DELETE** /account/label/{labelId} | 
[**labelRouterGet**](AccountlabelApi.md#labelRouterGet) | **GET** /account/label/{labelId} | 
[**labelRouterGetAll**](AccountlabelApi.md#labelRouterGetAll) | **GET** /account/label/ | 
[**labelRouterUpdate**](AccountlabelApi.md#labelRouterUpdate) | **PUT** /account/label/{labelId} | 

<a name="labelRouterCount"></a>
# **labelRouterCount**
> ModelsCountStat labelRouterCount(xAccountApiKey, type)



Count Total Labels

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
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

<a name="labelRouterCreate"></a>
# **labelRouterCreate**
> ModelsLabel labelRouterCreate(body, xAccountApiKey)



Create Label

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
let body = new SendPostApi.ModelsLabel(); // ModelsLabel | The Label content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.labelRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsLabel**](ModelsLabel.md)| The Label content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="labelRouterDelete"></a>
# **labelRouterDelete**
> ModelsDeleteResponse labelRouterDelete(xAccountApiKey, labelId)



Delete Label

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
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

<a name="labelRouterGet"></a>
# **labelRouterGet**
> ModelsLabel labelRouterGet(xAccountApiKey, labelId)



Find Label by LabelId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
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

<a name="labelRouterGetAll"></a>
# **labelRouterGetAll**
> [ModelsLabel] labelRouterGetAll(xAccountApiKey, type, opts)



Get All Labels

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
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

<a name="labelRouterUpdate"></a>
# **labelRouterUpdate**
> ModelsLabel labelRouterUpdate(body, xAccountApiKey, labelId)



Update Label

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountlabelApi();
let body = new SendPostApi.ModelsLabel(); // ModelsLabel | The body
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let labelId = 789; // Number | The LabelId you want to update

apiInstance.labelRouterUpdate(body, xAccountApiKey, labelId, (error, data, response) => {
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
 **body** | [**ModelsLabel**](ModelsLabel.md)| The body | 
 **xAccountApiKey** | **String**| Account API Key | 
 **labelId** | **Number**| The LabelId you want to update | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

