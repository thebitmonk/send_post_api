# SendPostApi.ClusterApi

All URIs are relative to *https://apiv2.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
[**clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfEveryNodeInCluster) | **DELETE** /cluster/cache | 
[**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
[**clusterRouterGetItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterGetItemFromCacheOfEveryNodeInCluster) | **GET** /cluster/cache | 
[**clusterRouterGetItemFromCacheOfSpecificNodeInCluster**](ClusterApi.md#clusterRouterGetItemFromCacheOfSpecificNodeInCluster) | **GET** /cluster/cache/node | 
[**clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0**](ClusterApi.md#clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0) | **DELETE** /cluster/cache/node | 


<a name="clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**
> clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body)



Add items to suppression filter of every node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = [new SendPostApi.ModelsSuppression()]; // [ModelsSuppression] | Add suppressions to suppression filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ModelsSuppression]**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**
> clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Delete item from cache of every node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**
> clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body)



Delete items from suppression filter of every node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = [new SendPostApi.ModelsSuppression()]; // [ModelsSuppression] | Delete suppressions from suppression filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ModelsSuppression]**](ModelsSuppression.md)| Delete suppressions from suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterGetItemFromCacheOfEveryNodeInCluster**
> ModelsAllClusterCache clusterRouterGetItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Get item from cache of every node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clusterRouterGetItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

[**ModelsAllClusterCache**](ModelsAllClusterCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfSpecificNodeInCluster"></a>
# **clusterRouterGetItemFromCacheOfSpecificNodeInCluster**
> ModelsClusterCache clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts)



Delete item from cache of specific node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

[**ModelsClusterCache**](ModelsClusterCache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0"></a>
# **clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0**
> clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0(xSystemApiKey, opts)



Get item from cache of specific node in cluster <br>

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

