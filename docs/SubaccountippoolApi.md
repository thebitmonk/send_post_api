# \SubaccountippoolApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IPPoolRouterCount**](SubaccountippoolApi.md#IPPoolRouterCount) | **Get** /subaccount/ippool/count | 
[**IPPoolRouterCreate**](SubaccountippoolApi.md#IPPoolRouterCreate) | **Post** /subaccount/ippool/ | 
[**IPPoolRouterDelete**](SubaccountippoolApi.md#IPPoolRouterDelete) | **Delete** /subaccount/ippool/{ippoolid} | 
[**IPPoolRouterGet**](SubaccountippoolApi.md#IPPoolRouterGet) | **Get** /subaccount/ippool/{ippoolid} | 
[**IPPoolRouterGetAll**](SubaccountippoolApi.md#IPPoolRouterGetAll) | **Get** /subaccount/ippool/ | 
[**IPPoolRouterUpdate**](SubaccountippoolApi.md#IPPoolRouterUpdate) | **Put** /subaccount/ippool/{ippoolid} | 


# **IPPoolRouterCount**
> ModelsCountStat IPPoolRouterCount(ctx, xSubAccountApiKey)


Count Total IPPools

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

# **IPPoolRouterCreate**
> ModelsIpPool IPPoolRouterCreate(ctx, xSubAccountApiKey, body)


Create IPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **body** | [**ModelsEipPool**](ModelsEipPool.md)| The IPPool content | 

### Return type

[**ModelsIpPool**](models.IPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPPoolRouterDelete**
> ModelsDeleteResponse IPPoolRouterDelete(ctx, xSubAccountApiKey, ippoolid)


Delete IPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **ippoolid** | **int64**| The IPPoolId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPPoolRouterGet**
> ModelsIpPool IPPoolRouterGet(ctx, xSubAccountApiKey, ippoolid)


Find IPPool by IPPoolId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **ippoolid** | **int64**| the IPPoolId you want to get | 

### Return type

[**ModelsIpPool**](models.IPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPPoolRouterGetAll**
> []ModelsIpPool IPPoolRouterGetAll(ctx, xSubAccountApiKey, optional)


Get All IPPools

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
 **optional** | ***SubaccountippoolApiIPPoolRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SubaccountippoolApiIPPoolRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsIpPool**](models.IPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPPoolRouterUpdate**
> ModelsIpPool IPPoolRouterUpdate(ctx, xSubAccountApiKey, ippoolid, body)


Update IPPool

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **ippoolid** | **int64**| The IPPoolId you want to update | 
  **body** | [**ModelsEipPool**](ModelsEipPool.md)| The body | 

### Return type

[**ModelsIpPool**](models.IPPool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

