# SendPostApi.TrackApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackRouterTrackEmailOpen**](TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId}/1.png | 
[**trackRouterTrackLinkClick**](TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId} | 
[**trackRouterTrackUnsubscribe**](TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId} | 

<a name="trackRouterTrackEmailOpen"></a>
# **trackRouterTrackEmailOpen**
> trackRouterTrackEmailOpen(ipId, accountId, subAccountId, messageId, emailType)



Track Email Open

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.TrackApi();
let ipId = 789; // Number | The id of ip from which this email message was sent
let accountId = 789; // Number | The id of account from which email is being sent
let subAccountId = 789; // Number | The id of sub-account from which email is being sent
let messageId = "messageId_example"; // String | The UUID of message which was sent
let emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address

apiInstance.trackRouterTrackEmailOpen(ipId, accountId, subAccountId, messageId, emailType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trackRouterTrackLinkClick"></a>
# **trackRouterTrackLinkClick**
> trackRouterTrackLinkClick(ipId, accountId, subAccountId, messageId, emailType, redirecturl)



Track Link Click

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.TrackApi();
let ipId = 789; // Number | The id of ip from which this email message was sent
let accountId = 789; // Number | The id of account from which email is being sent
let subAccountId = 789; // Number | The id of sub-account from which email is being sent
let messageId = "messageId_example"; // String | The UUID of message which was sent
let emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address
let redirecturl = "redirecturl_example"; // String | The encoded redirect URL

apiInstance.trackRouterTrackLinkClick(ipId, accountId, subAccountId, messageId, emailType, redirecturl, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 
 **redirecturl** | **String**| The encoded redirect URL | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trackRouterTrackUnsubscribe"></a>
# **trackRouterTrackUnsubscribe**
> trackRouterTrackUnsubscribe(ipId, accountId, subAccountId, messageId, emailType)



track link click

### Example
```javascript
import {SendPostApi} from 'send_post_api';

let apiInstance = new SendPostApi.TrackApi();
let ipId = 789; // Number | The id of ip from which this email message was sent
let accountId = 789; // Number | The id of account from which email is being sent
let subAccountId = 789; // Number | The id of sub-account from which email is being sent
let messageId = "messageId_example"; // String | The UUID of message which was sent
let emailType = "emailType_example"; // String | The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address

apiInstance.trackRouterTrackUnsubscribe(ipId, accountId, subAccountId, messageId, emailType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipId** | **Number**| The id of ip from which this email message was sent | 
 **accountId** | **Number**| The id of account from which email is being sent | 
 **subAccountId** | **Number**| The id of sub-account from which email is being sent | 
 **messageId** | **String**| The UUID of message which was sent | 
 **emailType** | **String**| The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

