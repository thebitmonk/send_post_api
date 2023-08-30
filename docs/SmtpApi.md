# SendPostApi.SmtpApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sMTPRouterReceiveWebhooksRaisedFromSMTPServers**](SmtpApi.md#sMTPRouterReceiveWebhooksRaisedFromSMTPServers) | **POST** /smtp/webhook | 



## sMTPRouterReceiveWebhooksRaisedFromSMTPServers

> sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body)



Receive webhooks raised from SMTP servers

### Example

```javascript
import SendPostApi from 'send_post_api';

let apiInstance = new SendPostApi.SmtpApi();
let body = new SendPostApi.ModelsWMessage(); // ModelsWMessage | The Webhook content
apiInstance.sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body, (error, data, response) => {
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
 **body** | [**ModelsWMessage**](ModelsWMessage.md)| The Webhook content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

