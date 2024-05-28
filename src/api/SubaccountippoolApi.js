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
 * Swagger Codegen version: 2.4.41
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsEIPPool', 'model/ModelsIPPool'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEIPPool'), require('../model/ModelsIPPool'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountippoolApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEIPPool, root.SendPostApi.ModelsIPPool);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsEIPPool, ModelsIPPool) {
  'use strict';

  /**
   * Subaccountippool service.
   * @module api/SubaccountippoolApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountippoolApi. 
   * @alias module:api/SubaccountippoolApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the iPPoolRouterCount operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total IPPools <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountippoolApi~iPPoolRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.iPPoolRouterCount = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterCount");
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/subaccount/ippool/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPPoolRouterCreate operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create IPPool <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsEIPPool} body The IPPool content
     * @param {module:api/SubaccountippoolApi~iPPoolRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIPPool}
     */
    this.iPPoolRouterCreate = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iPPoolRouterCreate");
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
      var returnType = ModelsIPPool;

      return this.apiClient.callApi(
        '/subaccount/ippool/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPPoolRouterDelete operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete IPPool <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} ippoolid The IPPoolId you want to delete
     * @param {module:api/SubaccountippoolApi~iPPoolRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.iPPoolRouterDelete = function(xSubAccountApiKey, ippoolid, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterDelete");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling iPPoolRouterDelete");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
        '/subaccount/ippool/{ippoolid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPPoolRouterGet operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find IPPool by IPPoolId <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} ippoolid the IPPoolId you want to get
     * @param {module:api/SubaccountippoolApi~iPPoolRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIPPool}
     */
    this.iPPoolRouterGet = function(xSubAccountApiKey, ippoolid, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterGet");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling iPPoolRouterGet");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
      var returnType = ModelsIPPool;

      return this.apiClient.callApi(
        '/subaccount/ippool/{ippoolid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPPoolRouterGetAll operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsIPPool>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All IPPools <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/SubaccountippoolApi~iPPoolRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsIPPool>}
     */
    this.iPPoolRouterGetAll = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterGetAll");
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
      var returnType = [ModelsIPPool];

      return this.apiClient.callApi(
        '/subaccount/ippool/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the iPPoolRouterUpdate operation.
     * @callback module:api/SubaccountippoolApi~iPPoolRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update IPPool <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} ippoolid The IPPoolId you want to update
     * @param {module:model/ModelsEIPPool} body The body
     * @param {module:api/SubaccountippoolApi~iPPoolRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIPPool}
     */
    this.iPPoolRouterUpdate = function(xSubAccountApiKey, ippoolid, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling iPPoolRouterUpdate");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling iPPoolRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling iPPoolRouterUpdate");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
      var returnType = ModelsIPPool;

      return this.apiClient.callApi(
        '/subaccount/ippool/{ippoolid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
