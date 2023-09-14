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
    define(['ApiClient', 'model/ModelExport', 'model/ModelsCountStat', 'model/ModelsQEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelExport'), require('../model/ModelsCountStat'), require('../model/ModelsQEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccounteventApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelExport, root.SendPostApi.ModelsCountStat, root.SendPostApi.ModelsQEvent);
  }
}(this, function(ApiClient, ModelExport, ModelsCountStat, ModelsQEvent) {
  'use strict';

  /**
   * Accountevent service.
   * @module api/AccounteventApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccounteventApi. 
   * @alias module:api/AccounteventApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the eventRouterCountAllEventsFromAAccountForAGivenTimeRange operation.
     * @callback module:api/AccounteventApi~eventRouterCountAllEventsFromAAccountForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count all events from a account for a given time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {String} opts.type search type
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterCountAllEventsFromAAccountForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.eventRouterCountAllEventsFromAAccountForAGivenTimeRange = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterCountAllEventsFromAAccountForAGivenTimeRange");
      }


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'type': opts['type'],
        'from': opts['from'],
        'to': opts['to'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/event/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange operation.
     * @callback module:api/AccounteventApi~eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count all events from a node of a sub-account for a given time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {String} opts.type search type
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange");
      }


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'type': opts['type'],
        'from': opts['from'],
        'to': opts['to'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/event/node/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterExportAllEventsFromAAccountForAGivenTimeRange operation.
     * @callback module:api/AccounteventApi~eventRouterExportAllEventsFromAAccountForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelExport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export all events from a account for a given time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterExportAllEventsFromAAccountForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelExport}
     */
    this.eventRouterExportAllEventsFromAAccountForAGivenTimeRange = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterExportAllEventsFromAAccountForAGivenTimeRange");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'from': opts['from'],
        'to': opts['to'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = ModelExport;

      return this.apiClient.callApi(
        '/account/event/export', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGet operation.
     * @callback module:api/AccounteventApi~eventRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Event By Id <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} eventId the eventId that you want to retrieve
     * @param {module:api/AccounteventApi~eventRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEvent}
     */
    this.eventRouterGet = function(xAccountApiKey, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGet");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling eventRouterGet");
      }


      var pathParams = {
        'eventId': eventId
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
      var returnType = ModelsQEvent;

      return this.apiClient.callApi(
        '/account/event/{eventId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange operation.
     * @callback module:api/AccounteventApi~eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events of a sub-account from a specific node for a give time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.search search term
     * @param {String} opts.type search type
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGetAllEventTimestampKeysOfASubAccountFromASpecificNodeForAGivenTimeRange");
      }


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'type': opts['type'],
        'from': opts['from'],
        'to': opts['to'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/account/event/node/timestampkeys', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventsFromAAccountForAGivenTimeRange operation.
     * @callback module:api/AccounteventApi~eventRouterGetAllEventsFromAAccountForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events from a account for a given time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search term
     * @param {String} opts.type search type
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterGetAllEventsFromAAccountForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventsFromAAccountForAGivenTimeRange = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGetAllEventsFromAAccountForAGivenTimeRange");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
        'type': opts['type'],
        'from': opts['from'],
        'to': opts['to'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/account/event/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed operation.
     * @callback module:api/AccounteventApi~eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events from a account for a given time-range <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.type search type
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {String} opts.filterEvent filter event types
     * @param {String} opts.source data source from which to get timestamp keys subaccount or ip
     * @param {String} opts.sourceId source id from which to get timestamp keys subaccount or ip
     * @param {module:api/AccounteventApi~eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGetAllEventsFromAnAccountWhichHasOnlyProccessed");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'type': opts['type'],
        'from': opts['from'],
        'to': opts['to'],
        'filterEvent': opts['filterEvent'],
        'source': opts['source'],
        'sourceId': opts['sourceId'],
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/account/event/node/eventType', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventsOfAAccountFromASpecificNode operation.
     * @callback module:api/AccounteventApi~eventRouterGetAllEventsOfAAccountFromASpecificNodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events of a account from a specific node <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccounteventApi~eventRouterGetAllEventsOfAAccountFromASpecificNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventsOfAAccountFromASpecificNode = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGetAllEventsOfAAccountFromASpecificNode");
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/account/event/node', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetEventInNode operation.
     * @callback module:api/AccounteventApi~eventRouterGetEventInNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Event From Node by id <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {String} eventId the eventId that you want to retrieve
     * @param {module:api/AccounteventApi~eventRouterGetEventInNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEvent}
     */
    this.eventRouterGetEventInNode = function(xAccountApiKey, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling eventRouterGetEventInNode");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling eventRouterGetEventInNode");
      }


      var pathParams = {
        'eventId': eventId
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
      var returnType = ModelsQEvent;

      return this.apiClient.callApi(
        '/account/event/node/{eventId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
