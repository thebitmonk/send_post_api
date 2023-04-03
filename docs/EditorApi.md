# SendPostApi.EditorApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editorApiRouterGetToken**](EditorApi.md#editorApiRouterGetToken) | **GET** /editor/ | 

<a name="editorApiRouterGetToken"></a>
# **editorApiRouterGetToken**
> ModelsEditorTokenResponse editorApiRouterGetToken(xAccountApiKey)



fetch Bee editor token

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.EditorApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.editorApiRouterGetToken(xAccountApiKey, (error, data, response) => {
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

[**ModelsEditorTokenResponse**](ModelsEditorTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

