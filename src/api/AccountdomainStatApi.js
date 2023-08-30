/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ModelsBlacklistResource from '../model/ModelsBlacklistResource';
import ModelsPDStat from '../model/ModelsPDStat';
import ModelsPostmasterDomainStat from '../model/ModelsPostmasterDomainStat';
import ModelsRDStat from '../model/ModelsRDStat';
import ModelsSDStat from '../model/ModelsSDStat';
import ModelsStat from '../model/ModelsStat';

/**
* AccountDomainStat service.
* @module api/AccountDomainStatApi
* @version 1.0.0
*/
export default class AccountDomainStatApi {

    /**
    * Constructs a new AccountDomainStatApi. 
    * @alias module:api/AccountDomainStatApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregateDomainStatsByGroup operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats by Group
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetAllAggregateDomainStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    domainStatRouterGetAllAggregateDomainStatsByGroup(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllAggregateDomainStatsByGroup");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': provider
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsStat;
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/provider', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedProviderStatsForADomain operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedProviderStatsForADomainCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPDStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Domain
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedProviderStatsForADomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPDStat>}
     */
    domainStatRouterGetAllAggregatedProviderStatsForADomain(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedProviderStatsForADomain");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedProviderStatsForADomain");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsPDStat];
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsPDStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Specific Sub-Account of a Domain
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Number} sid the Sub Account Id you want to get
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsPDStat}
     */
    domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain(xAccountApiKey, domainId, sid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }
      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling domainStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfADomain");
      }

      let pathParams = {
        'domainId': domainId,
        'sid': sid
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsPDStat;
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/sid/{sid}/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedSubAccountStatsForAnDomainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSDStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Sub-Account Stats for an Domain
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetAllAggregatedSubAccountStatsForAnDomainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSDStat}
     */
    domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllAggregatedSubAccountStatsForAnDomain");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': provider
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsSDStat;
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate/subaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetAllDomainStats operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetAllDomainStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRDStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Domain Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {String} provider the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetAllDomainStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRDStat>}
     */
    domainStatRouterGetAllDomainStats(xAccountApiKey, domainId, provider, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetAllDomainStats");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetAllDomainStats");
      }
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling domainStatRouterGetAllDomainStats");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'provider': provider
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsRDStat];
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetCurrentDomainBlacklistStats operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetCurrentDomainBlacklistStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBlacklistResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Current Domain Blacklist stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetCurrentDomainBlacklistStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBlacklistResource}
     */
    domainStatRouterGetCurrentDomainBlacklistStats(xAccountApiKey, domainId, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetCurrentDomainBlacklistStats");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetCurrentDomainBlacklistStats");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsBlacklistResource;
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/hetrixtools/stat', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetCurrentDomainPostmasterStats operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetCurrentDomainPostmasterStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPostmasterDomainStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Current Domain Postmaster stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} domainId the domainName you want to get
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetCurrentDomainPostmasterStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPostmasterDomainStat>}
     */
    domainStatRouterGetCurrentDomainPostmasterStats(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetCurrentDomainPostmasterStats");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetCurrentDomainPostmasterStats");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelsPostmasterDomainStat];
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/postmaster/stat', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the domainStatRouterGetStatsForASingleDomainStats operation.
     * @callback module:api/AccountDomainStatApi~domainStatRouterGetStatsForASingleDomainStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {String} domainId the domainID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {Number} [filterValue] filterValue
     * @param {module:api/AccountDomainStatApi~domainStatRouterGetStatsForASingleDomainStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    domainStatRouterGetStatsForASingleDomainStats(xAccountApiKey, domainId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling domainStatRouterGetStatsForASingleDomainStats");
      }
      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw new Error("Missing the required parameter 'domainId' when calling domainStatRouterGetStatsForASingleDomainStats");
      }

      let pathParams = {
        'domainId': domainId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelsStat;
      return this.apiClient.callApi(
        '/account/domain/stat/{domainId}/aggregate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
