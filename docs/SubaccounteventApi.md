# SendPostApi.SubaccounteventApi

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventRouterGet**](SubaccounteventApi.md#eventRouterGet) | **GET** /subaccount/event/{eventId} | 
[**eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](SubaccounteventApi.md#eventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/ | 
[**eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](SubaccounteventApi.md#eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId} | 
[**eventRouterGetEventInNode**](SubaccounteventApi.md#eventRouterGetEventInNode) | **GET** /subaccount/event/node/{subAccountId}/{eventId} | 


<a name="eventRouterGet"></a>
# **eventRouterGet**
> ModelsQEvent eventRouterGet(subAccountId, eventId)



Find Event By Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var subAccountId = 789; // Number | the subAccountId whose event you want to retrieve

var eventId = "eventId_example"; // String | the eventId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGet(subAccountId, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| the subAccountId whose event you want to retrieve | 
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventsFromASubAccountForAGivenTimeRange"></a>
# **eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, subAccountId, opts)



Find all events from a sub-account for a given time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var subAccountId = 789; // Number | the subAccountId whose event you want to retrieve

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search term
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, subAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **subAccountId** | **Number**| the subAccountId whose event you want to retrieve | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange"></a>
# **eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, subAccountId)



Find all events of a sub-account from a specific node for a give time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var subAccountId = 789; // Number | the subAccountId whose event you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, subAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **subAccountId** | **Number**| the subAccountId whose event you want to retrieve | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetEventInNode"></a>
# **eventRouterGetEventInNode**
> ModelsQEvent eventRouterGetEventInNode(subAccountId, eventId)



Find Event From Node by id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var subAccountId = 789; // Number | the subAccountId whose event you want to retrieve

var eventId = "eventId_example"; // String | the eventId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetEventInNode(subAccountId, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **Number**| the subAccountId whose event you want to retrieve | 
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

