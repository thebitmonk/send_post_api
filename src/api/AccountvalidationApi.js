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
 * Swagger Codegen version: 2.4.30
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBulkResponse', 'model/ModelsCleanedList', 'model/ModelsCountStat', 'model/ModelsEValidation', 'model/ModelsEmailList', 'model/ModelsValidation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBulkResponse'), require('../model/ModelsCleanedList'), require('../model/ModelsCountStat'), require('../model/ModelsEValidation'), require('../model/ModelsEmailList'), require('../model/ModelsValidation'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountvalidationApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBulkResponse, root.SendPostApi.ModelsCleanedList, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsEValidation, root.SendPostApi.ModelsEmailList, root.SendPostApi.ModelsValidation);
  }
}(this, function(ApiClient, ModelsBulkResponse, ModelsCleanedList, ModelsCountStat, ModelsEValidation, ModelsEmailList, ModelsValidation) {
  'use strict';

  /**
   * Accountvalidation service.
   * @module api/AccountvalidationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountvalidationApi. 
   * @alias module:api/AccountvalidationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validateRouterValidateEmailBulk operation.
     * @callback module:api/AccountvalidationApi~validateRouterValidateEmailBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Emails In File Asynchronously
     * @param {File} fileinput CSV whose emails need to be validated
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountvalidationApi~validateRouterValidateEmailBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validateRouterValidateEmailBulk = function(fileinput, xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'fileinput' is set
      if (fileinput === undefined || fileinput === null) {
        throw new Error("Missing the required parameter 'fileinput' when calling validateRouterValidateEmailBulk");
      }

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validateRouterValidateEmailBulk");
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
        'fileinput': fileinput
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterCount operation.
     * @callback module:api/AccountvalidationApi~validationRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Validations
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountvalidationApi~validationRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.validationRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterCount");
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
        '/account/validation/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterDeleteValidation operation.
     * @callback module:api/AccountvalidationApi~validationRouterDeleteValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsValidation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a specific validation
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEValidation} body List of emails to be deleted from validation
     * @param {module:api/AccountvalidationApi~validationRouterDeleteValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsValidation}
     */
    this.validationRouterDeleteValidation = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterDeleteValidation");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validationRouterDeleteValidation");
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
      var returnType = ModelsValidation;

      return this.apiClient.callApi(
        '/account/validation/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetAll operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsValidation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all validation
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/AccountvalidationApi~validationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsValidation>}
     */
    this.validationRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterGetAll");
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
      var returnType = [ModelsValidation];

      return this.apiClient.callApi(
        '/account/validation/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterValidateEmailList operation.
     * @callback module:api/AccountvalidationApi~validationRouterValidateEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCleanedList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Email List Synchronously
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEmailList} body The email list to be sent for being validated
     * @param {module:api/AccountvalidationApi~validationRouterValidateEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCleanedList}
     */
    this.validationRouterValidateEmailList = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterValidateEmailList");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validationRouterValidateEmailList");
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
      var returnType = ModelsCleanedList;

      return this.apiClient.callApi(
        '/account/validation/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
