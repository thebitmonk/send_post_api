/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsDeleteResponse', 'model/ModelsESender', 'model/ModelsSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeleteResponse'), require('../model/ModelsESender'), require('../model/ModelsSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountsenderApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsESender, root.SendPostApi.ModelsSender);
  }
}(this, function(ApiClient, ModelsDeleteResponse, ModelsESender, ModelsSender) {
  'use strict';

  /**
   * Subaccountsender service.
   * @module api/SubaccountsenderApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountsenderApi. 
   * @alias module:api/SubaccountsenderApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the senderRouterCreate operation.
     * @callback module:api/SubaccountsenderApi~senderRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Sender
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsESender} body The Sender content
     * @param {module:api/SubaccountsenderApi~senderRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSender}
     */
    this.senderRouterCreate = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling senderRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling senderRouterCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSender;

      return this.apiClient.callApi(
        '/subaccount/sender/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the senderRouterDelete operation.
     * @callback module:api/SubaccountsenderApi~senderRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Sender
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} senderId The SenderId you want to delete
     * @param {module:api/SubaccountsenderApi~senderRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.senderRouterDelete = function(xSubAccountApiKey, senderId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling senderRouterDelete");
      }

      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling senderRouterDelete");
      }


      var pathParams = {
        'senderId': senderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/subaccount/sender/{senderId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the senderRouterGet operation.
     * @callback module:api/SubaccountsenderApi~senderRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Sender by SenderId
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} senderId the SenderId you want to get
     * @param {module:api/SubaccountsenderApi~senderRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSender}
     */
    this.senderRouterGet = function(xSubAccountApiKey, senderId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling senderRouterGet");
      }

      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling senderRouterGet");
      }


      var pathParams = {
        'senderId': senderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSender;

      return this.apiClient.callApi(
        '/subaccount/sender/{senderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the senderRouterGetAll operation.
     * @callback module:api/SubaccountsenderApi~senderRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSender>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Senders
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/SubaccountsenderApi~senderRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSender>}
     */
    this.senderRouterGetAll = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling senderRouterGetAll");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsSender];

      return this.apiClient.callApi(
        '/subaccount/sender/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the senderRouterUpdate operation.
     * @callback module:api/SubaccountsenderApi~senderRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Sender
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} senderId The SenderId you want to update
     * @param {module:model/ModelsESender} body The body
     * @param {module:api/SubaccountsenderApi~senderRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSender}
     */
    this.senderRouterUpdate = function(xSubAccountApiKey, senderId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling senderRouterUpdate");
      }

      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling senderRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling senderRouterUpdate");
      }


      var pathParams = {
        'senderId': senderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSender;

      return this.apiClient.callApi(
        '/subaccount/sender/{senderId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
