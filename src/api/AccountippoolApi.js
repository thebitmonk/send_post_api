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
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAccountIPPool', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsEIPPool'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAccountIPPool'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEIPPool'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountippoolApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAccountIPPool, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEIPPool);
  }
}(this, function(ApiClient, ModelsAccountIPPool, ModelsCountStat, ModelsDeleteResponse, ModelsEIPPool) {
  'use strict';

  /**
   * Accountippool service.
   * @module api/AccountippoolApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountippoolApi. 
   * @alias module:api/AccountippoolApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountIPPoolRouterCount operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total AccountIPPools <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountippoolApi~accountIPPoolRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.accountIPPoolRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterCount");
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/ippool/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterCreate operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create AccountIPPool <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEIPPool} body The AccountIPPool content
     * @param {module:api/AccountippoolApi~accountIPPoolRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountIPPool}
     */
    this.accountIPPoolRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIPPoolRouterCreate");
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
      var returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterDelete operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AccountIPPool <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid The AccountIPPoolId you want to delete
     * @param {module:api/AccountippoolApi~accountIPPoolRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.accountIPPoolRouterDelete = function(xAccountApiKey, ippoolid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterDelete");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterDelete");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterGet operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find AccountIPPool by AccountIPPoolId <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid the AccountIPPoolId you want to get
     * @param {module:api/AccountippoolApi~accountIPPoolRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountIPPool}
     */
    this.accountIPPoolRouterGet = function(xAccountApiKey, ippoolid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterGet");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterGet");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
      var returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterGetAll operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAccountIPPool>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All AccountIPPools <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/AccountippoolApi~accountIPPoolRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAccountIPPool>}
     */
    this.accountIPPoolRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterGetAll");
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
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsAccountIPPool];

      return this.apiClient.callApi(
        '/account/ippool/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIPPoolRouterUpdate operation.
     * @callback module:api/AccountippoolApi~accountIPPoolRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountIPPool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AccountIPPool <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ippoolid The AccountIPPoolId you want to update
     * @param {module:model/ModelsEIPPool} body The body
     * @param {module:api/AccountippoolApi~accountIPPoolRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountIPPool}
     */
    this.accountIPPoolRouterUpdate = function(xAccountApiKey, ippoolid, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIPPoolRouterUpdate");
      }

      // verify the required parameter 'ippoolid' is set
      if (ippoolid === undefined || ippoolid === null) {
        throw new Error("Missing the required parameter 'ippoolid' when calling accountIPPoolRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIPPoolRouterUpdate");
      }


      var pathParams = {
        'ippoolid': ippoolid
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
      var returnType = ModelsAccountIPPool;

      return this.apiClient.callApi(
        '/account/ippool/{ippoolid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
