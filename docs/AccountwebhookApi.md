# \AccountwebhookApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AccountWebhookRouterCount**](AccountwebhookApi.md#AccountWebhookRouterCount) | **Get** /account/webhook/count | 
[**AccountWebhookRouterCreate**](AccountwebhookApi.md#AccountWebhookRouterCreate) | **Post** /account/webhook/ | 
[**AccountWebhookRouterDelete**](AccountwebhookApi.md#AccountWebhookRouterDelete) | **Delete** /account/webhook/{webhookId} | 
[**AccountWebhookRouterGet**](AccountwebhookApi.md#AccountWebhookRouterGet) | **Get** /account/webhook/{webhookId} | 
[**AccountWebhookRouterGetAll**](AccountwebhookApi.md#AccountWebhookRouterGetAll) | **Get** /account/webhook/ | 
[**AccountWebhookRouterUpdate**](AccountwebhookApi.md#AccountWebhookRouterUpdate) | **Put** /account/webhook/{webhookId} | 


# **AccountWebhookRouterCount**
> ModelsCountStat AccountWebhookRouterCount(ctx, xAccountApiKey)


Count Total AccountWebhooks

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 

### Return type

[**ModelsCountStat**](models.CountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountWebhookRouterCreate**
> ModelsAccountWebhook AccountWebhookRouterCreate(ctx, xAccountApiKey, body)


Create AccountWebhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The AccountWebhook content | 

### Return type

[**ModelsAccountWebhook**](models.AccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountWebhookRouterDelete**
> ModelsDeleteResponse AccountWebhookRouterDelete(ctx, xAccountApiKey, webhookId)


Delete AccountWebhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **webhookId** | **int64**| The AccountWebhookId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountWebhookRouterGet**
> ModelsAccountWebhook AccountWebhookRouterGet(ctx, xAccountApiKey, webhookId)


Find AccountWebhook by AccountWebhookId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **webhookId** | **int64**| the AccountWebhookId you want to get | 

### Return type

[**ModelsAccountWebhook**](models.AccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountWebhookRouterGetAll**
> []ModelsAccountWebhook AccountWebhookRouterGetAll(ctx, xAccountApiKey, optional)


Get All AccountWebhooks

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
 **optional** | ***AccountwebhookApiAccountWebhookRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountwebhookApiAccountWebhookRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search | 

### Return type

[**[]ModelsAccountWebhook**](models.AccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AccountWebhookRouterUpdate**
> ModelsAccountWebhook AccountWebhookRouterUpdate(ctx, xAccountApiKey, webhookId, body)


Update AccountWebhook

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **webhookId** | **int64**| The AccountWebhookId you want to update | 
  **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The body | 

### Return type

[**ModelsAccountWebhook**](models.AccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

