# \SubaccountemailApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EmailRouterSendEmail**](SubaccountemailApi.md#EmailRouterSendEmail) | **Post** /subaccount/email/ | 


# **EmailRouterSendEmail**
> []ModelsEmailResponse EmailRouterSendEmail(ctx, xSubAccountApiKey, body)


Send Email To Contacts

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsEmailMessage**](ModelsEmailMessage.md)| The Email Message | 

### Return type

[**[]ModelsEmailResponse**](models.EmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

