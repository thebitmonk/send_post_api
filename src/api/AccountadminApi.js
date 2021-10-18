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
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsRAssumeAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsRAssumeAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountadminApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsRAssumeAccount);
  }
}(this, function(ApiClient, ModelsRAssumeAccount) {
  'use strict';

  /**
   * Accountadmin service.
   * @module api/AccountadminApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountadminApi. 
   * @alias module:api/AccountadminApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountAdminRouterAssumeAccountGetToken operation.
     * @callback module:api/AccountadminApi~accountAdminRouterAssumeAccountGetTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsRAssumeAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with a custom token for frontend to start login using firebase sdk
     * @param {String} xAccountApiKey Account API Key
     * @param {String} email email
     * @param {Object} opts Optional parameters
     * @param {String} opts.uid firebase uid if you have
     * @param {module:api/AccountadminApi~accountAdminRouterAssumeAccountGetTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsRAssumeAccount}
     */
    this.accountAdminRouterAssumeAccountGetToken = function(xAccountApiKey, email, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountAdminRouterAssumeAccountGetToken");
      }

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling accountAdminRouterAssumeAccountGetToken");
      }


      var pathParams = {
      };
      var queryParams = {
        'email': email,
        'uid': opts['uid'],
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
      var returnType = ModelsRAssumeAccount;

      return this.apiClient.callApi(
        '/account/admin/assume', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));