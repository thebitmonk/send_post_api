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
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBillingPortalSession', 'model/ModelsPaymentOptions', 'model/ModelsPaymentStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBillingPortalSession'), require('../model/ModelsPaymentOptions'), require('../model/ModelsPaymentStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountpaymentApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBillingPortalSession, root.SendPostApi.ModelsPaymentOptions, root.SendPostApi.ModelsPaymentStatus);
  }
}(this, function(ApiClient, ModelsBillingPortalSession, ModelsPaymentOptions, ModelsPaymentStatus) {
  'use strict';

  /**
   * Accountpayment service.
   * @module api/AccountpaymentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountpaymentApi. 
   * @alias module:api/AccountpaymentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the paymentRouterCreateCustomerPortal operation.
     * @callback module:api/AccountpaymentApi~paymentRouterCreateCustomerPortalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBillingPortalSession} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Customer Portal for account
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountpaymentApi~paymentRouterCreateCustomerPortalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBillingPortalSession}
     */
    this.paymentRouterCreateCustomerPortal = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling paymentRouterCreateCustomerPortal");
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
      var returnType = ModelsBillingPortalSession;

      return this.apiClient.callApi(
        '/account/payment/portal', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterCreatePaymentSubscription operation.
     * @callback module:api/AccountpaymentApi~paymentRouterCreatePaymentSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsPaymentStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Payment Subscription for Stripe
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsPaymentOptions} body PaymentOptions content
     * @param {module:api/AccountpaymentApi~paymentRouterCreatePaymentSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsPaymentStatus}
     */
    this.paymentRouterCreatePaymentSubscription = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling paymentRouterCreatePaymentSubscription");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentRouterCreatePaymentSubscription");
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
      var returnType = ModelsPaymentStatus;

      return this.apiClient.callApi(
        '/account/payment/subscription', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterHandlePaymentWebhook operation.
     * @callback module:api/AccountpaymentApi~paymentRouterHandlePaymentWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handle Payment Related Webhooks
     * @param {module:api/AccountpaymentApi~paymentRouterHandlePaymentWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentRouterHandlePaymentWebhook = function(callback) {
      var postBody = null;


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
        '/account/payment/webhook', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));