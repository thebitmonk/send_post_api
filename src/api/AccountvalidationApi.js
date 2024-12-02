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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MapStringint', 'model/ModelsBulkResponse', 'model/ModelsCountStat', 'model/ModelsEValidation', 'model/ModelsEmail', 'model/ModelsEmailList', 'model/ModelsValidation', 'model/ModelsValidationJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MapStringint'), require('../model/ModelsBulkResponse'), require('../model/ModelsCountStat'), require('../model/ModelsEValidation'), require('../model/ModelsEmail'), require('../model/ModelsEmailList'), require('../model/ModelsValidation'), require('../model/ModelsValidationJob'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountvalidationApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.MapStringint, root.SendPostApi.ModelsBulkResponse, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsEValidation, root.SendPostApi.ModelsEmail, root.SendPostApi.ModelsEmailList, root.SendPostApi.ModelsValidation, root.SendPostApi.ModelsValidationJob);
  }
}(this, function(ApiClient, MapStringint, ModelsBulkResponse, ModelsCountStat, ModelsEValidation, ModelsEmail, ModelsEmailList, ModelsValidation, ModelsValidationJob) {
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
     * Count Total Validations <br>
     * @param {String} xSubAccountApiKey SubAccount API Key
     * @param {module:api/AccountvalidationApi~validationRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.validationRouterCount = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterCount");
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
     * Delete a specific validation <br>
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
     * @param {Array.<module:model/ModelsValidationJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all validation <br>
     * @param {String} xSubAccountApiKey SubAccount API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/AccountvalidationApi~validationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsValidationJob>}
     */
    this.validationRouterGetAll = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterGetAll");
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
      var returnType = [ModelsValidationJob];

      return this.apiClient.callApi(
        '/account/validation/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetEmailCountByStatus operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetEmailCountByStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapStringint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get count of email addresses based on status <br>
     * @param {String} xSubAccountApiKey SubAccount API Key
     * @param {Number} status Email status filter
     * @param {module:api/AccountvalidationApi~validationRouterGetEmailCountByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapStringint}
     */
    this.validationRouterGetEmailCountByStatus = function(xSubAccountApiKey, status, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterGetEmailCountByStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling validationRouterGetEmailCountByStatus");
      }


      var pathParams = {
      };
      var queryParams = {
        'status': status,
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
      var returnType = MapStringint;

      return this.apiClient.callApi(
        '/account/validation/emails/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetEmailsByStatus operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetEmailsByStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsEmail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch email addresses based on status with limit and offset <br>
     * @param {String} xSubAccountApiKey SubAccount API Key
     * @param {Number} status Email status filter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Offset for pagination
     * @param {Number} opts.limit Limit for pagination
     * @param {module:api/AccountvalidationApi~validationRouterGetEmailsByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsEmail>}
     */
    this.validationRouterGetEmailsByStatus = function(xSubAccountApiKey, status, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterGetEmailsByStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling validationRouterGetEmailsByStatus");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'status': status,
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
      var returnType = [ModelsEmail];

      return this.apiClient.callApi(
        '/account/validation/emails', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetValidationJobResults operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetValidationJobResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get validation job results <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.jobId jobId
     * @param {String} opts.tag tag
     * @param {module:api/AccountvalidationApi~validationRouterGetValidationJobResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validationRouterGetValidationJobResults = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterGetValidationJobResults");
      }


      var pathParams = {
      };
      var queryParams = {
        'jobId': opts['jobId'],
        'tag': opts['tag'],
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
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/results', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterValidateEmailBulkList operation.
     * @callback module:api/AccountvalidationApi~validationRouterValidateEmailBulkListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Emails In File Asynchronously <br>
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsEmailList} body The email list to be sent for being validated
     * @param {module:api/AccountvalidationApi~validationRouterValidateEmailBulkListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validationRouterValidateEmailBulkList = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling validationRouterValidateEmailBulkList");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validationRouterValidateEmailBulkList");
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
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/list/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
