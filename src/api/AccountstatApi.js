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
    define(['ApiClient', 'model/ModelsAGIPStat', 'model/ModelsAGSubAccountStat', 'model/ModelsRStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAGIPStat'), require('../model/ModelsAGSubAccountStat'), require('../model/ModelsRStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAGIPStat, root.SendPostApi.ModelsAGSubAccountStat, root.SendPostApi.ModelsRStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsAGIPStat, ModelsAGSubAccountStat, ModelsRStat, ModelsStat) {
  'use strict';

  /**
   * Accountstat service.
   * @module api/AccountstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountstatApi. 
   * @alias module:api/AccountstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountStatRouterGetAllAccountStats operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Account Stats
     * @param {String} xAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStat>}
     */
    this.accountStatRouterGetAllAccountStats = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsRStat];

      return this.apiClient.callApi(
        '/account/stat/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountStatRouterGetAllAccountStatsByGroup operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Account Stats by Group
     * @param {String} xAccountApiKey Sub-Account API Key
     * @param {String} group the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStat>}
     */
    this.accountStatRouterGetAllAccountStatsByGroup = function(xAccountApiKey, group, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling accountStatRouterGetAllAccountStatsByGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'group': group,
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
      var returnType = [ModelsRStat];

      return this.apiClient.callApi(
        '/account/stat/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountStatRouterGetAllAggregateAccountStats operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAggregateAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAggregateAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.accountStatRouterGetAllAggregateAccountStats = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAggregateAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = ModelsStat;

      return this.apiClient.callApi(
        '/account/stat/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountStatRouterGetAllAggregateAccountStatsByGroup operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAggregateAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats by Group
     * @param {String} xAccountApiKey Sub-Account API Key
     * @param {String} group the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAggregateAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.accountStatRouterGetAllAggregateAccountStatsByGroup = function(xAccountApiKey, group, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAggregateAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling accountStatRouterGetAllAggregateAccountStatsByGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'group': group,
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
      var returnType = ModelsStat;

      return this.apiClient.callApi(
        '/account/stat/aggregate/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountStatRouterGetAllAggregateIPStats operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAggregateIPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAGIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {String} from from date
     * @param {String} to to date
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterBy filterBy
     * @param {Number} opts.filterValue filterValue
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {String} opts.search search term
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAggregateIPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAGIPStat>}
     */
    this.accountStatRouterGetAllAggregateIPStats = function(xAccountApiKey, from, to, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAggregateIPStats");
      }

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling accountStatRouterGetAllAggregateIPStats");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling accountStatRouterGetAllAggregateIPStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': from,
        'to': to,
        'filterBy': opts['filterBy'],
        'filterValue': opts['filterValue'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'search': opts['search'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = [ModelsAGIPStat];

      return this.apiClient.callApi(
        '/account/stat/aggregate/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountStatRouterGetAllAggregateSubAccountStats operation.
     * @callback module:api/AccountstatApi~accountStatRouterGetAllAggregateSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAGSubAccountStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {String} from from date
     * @param {String} to to date
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterBy filterBy
     * @param {Number} opts.filterValue filterValue
     * @param {String} opts.orderBy orderBy
     * @param {String} opts.sortOrder sortOrder
     * @param {String} opts.search search term
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {module:api/AccountstatApi~accountStatRouterGetAllAggregateSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAGSubAccountStat>}
     */
    this.accountStatRouterGetAllAggregateSubAccountStats = function(xAccountApiKey, from, to, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountStatRouterGetAllAggregateSubAccountStats");
      }

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling accountStatRouterGetAllAggregateSubAccountStats");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling accountStatRouterGetAllAggregateSubAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': from,
        'to': to,
        'filterBy': opts['filterBy'],
        'filterValue': opts['filterValue'],
        'orderBy': opts['orderBy'],
        'sortOrder': opts['sortOrder'],
        'search': opts['search'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = [ModelsAGSubAccountStat];

      return this.apiClient.callApi(
        '/account/stat/aggregate/subaccount', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
