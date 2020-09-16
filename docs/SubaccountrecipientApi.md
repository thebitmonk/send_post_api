# \SubaccountrecipientApi

All URIs are relative to *https://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecipientRouterGetAllMessagesForARecipient**](SubaccountrecipientApi.md#RecipientRouterGetAllMessagesForARecipient) | **Get** /subaccount/recipient/{recipient}/messages | 
[**RecipientRouterGetAllMessagesForARecipientFromANode**](SubaccountrecipientApi.md#RecipientRouterGetAllMessagesForARecipientFromANode) | **Get** /subaccount/recipient/node/{subAccountId}/{recipient}/messages | 


# **RecipientRouterGetAllMessagesForARecipient**
> []ModelsQEmailMessage RecipientRouterGetAllMessagesForARecipient(ctx, xSubAccountApiKey, recipient)


Find all messages sent to a specific recipient

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **recipient** | **string**| email of the recipient | 

### Return type

[**[]ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecipientRouterGetAllMessagesForARecipientFromANode**
> []ModelsQEmailMessage RecipientRouterGetAllMessagesForARecipientFromANode(ctx, xSubAccountApiKey, subAccountId, recipient)


Find all message sent to a recipient from a specific node

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **xSubAccountApiKey** | **string**| Sub-Account API Key | 
  **subAccountId** | **int64**| the subAccountId whose message you want to retrieve | 
  **recipient** | **string**| email of the recipient | 

### Return type

[**[]ModelsQEmailMessage**](models.QEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

