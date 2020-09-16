# \AccountipApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**IPRouterAllocateIP**](AccountipApi.md#IPRouterAllocateIP) | **Post** /account/ip/allocate | 
[**IPRouterCount**](AccountipApi.md#IPRouterCount) | **Get** /account/ip/count | 
[**IPRouterDelete**](AccountipApi.md#IPRouterDelete) | **Delete** /account/ip/{ipid} | 
[**IPRouterGet**](AccountipApi.md#IPRouterGet) | **Get** /account/ip/{ipid} | 
[**IPRouterGetAll**](AccountipApi.md#IPRouterGetAll) | **Get** /account/ip/ | 
[**IPRouterUpdate**](AccountipApi.md#IPRouterUpdate) | **Put** /account/ip/{ipid} | 


# **IPRouterAllocateIP**
> []ModelsIp IPRouterAllocateIP(ctx, xAccountApiKey)


Allocate IP To Account

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 

### Return type

[**[]ModelsIp**](models.IP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPRouterCount**
> ModelsCountStat IPRouterCount(ctx, xAccountApiKey)


Count Total AccountIPs

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

# **IPRouterDelete**
> ModelsDeleteResponse IPRouterDelete(ctx, xAccountApiKey, ipid)


Delete IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| The IPId you want to delete | 

### Return type

[**ModelsDeleteResponse**](models.DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPRouterGet**
> ModelsIp IPRouterGet(ctx, xAccountApiKey, ipid)


Find IP by IPId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| the IPId you want to get | 

### Return type

[**ModelsIp**](models.IP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPRouterGetAll**
> []ModelsIp IPRouterGetAll(ctx, xAccountApiKey, optional)


Get All IPs

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
 **optional** | ***AccountipApiIPRouterGetAllOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AccountipApiIPRouterGetAllOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int64**| offset | 
 **limit** | **optional.Int64**| limit | 
 **search** | **optional.String**| search term | 

### Return type

[**[]ModelsIp**](models.IP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **IPRouterUpdate**
> ModelsIp IPRouterUpdate(ctx, xAccountApiKey, ipid, body)


Update an IP

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xAccountApiKey** | **string**| Account API Key | 
  **ipid** | **int64**| The IP you want to update | 
  **body** | [**ModelsIip**](ModelsIip.md)| The IP Email Provider Settings | 

### Return type

[**ModelsIp**](models.IP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

