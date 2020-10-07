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
 * Swagger Codegen version: 2.4.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsLabel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsLabel'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountlabelApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsLabel);
  }
}(this, function(ApiClient, ModelsCountStat, ModelsDeleteResponse, ModelsLabel) {
  'use strict';

  /**
   * Accountlabel service.
   * @module api/AccountlabelApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountlabelApi. 
   * @alias module:api/AccountlabelApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the labelRouterCount operation.
     * @callback module:api/AccountlabelApi~labelRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Labels
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountlabelApi~labelRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.labelRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterCount");
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
        '/account/label/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the labelRouterCreate operation.
     * @callback module:api/AccountlabelApi~labelRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsLabel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Label
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsLabel} body The Label content
     * @param {module:api/AccountlabelApi~labelRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsLabel}
     */
    this.labelRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling labelRouterCreate");
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
      var returnType = ModelsLabel;

      return this.apiClient.callApi(
        '/account/label/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the labelRouterDelete operation.
     * @callback module:api/AccountlabelApi~labelRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Label
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} labelId The LabelId you want to delete
     * @param {module:api/AccountlabelApi~labelRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.labelRouterDelete = function(xAccountApiKey, labelId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterDelete");
      }

      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling labelRouterDelete");
      }


      var pathParams = {
        'labelId': labelId
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
        '/account/label/{labelId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the labelRouterGet operation.
     * @callback module:api/AccountlabelApi~labelRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsLabel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Label by LabelId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} labelId the LabelId you want to get
     * @param {module:api/AccountlabelApi~labelRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsLabel}
     */
    this.labelRouterGet = function(xAccountApiKey, labelId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterGet");
      }

      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling labelRouterGet");
      }


      var pathParams = {
        'labelId': labelId
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
      var returnType = ModelsLabel;

      return this.apiClient.callApi(
        '/account/label/{labelId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the labelRouterGetAll operation.
     * @callback module:api/AccountlabelApi~labelRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsLabel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Labels
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountlabelApi~labelRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsLabel>}
     */
    this.labelRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterGetAll");
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
      var returnType = [ModelsLabel];

      return this.apiClient.callApi(
        '/account/label/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the labelRouterUpdate operation.
     * @callback module:api/AccountlabelApi~labelRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsLabel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Label
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} labelId The LabelId you want to update
     * @param {module:model/ModelsLabel} body The body
     * @param {module:api/AccountlabelApi~labelRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsLabel}
     */
    this.labelRouterUpdate = function(xAccountApiKey, labelId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling labelRouterUpdate");
      }

      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling labelRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling labelRouterUpdate");
      }


      var pathParams = {
        'labelId': labelId
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
      var returnType = ModelsLabel;

      return this.apiClient.callApi(
        '/account/label/{labelId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
