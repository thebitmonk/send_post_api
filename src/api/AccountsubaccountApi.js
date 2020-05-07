/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsSubAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsSubAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountsubaccountApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSubAccount);
  }
}(this, function(ApiClient, ModelsSubAccount) {
  'use strict';

  /**
   * Accountsubaccount service.
   * @module api/AccountsubaccountApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountsubaccountApi. 
   * @alias module:api/AccountsubaccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the subAccountRouterCreate operation.
     * @callback module:api/AccountsubaccountApi~subAccountRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create SubAccount
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsSubAccount} body The SubAccount content
     * @param {module:api/AccountsubaccountApi~subAccountRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.subAccountRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subAccountRouterCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/subaccount/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountRouterDelete operation.
     * @callback module:api/AccountsubaccountApi~subAccountRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SubAccount
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} subAccountId The SubAccountId you want to delete
     * @param {module:api/AccountsubaccountApi~subAccountRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.subAccountRouterDelete = function(xAccountApiKey, subAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountRouterDelete");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling subAccountRouterDelete");
      }


      var pathParams = {
        'subAccountId': subAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/subaccount/{subAccountId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountRouterGet operation.
     * @callback module:api/AccountsubaccountApi~subAccountRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSubAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find SubAccount by SubAccountId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} subAccountId the SubAccountId you want to get
     * @param {module:api/AccountsubaccountApi~subAccountRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSubAccount}
     */
    this.subAccountRouterGet = function(xAccountApiKey, subAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountRouterGet");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling subAccountRouterGet");
      }


      var pathParams = {
        'subAccountId': subAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSubAccount;

      return this.apiClient.callApi(
        '/account/subaccount/{subAccountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountRouterGetAll operation.
     * @callback module:api/AccountsubaccountApi~subAccountRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSubAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All SubAccounts
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountsubaccountApi~subAccountRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSubAccount>}
     */
    this.subAccountRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountRouterGetAll");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsSubAccount];

      return this.apiClient.callApi(
        '/account/subaccount/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountRouterUpdate operation.
     * @callback module:api/AccountsubaccountApi~subAccountRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSubAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SubAccount
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} subAccountId The SubAccountId you want to update
     * @param {module:model/ModelsSubAccount} body The body
     * @param {module:api/AccountsubaccountApi~subAccountRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSubAccount}
     */
    this.subAccountRouterUpdate = function(xAccountApiKey, subAccountId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling subAccountRouterUpdate");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling subAccountRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subAccountRouterUpdate");
      }


      var pathParams = {
        'subAccountId': subAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSubAccount;

      return this.apiClient.callApi(
        '/account/subaccount/{subAccountId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
