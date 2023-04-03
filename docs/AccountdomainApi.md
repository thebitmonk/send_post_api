# SendPostApi.AccountdomainApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDomainRouterCount**](AccountdomainApi.md#accountDomainRouterCount) | **GET** /account/domain/count | 
[**accountDomainRouterGetAll**](AccountdomainApi.md#accountDomainRouterGetAll) | **GET** /account/domain/ | 

<a name="accountDomainRouterCount"></a>
# **accountDomainRouterCount**
> ModelsCountStat accountDomainRouterCount(xAccountApiKey, opts)



Count Total Account Domains

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountdomainApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key
let opts = { 
  'search': "search_example" // String | search term
};
apiInstance.accountDomainRouterCount(xAccountApiKey, opts, (error, data, response) => {
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
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountDomainRouterGetAll"></a>
# **accountDomainRouterGetAll**
> [ModelsAccountDomain] accountDomainRouterGetAll(xAccountApiKey, opts)



Get All Domains

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountdomainApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};
apiInstance.accountDomainRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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

[**[ModelsAccountDomain]**](ModelsAccountDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

