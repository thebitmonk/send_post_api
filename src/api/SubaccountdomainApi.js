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
    define(['ApiClient', 'model/ModelsDomain', 'model/ModelsEDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDomain'), require('../model/ModelsEDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountdomainApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDomain, root.SendPostApi.ModelsEDomain);
  }
}(this, function(ApiClient, ModelsDomain, ModelsEDomain) {
  'use strict';

  /**
   * Subaccountdomain service.
   * @module api/SubaccountdomainApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountdomainApi. 
   * @alias module:api/SubaccountdomainApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainRouterCreate operation.
     * @callback module:api/SubaccountdomainApi~domainRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsEDomain} body The Domain content
     * @param {module:api/SubaccountdomainApi~domainRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.domainRouterCreate = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainRouterCreate");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/domain/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterDelete operation.
     * @callback module:api/SubaccountdomainApi~domainRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId The DomainId you want to delete
     * @param {module:api/SubaccountdomainApi~domainRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.domainRouterDelete = function(xSubAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterDelete");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterDelete");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterGet operation.
     * @callback module:api/SubaccountdomainApi~domainRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Domain by DomainId
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId the DomainId you want to get
     * @param {module:api/SubaccountdomainApi~domainRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterGet = function(xSubAccountApiKey, domainId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterGet");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterGet");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterGetAll operation.
     * @callback module:api/SubaccountdomainApi~domainRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDomain>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Domains
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountdomainApi~domainRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDomain>}
     */
    this.domainRouterGetAll = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterGetAll");
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
      var returnType = [ModelsDomain];

      return this.apiClient.callApi(
        '/subaccount/domain/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the domainRouterUpdate operation.
     * @callback module:api/SubaccountdomainApi~domainRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDomain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Domain
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} domainId The DomainId you want to update
     * @param {module:model/ModelsEDomain} body The body
     * @param {module:api/SubaccountdomainApi~domainRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDomain}
     */
    this.domainRouterUpdate = function(xSubAccountApiKey, domainId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling domainRouterUpdate");
      }

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling domainRouterUpdate");
      }


      var pathParams = {
        'domainId': domainId
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
      var returnType = ModelsDomain;

      return this.apiClient.callApi(
        '/subaccount/domain/{domainId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
