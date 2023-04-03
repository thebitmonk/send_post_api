# SendPostApi.AccountincidentApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**incidentRouterAdd**](AccountincidentApi.md#incidentRouterAdd) | **POST** /account/incident/{incidentId}/comment | 
[**incidentRouterCount**](AccountincidentApi.md#incidentRouterCount) | **GET** /account/incident/count | 
[**incidentRouterCreate**](AccountincidentApi.md#incidentRouterCreate) | **POST** /account/incident/ | 
[**incidentRouterGetAll**](AccountincidentApi.md#incidentRouterGetAll) | **GET** /account/incident/ | 
[**incidentRouterGetAllComments**](AccountincidentApi.md#incidentRouterGetAllComments) | **GET** /account/incident/{incidentId}/comment | 
[**incidentRouterGetIncident**](AccountincidentApi.md#incidentRouterGetIncident) | **GET** /account/incident/{incidentId} | 
[**incidentRouterUpdate**](AccountincidentApi.md#incidentRouterUpdate) | **PUT** /account/incident/{incidentId} | 

<a name="incidentRouterAdd"></a>
# **incidentRouterAdd**
> ModelsComment incidentRouterAdd(body, xAccountApiKey, incidentId)



Add comment to Incident

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let body = new SendPostApi.ModelsEComment(); // ModelsEComment | The Comment content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let incidentId = 789; // Number | the incident id

apiInstance.incidentRouterAdd(body, xAccountApiKey, incidentId, (error, data, response) => {
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
 **body** | [**ModelsEComment**](ModelsEComment.md)| The Comment content | 
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the incident id | 

### Return type

[**ModelsComment**](ModelsComment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterCount"></a>
# **incidentRouterCount**
> ModelsCountStat incidentRouterCount(xAccountApiKey, opts)



Count Total Incidents

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'status': 789, // Number | status
  'tag': 789, // Number | status
  'search': "search_example" // String | search term
};
apiInstance.incidentRouterCount(xAccountApiKey, opts, (error, data, response) => {
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
 **status** | **Number**| status | [optional] 
 **tag** | **Number**| status | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incidentRouterCreate"></a>
# **incidentRouterCreate**
> ModelsIncident incidentRouterCreate(body, xAccountApiKey)



Create Incident

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let body = new SendPostApi.ModelsEIncident(); // ModelsEIncident | The Incident content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.incidentRouterCreate(body, xAccountApiKey, (error, data, response) => {
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
 **body** | [**ModelsEIncident**](ModelsEIncident.md)| The Incident content | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterGetAll"></a>
# **incidentRouterGetAll**
> [ModelsIncident] incidentRouterGetAll(xAccountApiKey, opts)



Get All Incidents

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search term
  'status': 789, // Number | status
  'tag': 789 // Number | status
};
apiInstance.incidentRouterGetAll(xAccountApiKey, opts, (error, data, response) => {
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
 **status** | **Number**| status | [optional] 
 **tag** | **Number**| status | [optional] 

### Return type

[**[ModelsIncident]**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incidentRouterGetAllComments"></a>
# **incidentRouterGetAllComments**
> [ModelsComment] incidentRouterGetAllComments(xAccountApiKey, incidentId)



Get All Comments Associated with Incident

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let incidentId = 789; // Number | the IncidentId you want to get comments for

apiInstance.incidentRouterGetAllComments(xAccountApiKey, incidentId, (error, data, response) => {
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
 **incidentId** | **Number**| the IncidentId you want to get comments for | 

### Return type

[**[ModelsComment]**](ModelsComment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incidentRouterGetIncident"></a>
# **incidentRouterGetIncident**
> ModelsIncident incidentRouterGetIncident(xAccountApiKey, incidentId)



Find Incident by incidentId

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let incidentId = 789; // Number | the IncidentId you want to get

apiInstance.incidentRouterGetIncident(xAccountApiKey, incidentId, (error, data, response) => {
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
 **incidentId** | **Number**| the IncidentId you want to get | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incidentRouterUpdate"></a>
# **incidentRouterUpdate**
> ModelsIncident incidentRouterUpdate(body, xAccountApiKey, incidentId)



Update Incident

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccountincidentApi();
let body = new SendPostApi.ModelsEIncident(); // ModelsEIncident | The Incident content
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let incidentId = 789; // Number | the Incident Id you want to update

apiInstance.incidentRouterUpdate(body, xAccountApiKey, incidentId, (error, data, response) => {
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
 **body** | [**ModelsEIncident**](ModelsEIncident.md)| The Incident content | 
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the Incident Id you want to update | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

