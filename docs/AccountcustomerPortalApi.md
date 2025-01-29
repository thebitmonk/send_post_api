# SendPostApi.AccountcustomerPortalApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerPortalRouterCreateTicketWithAssContactAndCompany**](AccountcustomerPortalApi.md#customerPortalRouterCreateTicketWithAssContactAndCompany) | **POST** /account/customer_portal/{memberId}/tickets | 
[**customerPortalRouterGetCompanyTickets**](AccountcustomerPortalApi.md#customerPortalRouterGetCompanyTickets) | **GET** /account/customer_portal/tickets | 
[**customerPortalRouterGetTicketDetails**](AccountcustomerPortalApi.md#customerPortalRouterGetTicketDetails) | **GET** /account/customer_portal/tickets/{id} | 
[**customerPortalRouterUploadFileToHubspot**](AccountcustomerPortalApi.md#customerPortalRouterUploadFileToHubspot) | **POST** /account/customer_portal/upload | 


<a name="customerPortalRouterCreateTicketWithAssContactAndCompany"></a>
# **customerPortalRouterCreateTicketWithAssContactAndCompany**
> customerPortalRouterCreateTicketWithAssContactAndCompany(xAccountApiKey, memberId, body)



CreateTicketWithAssContactAndCompany <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountcustomerPortalApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var memberId = 789; // Number | The member id who is creating the ticket

var body = new SendPostApi.ModelsRequestCreateTicket(); // ModelsRequestCreateTicket | The ticket request content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerPortalRouterCreateTicketWithAssContactAndCompany(xAccountApiKey, memberId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **memberId** | **Number**| The member id who is creating the ticket | 
 **body** | [**ModelsRequestCreateTicket**](ModelsRequestCreateTicket.md)| The ticket request content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPortalRouterGetCompanyTickets"></a>
# **customerPortalRouterGetCompanyTickets**
> [ModelsHubspotTicket] customerPortalRouterGetCompanyTickets(xAccountApiKey)



GetCompanyTickets <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountcustomerPortalApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPortalRouterGetCompanyTickets(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsHubspotTicket]**](ModelsHubspotTicket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPortalRouterGetTicketDetails"></a>
# **customerPortalRouterGetTicketDetails**
> ModelsHubspotTicket customerPortalRouterGetTicketDetails(xAccountApiKey, id)



GetTicketDetails <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountcustomerPortalApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var id = 789; // Number | The ticket id you want


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPortalRouterGetTicketDetails(xAccountApiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **id** | **Number**| The ticket id you want | 

### Return type

[**ModelsHubspotTicket**](ModelsHubspotTicket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPortalRouterUploadFileToHubspot"></a>
# **customerPortalRouterUploadFileToHubspot**
> ModelsUploadFileResponse customerPortalRouterUploadFileToHubspot(file, xAccountApiKey)



Upload a file to HubSpot

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountcustomerPortalApi();

var file = "/path/to/file.txt"; // File | File to upload

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPortalRouterUploadFileToHubspot(file, xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File to upload | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsUploadFileResponse**](ModelsUploadFileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

