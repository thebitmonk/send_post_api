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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ModelsSMTPStat} from '../model/ModelsSMTPStat';

/**
* Accountsmtpstat service.
* @module api/AccountsmtpstatApi
* @version 1.0.0
*/
export class AccountsmtpstatApi {

    /**
    * Constructs a new AccountsmtpstatApi. 
    * @alias module:api/AccountsmtpstatApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPProviderSMTPStats operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPProviderSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP Provider SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IP ID you want to get
     * @param {String} provider the provider name
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPProviderSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, provider, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }

      let pathParams = {
        'ipid': ipid,'provider': provider
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/provider/{provider}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPSMTPStats operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPSMTPStats");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPSMTPStats");
      }

      let pathParams = {
        'ipid': ipid
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'provider': opts['provider']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP SMTP Stats For SubAccount
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IP ID you want to get
     * @param {Number} sid the SubAccount ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }

      let pathParams = {
        'ipid': ipid,'sid': sid
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'provider': opts['provider']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount Provider SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the SubAccount ID you want to get
     * @param {String} provider the provider name
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, provider, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }

      let pathParams = {
        'sid': sid,'provider': provider
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/provider/{provider}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountSMTPStats operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the Sub-Account ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStats");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStats");
      }

      let pathParams = {
        'sid': sid
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'provider': opts['provider']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP operation.
     * @callback moduleapi/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount SMTP Stats For IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the Sub-Account ID you want to get
     * @param {Number} ipid the IP  ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.provider the provider whose stats you want
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }

      let pathParams = {
        'sid': sid,'ipid': ipid
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'provider': opts['provider']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}