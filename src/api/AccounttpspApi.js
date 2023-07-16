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
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsEThirdPartySendingProvider', 'model/ModelsEUpdateTPSP', 'model/ModelsThirdPartySendingProvider'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEThirdPartySendingProvider'), require('../model/ModelsEUpdateTPSP'), require('../model/ModelsThirdPartySendingProvider'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccounttpspApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEThirdPartySendingProvider, root.SendPostApi.ModelsEUpdateTPSP, root.SendPostApi.ModelsThirdPartySendingProvider);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsEThirdPartySendingProvider, ModelsEUpdateTPSP, ModelsThirdPartySendingProvider) {
  'use strict';

  /**
   * Accounttpsp service.
   * @module api/AccounttpspApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccounttpspApi. 
   * @alias module:api/AccounttpspApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tPSPRouterCount operation.
     * @callback module:api/AccounttpspApi~tPSPRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total TPSPs <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {module:api/AccounttpspApi~tPSPRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.tPSPRouterCount = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterCount");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/tpsp/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tPSPRouterDelete operation.
     * @callback module:api/AccounttpspApi~tPSPRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete ThirdPartySendingProvider <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspId The TPSPID you want to delete
     * @param {module:api/AccounttpspApi~tPSPRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.tPSPRouterDelete = function(xAccountApiKey, tpspId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterDelete");
      }

      // verify the required parameter 'tpspId' is set
      if (tpspId === undefined || tpspId === null) {
        throw new Error("Missing the required parameter 'tpspId' when calling tPSPRouterDelete");
      }


      var pathParams = {
        'tpspId': tpspId
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
        '/account/tpsp/{tpspId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tPSPRouterGet operation.
     * @callback module:api/AccounttpspApi~tPSPRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsThirdPartySendingProvider} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find ThirdPartySendingProvider by TPSPID <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspId the TPSPID you want to get
     * @param {module:api/AccounttpspApi~tPSPRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsThirdPartySendingProvider}
     */
    this.tPSPRouterGet = function(xAccountApiKey, tpspId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterGet");
      }

      // verify the required parameter 'tpspId' is set
      if (tpspId === undefined || tpspId === null) {
        throw new Error("Missing the required parameter 'tpspId' when calling tPSPRouterGet");
      }


      var pathParams = {
        'tpspId': tpspId
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
      var returnType = ModelsThirdPartySendingProvider;

      return this.apiClient.callApi(
        '/account/tpsp/{tpspId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tPSPRouterGetAll operation.
     * @callback module:api/AccounttpspApi~tPSPRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsThirdPartySendingProvider>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All TPSPs <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {module:api/AccounttpspApi~tPSPRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsThirdPartySendingProvider>}
     */
    this.tPSPRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterGetAll");
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
      var returnType = [ModelsThirdPartySendingProvider];

      return this.apiClient.callApi(
        '/account/tpsp/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tPSPRouterInsert operation.
     * @callback module:api/AccounttpspApi~tPSPRouterInsertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsThirdPartySendingProvider} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert ThirdPartySendingProvider <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEThirdPartySendingProvider} body The body
     * @param {module:api/AccounttpspApi~tPSPRouterInsertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsThirdPartySendingProvider}
     */
    this.tPSPRouterInsert = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterInsert");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tPSPRouterInsert");
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
      var returnType = ModelsThirdPartySendingProvider;

      return this.apiClient.callApi(
        '/account/tpsp/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tPSPRouterUpdate operation.
     * @callback module:api/AccounttpspApi~tPSPRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsThirdPartySendingProvider} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update ThirdPartySendingProvider <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tpspId The TPSPID you want to update
     * @param {module:model/ModelsEUpdateTPSP} body The body
     * @param {module:api/AccounttpspApi~tPSPRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsThirdPartySendingProvider}
     */
    this.tPSPRouterUpdate = function(xAccountApiKey, tpspId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tPSPRouterUpdate");
      }

      // verify the required parameter 'tpspId' is set
      if (tpspId === undefined || tpspId === null) {
        throw new Error("Missing the required parameter 'tpspId' when calling tPSPRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tPSPRouterUpdate");
      }


      var pathParams = {
        'tpspId': tpspId
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
      var returnType = ModelsThirdPartySendingProvider;

      return this.apiClient.callApi(
        '/account/tpsp/{tpspId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
