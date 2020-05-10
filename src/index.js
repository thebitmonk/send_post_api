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
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Geoip2City', 'model/ModelsAccount', 'model/ModelsDNSRecord', 'model/ModelsDeleteResponse', 'model/ModelsDomain', 'model/ModelsEDomain', 'model/ModelsEIP', 'model/ModelsEIPPool', 'model/ModelsESender', 'model/ModelsEmailErrorCode', 'model/ModelsEmailMessage', 'model/ModelsEmailResponse', 'model/ModelsEventMetadata', 'model/ModelsEventType', 'model/ModelsFrom', 'model/ModelsIP', 'model/ModelsIPPool', 'model/ModelsIPPoolType', 'model/ModelsIPType', 'model/ModelsMember', 'model/ModelsQEmailMessage', 'model/ModelsQEvent', 'model/ModelsRDSuppression', 'model/ModelsRStats', 'model/ModelsRSuppression', 'model/ModelsReplyTo', 'model/ModelsSender', 'model/ModelsStats', 'model/ModelsSubAccount', 'model/ModelsSubAccountType', 'model/ModelsSuppression', 'model/ModelsSuppressionEmail', 'model/ModelsSuppressionReason', 'model/ModelsTo', 'model/ModelsWebhook', 'model/UaparserDevice', 'model/UaparserOs', 'model/UaparserUserAgent', 'api/ClusterApi', 'api/TrackApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Geoip2City'), require('./model/ModelsAccount'), require('./model/ModelsDNSRecord'), require('./model/ModelsDeleteResponse'), require('./model/ModelsDomain'), require('./model/ModelsEDomain'), require('./model/ModelsEIP'), require('./model/ModelsEIPPool'), require('./model/ModelsESender'), require('./model/ModelsEmailErrorCode'), require('./model/ModelsEmailMessage'), require('./model/ModelsEmailResponse'), require('./model/ModelsEventMetadata'), require('./model/ModelsEventType'), require('./model/ModelsFrom'), require('./model/ModelsIP'), require('./model/ModelsIPPool'), require('./model/ModelsIPPoolType'), require('./model/ModelsIPType'), require('./model/ModelsMember'), require('./model/ModelsQEmailMessage'), require('./model/ModelsQEvent'), require('./model/ModelsRDSuppression'), require('./model/ModelsRStats'), require('./model/ModelsRSuppression'), require('./model/ModelsReplyTo'), require('./model/ModelsSender'), require('./model/ModelsStats'), require('./model/ModelsSubAccount'), require('./model/ModelsSubAccountType'), require('./model/ModelsSuppression'), require('./model/ModelsSuppressionEmail'), require('./model/ModelsSuppressionReason'), require('./model/ModelsTo'), require('./model/ModelsWebhook'), require('./model/UaparserDevice'), require('./model/UaparserOs'), require('./model/UaparserUserAgent'), require('./api/ClusterApi'), require('./api/TrackApi'));
  }
}(function(ApiClient, Geoip2City, ModelsAccount, ModelsDNSRecord, ModelsDeleteResponse, ModelsDomain, ModelsEDomain, ModelsEIP, ModelsEIPPool, ModelsESender, ModelsEmailErrorCode, ModelsEmailMessage, ModelsEmailResponse, ModelsEventMetadata, ModelsEventType, ModelsFrom, ModelsIP, ModelsIPPool, ModelsIPPoolType, ModelsIPType, ModelsMember, ModelsQEmailMessage, ModelsQEvent, ModelsRDSuppression, ModelsRStats, ModelsRSuppression, ModelsReplyTo, ModelsSender, ModelsStats, ModelsSubAccount, ModelsSubAccountType, ModelsSuppression, ModelsSuppressionEmail, ModelsSuppressionReason, ModelsTo, ModelsWebhook, UaparserDevice, UaparserOs, UaparserUserAgent, ClusterApi, TrackApi) {
  'use strict';

  /**
   * SendPost_API_to_send_transactional_emails_reliably.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SendPostApi = require('index'); // See note below*.
   * var xxxSvc = new SendPostApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SendPostApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SendPostApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SendPostApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Geoip2City model constructor.
     * @property {module:model/Geoip2City}
     */
    Geoip2City: Geoip2City,
    /**
     * The ModelsAccount model constructor.
     * @property {module:model/ModelsAccount}
     */
    ModelsAccount: ModelsAccount,
    /**
     * The ModelsDNSRecord model constructor.
     * @property {module:model/ModelsDNSRecord}
     */
    ModelsDNSRecord: ModelsDNSRecord,
    /**
     * The ModelsDeleteResponse model constructor.
     * @property {module:model/ModelsDeleteResponse}
     */
    ModelsDeleteResponse: ModelsDeleteResponse,
    /**
     * The ModelsDomain model constructor.
     * @property {module:model/ModelsDomain}
     */
    ModelsDomain: ModelsDomain,
    /**
     * The ModelsEDomain model constructor.
     * @property {module:model/ModelsEDomain}
     */
    ModelsEDomain: ModelsEDomain,
    /**
     * The ModelsEIP model constructor.
     * @property {module:model/ModelsEIP}
     */
    ModelsEIP: ModelsEIP,
    /**
     * The ModelsEIPPool model constructor.
     * @property {module:model/ModelsEIPPool}
     */
    ModelsEIPPool: ModelsEIPPool,
    /**
     * The ModelsESender model constructor.
     * @property {module:model/ModelsESender}
     */
    ModelsESender: ModelsESender,
    /**
     * The ModelsEmailErrorCode model constructor.
     * @property {module:model/ModelsEmailErrorCode}
     */
    ModelsEmailErrorCode: ModelsEmailErrorCode,
    /**
     * The ModelsEmailMessage model constructor.
     * @property {module:model/ModelsEmailMessage}
     */
    ModelsEmailMessage: ModelsEmailMessage,
    /**
     * The ModelsEmailResponse model constructor.
     * @property {module:model/ModelsEmailResponse}
     */
    ModelsEmailResponse: ModelsEmailResponse,
    /**
     * The ModelsEventMetadata model constructor.
     * @property {module:model/ModelsEventMetadata}
     */
    ModelsEventMetadata: ModelsEventMetadata,
    /**
     * The ModelsEventType model constructor.
     * @property {module:model/ModelsEventType}
     */
    ModelsEventType: ModelsEventType,
    /**
     * The ModelsFrom model constructor.
     * @property {module:model/ModelsFrom}
     */
    ModelsFrom: ModelsFrom,
    /**
     * The ModelsIP model constructor.
     * @property {module:model/ModelsIP}
     */
    ModelsIP: ModelsIP,
    /**
     * The ModelsIPPool model constructor.
     * @property {module:model/ModelsIPPool}
     */
    ModelsIPPool: ModelsIPPool,
    /**
     * The ModelsIPPoolType model constructor.
     * @property {module:model/ModelsIPPoolType}
     */
    ModelsIPPoolType: ModelsIPPoolType,
    /**
     * The ModelsIPType model constructor.
     * @property {module:model/ModelsIPType}
     */
    ModelsIPType: ModelsIPType,
    /**
     * The ModelsMember model constructor.
     * @property {module:model/ModelsMember}
     */
    ModelsMember: ModelsMember,
    /**
     * The ModelsQEmailMessage model constructor.
     * @property {module:model/ModelsQEmailMessage}
     */
    ModelsQEmailMessage: ModelsQEmailMessage,
    /**
     * The ModelsQEvent model constructor.
     * @property {module:model/ModelsQEvent}
     */
    ModelsQEvent: ModelsQEvent,
    /**
     * The ModelsRDSuppression model constructor.
     * @property {module:model/ModelsRDSuppression}
     */
    ModelsRDSuppression: ModelsRDSuppression,
    /**
     * The ModelsRStats model constructor.
     * @property {module:model/ModelsRStats}
     */
    ModelsRStats: ModelsRStats,
    /**
     * The ModelsRSuppression model constructor.
     * @property {module:model/ModelsRSuppression}
     */
    ModelsRSuppression: ModelsRSuppression,
    /**
     * The ModelsReplyTo model constructor.
     * @property {module:model/ModelsReplyTo}
     */
    ModelsReplyTo: ModelsReplyTo,
    /**
     * The ModelsSender model constructor.
     * @property {module:model/ModelsSender}
     */
    ModelsSender: ModelsSender,
    /**
     * The ModelsStats model constructor.
     * @property {module:model/ModelsStats}
     */
    ModelsStats: ModelsStats,
    /**
     * The ModelsSubAccount model constructor.
     * @property {module:model/ModelsSubAccount}
     */
    ModelsSubAccount: ModelsSubAccount,
    /**
     * The ModelsSubAccountType model constructor.
     * @property {module:model/ModelsSubAccountType}
     */
    ModelsSubAccountType: ModelsSubAccountType,
    /**
     * The ModelsSuppression model constructor.
     * @property {module:model/ModelsSuppression}
     */
    ModelsSuppression: ModelsSuppression,
    /**
     * The ModelsSuppressionEmail model constructor.
     * @property {module:model/ModelsSuppressionEmail}
     */
    ModelsSuppressionEmail: ModelsSuppressionEmail,
    /**
     * The ModelsSuppressionReason model constructor.
     * @property {module:model/ModelsSuppressionReason}
     */
    ModelsSuppressionReason: ModelsSuppressionReason,
    /**
     * The ModelsTo model constructor.
     * @property {module:model/ModelsTo}
     */
    ModelsTo: ModelsTo,
    /**
     * The ModelsWebhook model constructor.
     * @property {module:model/ModelsWebhook}
     */
    ModelsWebhook: ModelsWebhook,
    /**
     * The UaparserDevice model constructor.
     * @property {module:model/UaparserDevice}
     */
    UaparserDevice: UaparserDevice,
    /**
     * The UaparserOs model constructor.
     * @property {module:model/UaparserOs}
     */
    UaparserOs: UaparserOs,
    /**
     * The UaparserUserAgent model constructor.
     * @property {module:model/UaparserUserAgent}
     */
    UaparserUserAgent: UaparserUserAgent,
    /**
     * The ClusterApi service constructor.
     * @property {module:api/ClusterApi}
     */
    ClusterApi: ClusterApi,
    /**
     * The TrackApi service constructor.
     * @property {module:api/TrackApi}
     */
    TrackApi: TrackApi
  };

  return exports;
}));
