# SendPostApi.AccounteventApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventRouterCountAllEventsFromAAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterCountAllEventsFromAAccountForAGivenTimeRange) | **GET** /account/event/count | 
[**eventRouterExportAllEventsFromAAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterExportAllEventsFromAAccountForAGivenTimeRange) | **POST** /account/event/export | 
[**eventRouterGet**](AccounteventApi.md#eventRouterGet) | **GET** /account/event/{eventId} | 
[**eventRouterGetAllEventsFromAAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterGetAllEventsFromAAccountForAGivenTimeRange) | **GET** /account/event/ | 


<a name="eventRouterCountAllEventsFromAAccountForAGivenTimeRange"></a>
# **eventRouterCountAllEventsFromAAccountForAGivenTimeRange**
> ModelsCountStat eventRouterCountAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts)



Count all events from a account for a given time-range <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounteventApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.eventRouterCountAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **search** | **String**| search term | [optional] 
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **source** | **String**| data source from which to get timestamp keys subaccount or ip | [optional] 
 **sourceId** | **String**| source id from which to get timestamp keys subaccount or ip | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterExportAllEventsFromAAccountForAGivenTimeRange"></a>
# **eventRouterExportAllEventsFromAAccountForAGivenTimeRange**
> ModelExport eventRouterExportAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts)



Export all events from a account for a given time-range <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounteventApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
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
apiInstance.eventRouterExportAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **source** | **String**| data source from which to get timestamp keys subaccount or ip | [optional] 
 **sourceId** | **String**| source id from which to get timestamp keys subaccount or ip | [optional] 

### Return type

[**ModelExport**](ModelExport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGet"></a>
# **eventRouterGet**
> ModelsQEvent eventRouterGet(xAccountApiKey, eventId)



Find Event By Id <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounteventApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var eventId = "eventId_example"; // String | the eventId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventRouterGet(xAccountApiKey, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventRouterGetAllEventsFromAAccountForAGivenTimeRange"></a>
# **eventRouterGetAllEventsFromAAccountForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts)



Find all events from a account for a given time-range <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounteventApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.eventRouterGetAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
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

