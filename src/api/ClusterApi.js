/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAllClusterCache', 'model/ModelsClusterCache', 'model/ModelsSuppression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAllClusterCache'), require('../model/ModelsClusterCache'), require('../model/ModelsSuppression'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ClusterApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAllClusterCache, root.SendPostApi.ModelsClusterCache, root.SendPostApi.ModelsSuppression);
  }
}(this, function(ApiClient, ModelsAllClusterCache, ModelsClusterCache, ModelsSuppression) {
  'use strict';

  /**
   * Cluster service.
   * @module api/ClusterApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ClusterApi. 
   * @alias module:api/ClusterApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster operation.
     * @callback module:api/ClusterApi~clusterRouterAddItemsToSuppressionFilterOfEveryNodeInClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add items to suppression filter of every node in cluster
     * @param {module:model/ModelsSuppression} body Add suppressions to suppression filter
     * @param {module:api/ClusterApi~clusterRouterAddItemsToSuppressionFilterOfEveryNodeInClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cluster/suppression/filter', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clusterRouterDeleteItemFromCacheOfEveryNodeInCluster operation.
     * @callback module:api/ClusterApi~clusterRouterDeleteItemFromCacheOfEveryNodeInClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete item from cache of every node in cluster
     * @param {String} xSystemApiKey System API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.name cache name
     * @param {String} opts.key cache item key to delete
     * @param {module:api/ClusterApi~clusterRouterDeleteItemFromCacheOfEveryNodeInClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster = function(xSystemApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling clusterRouterDeleteItemFromCacheOfEveryNodeInCluster");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'key': opts['key'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cluster/cache', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster operation.
     * @callback module:api/ClusterApi~clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInClusterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete items from suppression filter of every node in cluster
     * @param {module:model/ModelsSuppression} body Delete suppressions from suppression filter
     * @param {module:api/ClusterApi~clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInClusterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cluster/suppression/filter', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clusterRouterGetItemFromCacheOfEveryNodeInCluster operation.
     * @callback module:api/ClusterApi~clusterRouterGetItemFromCacheOfEveryNodeInClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAllClusterCache} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item from cache of every node in cluster
     * @param {String} xSystemApiKey System API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.name cache name
     * @param {String} opts.key cache item key to delete
     * @param {module:api/ClusterApi~clusterRouterGetItemFromCacheOfEveryNodeInClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAllClusterCache}
     */
    this.clusterRouterGetItemFromCacheOfEveryNodeInCluster = function(xSystemApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling clusterRouterGetItemFromCacheOfEveryNodeInCluster");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'key': opts['key'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsAllClusterCache;

      return this.apiClient.callApi(
        '/cluster/cache', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clusterRouterGetItemFromCacheOfSpecificNodeInCluster operation.
     * @callback module:api/ClusterApi~clusterRouterGetItemFromCacheOfSpecificNodeInClusterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsClusterCache} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete item from cache of specific node in cluster
     * @param {String} xSystemApiKey System API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.name cache name
     * @param {String} opts.key cache item key to delete
     * @param {module:api/ClusterApi~clusterRouterGetItemFromCacheOfSpecificNodeInClusterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsClusterCache}
     */
    this.clusterRouterGetItemFromCacheOfSpecificNodeInCluster = function(xSystemApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling clusterRouterGetItemFromCacheOfSpecificNodeInCluster");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'key': opts['key'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsClusterCache;

      return this.apiClient.callApi(
        '/cluster/cache/node', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0 operation.
     * @callback module:api/ClusterApi~clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item from cache of specific node in cluster
     * @param {String} xSystemApiKey System API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.name cache name
     * @param {String} opts.key cache item key to delete
     * @param {module:api/ClusterApi~clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0 = function(xSystemApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'key': opts['key'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cluster/cache/node', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
