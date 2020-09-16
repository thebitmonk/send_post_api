# \SubaccountsenderApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SenderRouterCount**](SubaccountsenderApi.md#SenderRouterCount) | **Get** /subaccount/sender/count | 
[**SenderRouterCreate**](SubaccountsenderApi.md#SenderRouterCreate) | **Post** /subaccount/sender/ | 
[**SenderRouterDelete**](SubaccountsenderApi.md#SenderRouterDelete) | **Delete** /subaccount/sender/{senderId} | 
[**SenderRouterGet**](SubaccountsenderApi.md#SenderRouterGet) | **Get** /subaccount/sender/{senderId} | 
[**SenderRouterGetAll**](SubaccountsenderApi.md#SenderRouterGetAll) | **Get** /subaccount/sender/ | 
[**SenderRouterUpdate**](SubaccountsenderApi.md#SenderRouterUpdate) | **Put** /subaccount/sender/{senderId} | 


# **SenderRouterCount**
> ModelsCountStat SenderRouterCount(ctx, xSubAccountApiKey)


Count Total Senders

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 

### Return type

[**ModelsCountStat**](models.CountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SenderRouterCreate**
> ModelsSender SenderRouterCreate(ctx, xSubAccountApiKey, body)


Create Sender

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsESender**](ModelsESender.md)| The Sender content | 

### Return type

[**ModelsSender**](models.Sender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SenderRouterDelete**
> ModelsDeleteResponse SenderRouterDelete(ctx, xSubAccountApiKey, senderId)


Delete Sender

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **senderId** | **int64**| The SenderId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SenderRouterGet**
> ModelsSender SenderRouterGet(ctx, xSubAccountApiKey, senderId)


Find Sender by SenderId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **senderId** | **int64**| the SenderId you want to get | 

### Return type

[**ModelsSender**](models.Sender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SenderRouterGetAll**
> []ModelsSender SenderRouterGetAll(ctx, xSubAccountApiKey, optional)


Get All Senders

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountsenderApiSenderRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountsenderApiSenderRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsSender**](models.Sender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SenderRouterUpdate**
> ModelsSender SenderRouterUpdate(ctx, xSubAccountApiKey, senderId, body)


Update Sender

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **senderId** | **int64**| The SenderId you want to update | 
  **body** | [**ModelsESender**](ModelsESender.md)| The body | 

### Return type

[**ModelsSender**](models.Sender.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

