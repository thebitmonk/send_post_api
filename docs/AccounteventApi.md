# SendPostApi.AccounteventApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventRouterCountAllEventsFromAAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterCountAllEventsFromAAccountForAGivenTimeRange) | **GET** /account/event/count | 
[**eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange) | **GET** /account/event/node/count | 
[**eventRouterGet**](AccounteventApi.md#eventRouterGet) | **GET** /account/event/{eventId} | 
[**eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange**](AccounteventApi.md#eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /account/event/node/timestampkeys | 
[**eventRouterGetAllEventsFromAAccountForAGivenTimeRange**](AccounteventApi.md#eventRouterGetAllEventsFromAAccountForAGivenTimeRange) | **GET** /account/event/ | 
[**eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed**](AccounteventApi.md#eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed) | **GET** /account/event/node/eventType | 
[**eventRouterGetAllEventsOfAAccountFromASpecificNode**](AccounteventApi.md#eventRouterGetAllEventsOfAAccountFromASpecificNode) | **POST** /account/event/node | 
[**eventRouterGetEventInNode**](AccounteventApi.md#eventRouterGetEventInNode) | **GET** /account/event/node/{eventId} | 

<a name="eventRouterCountAllEventsFromAAccountForAGivenTimeRange"></a>
# **eventRouterCountAllEventsFromAAccountForAGivenTimeRange**
> ModelsCountStat eventRouterCountAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts)



Count all events from a account for a given time-range

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};
apiInstance.eventRouterCountAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange"></a>
# **eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange**
> ModelsCountStat eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(xAccountApiKey, opts)



Count all events from a node of a sub-account for a given time-range

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};
apiInstance.eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(xAccountApiKey, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGet"></a>
# **eventRouterGet**
> ModelsQEvent eventRouterGet(xAccountApiKey, eventId)



Find Event By Id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let eventId = "eventId_example"; // String | the eventId that you want to retrieve

apiInstance.eventRouterGet(xAccountApiKey, eventId, (error, data, response) => {
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
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange"></a>
# **eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange(xAccountApiKey, opts)



Find all events of a sub-account from a specific node for a give time-range

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};
apiInstance.eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange(xAccountApiKey, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGetAllEventsFromAAccountForAGivenTimeRange"></a>
# **eventRouterGetAllEventsFromAAccountForAGivenTimeRange**
> [ModelsQEvent] eventRouterGetAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts)



Find all events from a account for a given time-range

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search term
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};
apiInstance.eventRouterGetAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed"></a>
# **eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed**
> [ModelsQEvent] eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed(xAccountApiKey, opts)



Find all events from a account for a given time-range

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'type': "type_example", // String | search type
  'from': "from_example", // String | from date
  'to': "to_example", // String | to date
  'filterEvent': "filterEvent_example", // String | filter event types
  'source': "source_example", // String | data source from which to get timestamp keys subaccount or ip
  'sourceId': "sourceId_example" // String | source id from which to get timestamp keys subaccount or ip
};
apiInstance.eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed(xAccountApiKey, opts, (error, data, response) => {
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
 **type** | **String**| search type | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 
 **filterEvent** | **String**| filter event types | [optional] 
 **source** | **String**| data source from which to get timestamp keys subaccount or ip | [optional] 
 **sourceId** | **String**| source id from which to get timestamp keys subaccount or ip | [optional] 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGetAllEventsOfAAccountFromASpecificNode"></a>
# **eventRouterGetAllEventsOfAAccountFromASpecificNode**
> [ModelsQEvent] eventRouterGetAllEventsOfAAccountFromASpecificNode(xAccountApiKey)



Find all events of a account from a specific node

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

apiInstance.eventRouterGetAllEventsOfAAccountFromASpecificNode(xAccountApiKey, (error, data, response) => {
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

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventRouterGetEventInNode"></a>
# **eventRouterGetEventInNode**
> ModelsQEvent eventRouterGetEventInNode(xAccountApiKey, eventId)



Find Event From Node by id

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.AccounteventApi();
let xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key
let eventId = "eventId_example"; // String | the eventId that you want to retrieve

apiInstance.eventRouterGetEventInNode(xAccountApiKey, eventId, (error, data, response) => {
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
 **eventId** | **String**| the eventId that you want to retrieve | 

### Return type

[**ModelsQEvent**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

