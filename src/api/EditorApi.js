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
    define(['ApiClient', 'model/ModelsEditorTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsEditorTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.EditorApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEditorTokenResponse);
  }
}(this, function(ApiClient, ModelsEditorTokenResponse) {
  'use strict';

  /**
   * Editor service.
   * @module api/EditorApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EditorApi. 
   * @alias module:api/EditorApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editorApiRouterGetToken operation.
     * @callback module:api/EditorApi~editorApiRouterGetTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsEditorTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetch Bee editor token <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/EditorApi~editorApiRouterGetTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsEditorTokenResponse}
     */
    this.editorApiRouterGetToken = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling editorApiRouterGetToken");
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
      var returnType = ModelsEditorTokenResponse;

      return this.apiClient.callApi(
        '/editor/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
