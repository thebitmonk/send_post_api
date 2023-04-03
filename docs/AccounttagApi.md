# SendPostApi.AccounttagApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagRouterCreate**](AccounttagApi.md#tagRouterCreate) | **POST** /account/tag/ | 
[**tagRouterDelete**](AccounttagApi.md#tagRouterDelete) | **DELETE** /account/tag/{tagid} | 
[**tagRouterGetAll**](AccounttagApi.md#tagRouterGetAll) | **GET** /account/tag/ | 

<a name="tagRouterCreate"></a>
# **tagRouterCreate**
> ModelsTag tagRouterCreate(body, xAccountApiKey)



Create Tag

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounttagApi();
let body = new SendPostApi.ModelsTag(); // ModelsTag | The Tag content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.tagRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsTag**](ModelsTag.md)| The Tag content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsTag**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagRouterDelete"></a>
# **tagRouterDelete**
> ModelsDeleteResponse tagRouterDelete(xAccountApiKey, tagid)



Delete Tag

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounttagApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let tagid = 789; // Number | The AccountTagId you want to delete

apiInstance.tagRouterDelete(xAccountApiKey, tagid, (error, data, response) => {
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
 **tagid** | **Number**| The AccountTagId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tagRouterGetAll"></a>
# **tagRouterGetAll**
> [ModelsTag] tagRouterGetAll(xAccountApiKey)



Get All Tags

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounttagApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.tagRouterGetAll(xAccountApiKey, (error, data, response) => {
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

[**[ModelsTag]**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

