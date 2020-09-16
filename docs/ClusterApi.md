# \ClusterApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#ClusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **Post** /cluster/suppression/filter | 
[**ClusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#ClusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **Delete** /cluster/suppression/filter | 


# **ClusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**
> ClusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(ctx, body)


Add items to suppression filter of every node in cluster

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ModelsSuppression**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ClusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**
> ClusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(ctx, body)


Delete items from suppression filter of every node in cluster

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ModelsSuppression**](ModelsSuppression.md)| Delete suppressions from suppression filter | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

