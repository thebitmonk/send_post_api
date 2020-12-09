# SendPostApi.ClusterApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
[**clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfEveryNodeInCluster) | **DELETE** /cluster/cache | 
[**clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster) | **DELETE** /cluster/cache/node | 
[**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 


<a name="clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster"></a>
# **clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**
> clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body)



Add items to suppression filter of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Add suppressions to suppression filter


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
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Add suppressions to suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**
> clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, name, key)



Delete item from cache of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var name = "name_example"; // String | cache name

var key = "key_example"; // String | cache item key to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, name, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | 
 **key** | **String**| cache item key to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster**
> clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts)



Delete item from cache of specific node in cluster

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
apiInstance.clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, callback);
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



Delete items from suppression filter of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var body = new SendPostApi.ModelsSuppression(); // ModelsSuppression | Delete suppressions from suppression filter


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
 **body** | [**ModelsSuppression**](ModelsSuppression.md)| Delete suppressions from suppression filter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

