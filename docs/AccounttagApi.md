# SendPostApi.AccounttagApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagRouterCreate**](AccounttagApi.md#tagRouterCreate) | **POST** /account/tag/ | 
[**tagRouterDelete**](AccounttagApi.md#tagRouterDelete) | **DELETE** /account/tag/{tagid} | 
[**tagRouterGetAll**](AccounttagApi.md#tagRouterGetAll) | **GET** /account/tag/ | 


<a name="tagRouterCreate"></a>
# **tagRouterCreate**
> ModelsTag tagRouterCreate(xAccountApiKey, body)



Create Tag <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttagApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsETag(); // ModelsETag | The Tag content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsETag**](ModelsETag.md)| The Tag content | 

### Return type

[**ModelsTag**](ModelsTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagRouterDelete"></a>
# **tagRouterDelete**
> ModelsDeleteResponse tagRouterDelete(xAccountApiKey, tagid, body)



Delete Tag <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttagApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var tagid = 789; // Number | The AccountTagId you want to delete

var body = new SendPostApi.ModelsEMember(); // ModelsEMember | The triggering action member


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagRouterDelete(xAccountApiKey, tagid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **tagid** | **Number**| The AccountTagId you want to delete | 
 **body** | [**ModelsEMember**](ModelsEMember.md)| The triggering action member | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagRouterGetAll"></a>
# **tagRouterGetAll**
> [ModelsTag] tagRouterGetAll(xAccountApiKey)



Get All Tags <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttagApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagRouterGetAll(xAccountApiKey, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

