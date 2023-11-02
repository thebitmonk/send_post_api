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
    define(['ApiClient', 'model/ModelsSystemTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsSystemTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SystemtemplateApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSystemTemplate);
  }
}(this, function(ApiClient, ModelsSystemTemplate) {
  'use strict';

  /**
   * Systemtemplate service.
   * @module api/SystemtemplateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SystemtemplateApi. 
   * @alias module:api/SystemtemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the systemTemplateRouterGetAllSystemTemplates operation.
     * @callback module:api/SystemtemplateApi~systemTemplateRouterGetAllSystemTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSystemTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all System Templates <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/SystemtemplateApi~systemTemplateRouterGetAllSystemTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSystemTemplate>}
     */
    this.systemTemplateRouterGetAllSystemTemplates = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling systemTemplateRouterGetAllSystemTemplates");
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
      var returnType = [ModelsSystemTemplate];

      return this.apiClient.callApi(
        '/system/template/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
