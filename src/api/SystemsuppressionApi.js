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
    define(['ApiClient', 'model/ModelsRSuppression', 'model/ModelsSuppression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsRSuppression'), require('../model/ModelsSuppression'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SystemsuppressionApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsRSuppression, root.SendPostApi.ModelsSuppression);
  }
}(this, function(ApiClient, ModelsRSuppression, ModelsSuppression) {
  'use strict';

  /**
   * Systemsuppression service.
   * @module api/SystemsuppressionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SystemsuppressionApi. 
   * @alias module:api/SystemsuppressionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the systemSuppressionRouterCreateSuppressionsViaSendX operation.
     * @callback module:api/SystemsuppressionApi~systemSuppressionRouterCreateSuppressionsViaSendXCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSuppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression List <br>
     * @param {String} xSystemApiKey System API Key
     * @param {Number} subAccountId The SubAccountId you want to delete
     * @param {module:model/ModelsRSuppression} body Suppression content
     * @param {module:api/SystemsuppressionApi~systemSuppressionRouterCreateSuppressionsViaSendXCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSuppression}
     */
    this.systemSuppressionRouterCreateSuppressionsViaSendX = function(xSystemApiKey, subAccountId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSystemApiKey' is set
      if (xSystemApiKey === undefined || xSystemApiKey === null) {
        throw new Error("Missing the required parameter 'xSystemApiKey' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling systemSuppressionRouterCreateSuppressionsViaSendX");
      }


      var pathParams = {
        'subAccountId': subAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-System-ApiKey': xSystemApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSuppression;

      return this.apiClient.callApi(
        '/system/suppression/{subAccountId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
