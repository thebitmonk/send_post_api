# SendPostApi.SmtpApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sMTPRouterAuthForSMTPServers**](SmtpApi.md#sMTPRouterAuthForSMTPServers) | **POST** /smtp/auth | 
[**sMTPRouterReceiveWebhooksRaisedFromSMTPServers**](SmtpApi.md#sMTPRouterReceiveWebhooksRaisedFromSMTPServers) | **POST** /smtp/webhook | 


<a name="sMTPRouterAuthForSMTPServers"></a>
# **sMTPRouterAuthForSMTPServers**
> ModelsSMTPAuthCompleted sMTPRouterAuthForSMTPServers(body)



Check if the username and password correct and returns the subAccount info <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SmtpApi();

var body = new SendPostApi.ModelsESMTPAuth(); // ModelsESMTPAuth | The SMTP Auth content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sMTPRouterAuthForSMTPServers(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsESMTPAuth**](ModelsESMTPAuth.md)| The SMTP Auth content | 

### Return type

[**ModelsSMTPAuthCompleted**](ModelsSMTPAuthCompleted.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPRouterReceiveWebhooksRaisedFromSMTPServers"></a>
# **sMTPRouterReceiveWebhooksRaisedFromSMTPServers**
> sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body)



Receive webhooks raised from SMTP servers <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SmtpApi();

var body = new SendPostApi.ModelsWMessage(); // ModelsWMessage | The Webhook content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body, callback);
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
 - **Accept**: application/json

