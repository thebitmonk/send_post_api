# SendPostApi.SubaccounteventApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**](SubaccounteventApi.md#eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange) | **GET** /subaccount/event/node/count | 
[**eventRouterCountAllEventsFromASubAccountForAGivenTimeRange**](SubaccounteventApi.md#eventRouterCountAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/count | 
[**eventRouterGet**](SubaccounteventApi.md#eventRouterGet) | **GET** /subaccount/event/{eventId} | 
[**eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange**](SubaccounteventApi.md#eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /subaccount/event/node/timestampkeys | 
[**eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](SubaccounteventApi.md#eventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/ | 
[**eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](SubaccounteventApi.md#eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **POST** /subaccount/event/node | 
[**eventRouterGetEventInNode**](SubaccounteventApi.md#eventRouterGetEventInNode) | **GET** /subaccount/event/node/{eventId} | 


<a name="eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange"></a>
# **eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**
> ModelsCountStat eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(xSubAccountApiKey, opts)



Count all events from a node of a sub-account for a given time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
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
apiInstance.eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **search** | **String**| search term | [optional] 
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterCountAllEventsFromASubAccountForAGivenTimeRange"></a>
# **eventRouterCountAllEventsFromASubAccountForAGivenTimeRange**
> ModelsCountStat eventRouterCountAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, opts)



Count all events from a sub-account for a given time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
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
apiInstance.eventRouterCountAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **search** | **String**| search term | [optional] 
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGet"></a>
# **eventRouterGet**
> ModelsQEvent eventRouterGet(xSubAccountApiKey, eventId)



Find Event By Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var eventId = "eventId_example"; // String | the eventId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGet(xSubAccountApiKey, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange"></a>
# **eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, opts)



Find all events of a sub-account from a specific node for a give time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **search** | **String**| search term | [optional] 
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **source** | **String**| data source from which to get timestamp keys subaccount or ip | [optional] 
 **sourceId** | **String**| source id from which to get timestamp keys subaccount or ip | [optional] 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventsFromASubAccountForAGivenTimeRange"></a>
# **eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, opts)



Find all events from a sub-account for a given time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **source** | **String**| data source from which to get timestamp keys subaccount or ip | [optional] 
 **sourceId** | **String**| source id from which to get timestamp keys subaccount or ip | [optional] 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange"></a>
# **eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey)



Find all events of a sub-account from a specific node for a give time-range

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetEventInNode"></a>
# **eventRouterGetEventInNode**
> ModelsQEvent eventRouterGetEventInNode(xSubAccountApiKey, eventId)



Find Event From Node by id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccounteventApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var eventId = "eventId_example"; // String | the eventId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGetEventInNode(xSubAccountApiKey, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

