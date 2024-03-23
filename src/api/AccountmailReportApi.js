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
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiGlockappsMailReport', 'model/ModelsCreateMailReport', 'model/ModelsMailReportResult', 'model/ModelsProviderResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiGlockappsMailReport'), require('../model/ModelsCreateMailReport'), require('../model/ModelsMailReportResult'), require('../model/ModelsProviderResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountmailReportApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ApiGlockappsMailReport, root.SendPostApi.ModelsCreateMailReport, root.SendPostApi.ModelsMailReportResult, root.SendPostApi.ModelsProviderResult);
  }
}(this, function(ApiClient, ApiGlockappsMailReport, ModelsCreateMailReport, ModelsMailReportResult, ModelsProviderResult) {
  'use strict';

  /**
   * AccountmailReport service.
   * @module api/AccountmailReportApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountmailReportApi. 
   * @alias module:api/AccountmailReportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the mailReportRouterMailReport operation.
     * @callback module:api/AccountmailReportApi~mailReportRouterMailReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsMailReportResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get reputation of domain
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsCreateMailReport} body The IP Email Provider Settings
     * @param {module:api/AccountmailReportApi~mailReportRouterMailReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsMailReportResult}
     */
    this.mailReportRouterMailReport = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling mailReportRouterMailReport");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling mailReportRouterMailReport");
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
      var returnType = ModelsMailReportResult;

      return this.apiClient.callApi(
        '/account/mailReport/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mailReportRouterMailReportGetSingleReport operation.
     * @callback module:api/AccountmailReportApi~mailReportRouterMailReportGetSingleReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiGlockappsMailReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Providers available
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} reportId the report id you want to get
     * @param {module:api/AccountmailReportApi~mailReportRouterMailReportGetSingleReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiGlockappsMailReport}
     */
    this.mailReportRouterMailReportGetSingleReport = function(xAccountApiKey, reportId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling mailReportRouterMailReportGetSingleReport");
      }

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling mailReportRouterMailReportGetSingleReport");
      }


      var pathParams = {
        'reportId': reportId
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
      var returnType = ApiGlockappsMailReport;

      return this.apiClient.callApi(
        '/account/mailReport/{reportId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the mailReportRouterMailReportProviders operation.
     * @callback module:api/AccountmailReportApi~mailReportRouterMailReportProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsProviderResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Providers available
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountmailReportApi~mailReportRouterMailReportProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsProviderResult}
     */
    this.mailReportRouterMailReportProviders = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling mailReportRouterMailReportProviders");
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
      var returnType = ModelsProviderResult;

      return this.apiClient.callApi(
        '/account/mailReport/provider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
