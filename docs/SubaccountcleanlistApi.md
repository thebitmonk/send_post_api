# \SubaccountcleanlistApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListCleaningRouterCleanBulkEmailList**](SubaccountcleanlistApi.md#ListCleaningRouterCleanBulkEmailList) | **Post** /subaccount/cleanlist/bulk | 
[**ListCleaningRouterCleanEmailist**](SubaccountcleanlistApi.md#ListCleaningRouterCleanEmailist) | **Post** /subaccount/cleanlist/ | 


# **ListCleaningRouterCleanBulkEmailList**
> ModelsBulkResponse ListCleaningRouterCleanBulkEmailList(ctx, xSubAccountApiKey, optional)


Upload a csv of emails which will be processed and sent as a mail

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountcleanlistApiListCleaningRouterCleanBulkEmailListOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountcleanlistApiListCleaningRouterCleanBulkEmailListOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fileinput** | **optional.Interface of *os.File**| true | 

### Return type

[**ModelsBulkResponse**](models.BulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListCleaningRouterCleanEmailist**
> ModelsCleanedList ListCleaningRouterCleanEmailist(ctx, xSubAccountApiKey, body)


Send a list of emails and will get a result containing valid,invalid and detailed list response

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsEmailList**](ModelsEmailList.md)| The list of emails to clean | 

### Return type

[**ModelsCleanedList**](models.CleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

