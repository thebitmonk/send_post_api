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
    define(['ApiClient', 'model/ModelsESMTPAuth', 'model/ModelsSMTPAuthCompleted', 'model/ModelsWMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsESMTPAuth'), require('../model/ModelsSMTPAuthCompleted'), require('../model/ModelsWMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SmtpApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsESMTPAuth, root.SendPostApi.ModelsSMTPAuthCompleted, root.SendPostApi.ModelsWMessage);
  }
}(this, function(ApiClient, ModelsESMTPAuth, ModelsSMTPAuthCompleted, ModelsWMessage) {
  'use strict';

  /**
   * Smtp service.
   * @module api/SmtpApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SmtpApi. 
   * @alias module:api/SmtpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sMTPRouterAuthForSMTPServers operation.
     * @callback module:api/SmtpApi~sMTPRouterAuthForSMTPServersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSMTPAuthCompleted} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if the username and password correct and returns the subAccount info
     * @param {module:model/ModelsESMTPAuth} body The SMTP Auth content
     * @param {module:api/SmtpApi~sMTPRouterAuthForSMTPServersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSMTPAuthCompleted}
     */
    this.sMTPRouterAuthForSMTPServers = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sMTPRouterAuthForSMTPServers");
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
      var returnType = ModelsSMTPAuthCompleted;

      return this.apiClient.callApi(
        '/smtp/auth', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPRouterReceiveWebhooksRaisedFromSMTPServers operation.
     * @callback module:api/SmtpApi~sMTPRouterReceiveWebhooksRaisedFromSMTPServersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive webhooks raised from SMTP servers
     * @param {module:model/ModelsWMessage} body The Webhook content
     * @param {module:api/SmtpApi~sMTPRouterReceiveWebhooksRaisedFromSMTPServersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sMTPRouterReceiveWebhooksRaisedFromSMTPServers = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sMTPRouterReceiveWebhooksRaisedFromSMTPServers");
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
        '/smtp/webhook', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
