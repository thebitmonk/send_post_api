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
import ModelsCountStat from '../model/ModelsCountStat';
import ModelsDeleteResponse from '../model/ModelsDeleteResponse';
import ModelsEIntegration from '../model/ModelsEIntegration';
import ModelsIntegration from '../model/ModelsIntegration';
import ModelsRHetrixtoolsMonitorStat from '../model/ModelsRHetrixtoolsMonitorStat';
import ModelsResponse from '../model/ModelsResponse';

/**
* AccountIntegration service.
* @module api/AccountIntegrationApi
* @version 1.0.0
*/
export default class AccountIntegrationApi {

    /**
    * Constructs a new AccountIntegrationApi. 
    * @alias module:api/AccountIntegrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountIntegrationRouterCount operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total AccountIntegrations
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    accountIntegrationRouterCount(xAccountApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterCount");
      }

      let pathParams = {
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
      let returnType = ModelsCountStat;
      return this.apiClient.callApi(
        '/account/integration/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterCreate operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIntegration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Integration
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to create
     * @param {module:model/ModelsEIntegration} body The Integration content
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIntegration}
     */
    accountIntegrationRouterCreate(xAccountApiKey, itype, body, callback) {
      let postBody = body;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterCreate");
      }
      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterCreate");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIntegrationRouterCreate");
      }

      let pathParams = {
        'itype': itype
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelsIntegration;
      return this.apiClient.callApi(
        '/account/integration/{itype}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterDelete operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Integration
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to update
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    accountIntegrationRouterDelete(xAccountApiKey, itype, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterDelete");
      }
      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterDelete");
      }

      let pathParams = {
        'itype': itype
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
      let returnType = ModelsDeleteResponse;
      return this.apiClient.callApi(
        '/account/integration/{itype}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterDisableHetrixToolsIPMonitoring operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterDisableHetrixToolsIPMonitoringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable IP Monitoring for a single IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to disable monitoring for
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterDisableHetrixToolsIPMonitoringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    accountIntegrationRouterDisableHetrixToolsIPMonitoring(xAccountApiKey, ipid, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterDisableHetrixToolsIPMonitoring");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterDisableHetrixToolsIPMonitoring");
      }

      let pathParams = {
        'ipid': ipid
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
      let returnType = ModelsDeleteResponse;
      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/{ipid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterEnableHetrixToolsIPMonitoring operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterEnableHetrixToolsIPMonitoringCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable IP Monitoring for a single IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to enable monitoring for
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterEnableHetrixToolsIPMonitoringCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsResponse}
     */
    accountIntegrationRouterEnableHetrixToolsIPMonitoring(xAccountApiKey, ipid, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterEnableHetrixToolsIPMonitoring");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterEnableHetrixToolsIPMonitoring");
      }

      let pathParams = {
        'ipid': ipid
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
      let returnType = ModelsResponse;
      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/{ipid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterGetAll operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsIntegration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Integrations
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsIntegration>}
     */
    accountIntegrationRouterGetAll(xAccountApiKey, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterGetAll");
      }

      let pathParams = {
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
      let returnType = [ModelsIntegration];
      return this.apiClient.callApi(
        '/account/integration/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterGetMonitoredIPStats operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterGetMonitoredIPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRHetrixtoolsMonitorStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Monitored IP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId for which you want monitored stats
     * @param {Object} opts Optional parameters
     * @param {String} [from] from date
     * @param {String} [to] to date
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterGetMonitoredIPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRHetrixtoolsMonitorStat>}
     */
    accountIntegrationRouterGetMonitoredIPStats(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterGetMonitoredIPStats");
      }
      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling accountIntegrationRouterGetMonitoredIPStats");
      }

      let pathParams = {
        'ipid': ipid
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
      let returnType = [ModelsRHetrixtoolsMonitorStat];
      return this.apiClient.callApi(
        '/account/integration/hetrixtools/monitor/stat/{ipid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountIntegrationRouterUpdate operation.
     * @callback module:api/AccountIntegrationApi~accountIntegrationRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsIntegration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Integration
     * @param {String} xAccountApiKey Account API Key
     * @param {String} itype The integration type you want to update
     * @param {module:model/ModelsEIntegration} body The Integration content
     * @param {module:api/AccountIntegrationApi~accountIntegrationRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsIntegration}
     */
    accountIntegrationRouterUpdate(xAccountApiKey, itype, body, callback) {
      let postBody = body;
      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountIntegrationRouterUpdate");
      }
      // verify the required parameter 'itype' is set
      if (itype === undefined || itype === null) {
        throw new Error("Missing the required parameter 'itype' when calling accountIntegrationRouterUpdate");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountIntegrationRouterUpdate");
      }

      let pathParams = {
        'itype': itype
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelsIntegration;
      return this.apiClient.callApi(
        '/account/integration/{itype}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
