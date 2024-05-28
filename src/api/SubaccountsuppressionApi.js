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
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsRDSuppression', 'model/ModelsRSuppression', 'model/ModelsSuppression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsRDSuppression'), require('../model/ModelsRSuppression'), require('../model/ModelsSuppression'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountsuppressionApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsRDSuppression, root.SendPostApi.ModelsRSuppression, root.SendPostApi.ModelsSuppression);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsRDSuppression, ModelsRSuppression, ModelsSuppression) {
  'use strict';

  /**
   * Subaccountsuppression service.
   * @module api/SubaccountsuppressionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountsuppressionApi. 
   * @alias module:api/SubaccountsuppressionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the suppressionRouterCount operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Suppressions <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.suppressionRouterCount = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterCount");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
        '/subaccount/suppression/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterCreateSuppressions operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSuppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression List <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsRSuppression} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSuppression>}
     */
    this.suppressionRouterCreateSuppressions = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterCreateSuppressions");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterCreateSuppressions");
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
      var returnType = [ModelsSuppression];

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterCreateSuppressionsBulk operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsBulkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression List
     * @param {File} fileinput CSV whose emails need to be added in suppression
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsBulkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterCreateSuppressionsBulk = function(fileinput, xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'fileinput' is set
      if (fileinput === undefined || fileinput === null) {
        throw new Error("Missing the required parameter 'fileinput' when calling suppressionRouterCreateSuppressionsBulk");
      }

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterCreateSuppressionsBulk");
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
        'fileinput': fileinput
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/suppression/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterCreateSuppressionsInSuppressionFilter operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsInSuppressionFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression Filter <br>
     * @param {Array.<module:model/ModelsSuppression>} body Add suppressions to suppression filter
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsInSuppressionFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterCreateSuppressionsInSuppressionFilter = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterCreateSuppressionsInSuppressionFilter");
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
        '/subaccount/suppression/filter', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterDeleteSuppression operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsDeleteResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete specific emails which are in suppression list <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsRDSuppression} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsDeleteResponse>}
     */
    this.suppressionRouterDeleteSuppression = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterDeleteSuppression");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterDeleteSuppression");
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
      var returnType = [ModelsDeleteResponse];

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterDeleteSuppressionsInSuppressionFilter operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionsInSuppressionFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete specific emails which are in suppression list <br>
     * @param {Array.<module:model/ModelsSuppression>} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionsInSuppressionFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterDeleteSuppressionsInSuppressionFilter = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterDeleteSuppressionsInSuppressionFilter");
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
        '/subaccount/suppression/filter', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterExportAllSuppressions operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterExportAllSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export all suppressions <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.email member email
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterExportAllSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterExportAllSuppressions = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterExportAllSuppressions");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'email': opts['email'],
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
        '/subaccount/suppression/export', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterGetAllSuppressions operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterGetAllSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSuppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all suppressions <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterGetAllSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSuppression>}
     */
    this.suppressionRouterGetAllSuppressions = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterGetAllSuppressions");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsSuppression];

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
