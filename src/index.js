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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Alert', 'model/ModelsAGStat', 'model/ModelsAIPStat', 'model/ModelsAccount', 'model/ModelsAccountIPPool', 'model/ModelsAccountWebhook', 'model/ModelsAlertLabel', 'model/ModelsAlertRequest', 'model/ModelsAlertResponse', 'model/ModelsAuthInfo', 'model/ModelsBackOffConfiguration', 'model/ModelsBackOffDecreaseType', 'model/ModelsBackOffTrigger', 'model/ModelsBillingPortalSession', 'model/ModelsBlacklistStatus', 'model/ModelsBulkResponse', 'model/ModelsCity', 'model/ModelsCleanedList', 'model/ModelsCountStat', 'model/ModelsCustomerQuality', 'model/ModelsDNSRecord', 'model/ModelsDeleteResponse', 'model/ModelsDetailedAlert', 'model/ModelsDomain', 'model/ModelsEAccount', 'model/ModelsEAccountMember', 'model/ModelsEDomain', 'model/ModelsEIP', 'model/ModelsEIPPool', 'model/ModelsEIntegration', 'model/ModelsEInvitation', 'model/ModelsESender', 'model/ModelsESubAccount', 'model/ModelsEValidation', 'model/ModelsEWebhook', 'model/ModelsEditorTokenResponse', 'model/ModelsEmailErrorCode', 'model/ModelsEmailList', 'model/ModelsEmailMessage', 'model/ModelsEmailResponse', 'model/ModelsEventMetadata', 'model/ModelsEventType', 'model/ModelsFrequencyType', 'model/ModelsFrom', 'model/ModelsGlockappsBlacklist', 'model/ModelsGlockappsMonitorStat', 'model/ModelsIIP', 'model/ModelsIP', 'model/ModelsIPPool', 'model/ModelsIPPoolType', 'model/ModelsIPStat', 'model/ModelsIPType', 'model/ModelsInstance', 'model/ModelsIntegration', 'model/ModelsIntegrationSettings', 'model/ModelsIntegrationType', 'model/ModelsInvitation', 'model/ModelsInvitationStatus', 'model/ModelsLabel', 'model/ModelsMember', 'model/ModelsMemberRole', 'model/ModelsNotificationType', 'model/ModelsOnboardingChecklist', 'model/ModelsPIPStat', 'model/ModelsPaymentOptions', 'model/ModelsQEmailMessage', 'model/ModelsQEvent', 'model/ModelsRDSuppression', 'model/ModelsRGlockappsMonitorStat', 'model/ModelsRIPStat', 'model/ModelsRStat', 'model/ModelsRSuppression', 'model/ModelsReplyTo', 'model/ModelsResponse', 'model/ModelsSIPStat', 'model/ModelsSMTPAuth', 'model/ModelsSMTPStat', 'model/ModelsSender', 'model/ModelsSingleCleanedMail', 'model/ModelsStat', 'model/ModelsSubAccount', 'model/ModelsSubAccountType', 'model/ModelsSuppression', 'model/ModelsSuppressionEmail', 'model/ModelsSuppressionReason', 'model/ModelsSystemDNSRecord', 'model/ModelsSystemDomain', 'model/ModelsSystemIPPool', 'model/ModelsTemplate', 'model/ModelsTo', 'model/ModelsValidation', 'model/ModelsValidationReason', 'model/ModelsVerifyByTokenRequest', 'model/ModelsWMessage', 'model/UaparserDevice', 'model/UaparserOs', 'model/UaparserUserAgent', 'api/AccountalertApi', 'api/AccounteventApi', 'api/AccountintegrationApi', 'api/AccountinvitationApi', 'api/AccountipApi', 'api/AccountippoolApi', 'api/AccountipstatApi', 'api/AccountlabelApi', 'api/AccountmemberApi', 'api/AccountmessageApi', 'api/AccountonboardingApi', 'api/AccountpaymentApi', 'api/AccountrecipientApi', 'api/AccountsmtpstatApi', 'api/AccountstatApi', 'api/AccountsubaccountApi', 'api/AccounttemplateApi', 'api/AccountvalidationApi', 'api/AccountwebhookApi', 'api/AuthApi', 'api/ClusterApi', 'api/EditorApi', 'api/SmtpApi', 'api/SubaccountdomainApi', 'api/SubaccountemailApi', 'api/SubaccountippoolApi', 'api/SubaccountsenderApi', 'api/SubaccountstatApi', 'api/SubaccountsuppressionApi', 'api/TrackApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Alert'), require('./model/ModelsAGStat'), require('./model/ModelsAIPStat'), require('./model/ModelsAccount'), require('./model/ModelsAccountIPPool'), require('./model/ModelsAccountWebhook'), require('./model/ModelsAlertLabel'), require('./model/ModelsAlertRequest'), require('./model/ModelsAlertResponse'), require('./model/ModelsAuthInfo'), require('./model/ModelsBackOffConfiguration'), require('./model/ModelsBackOffDecreaseType'), require('./model/ModelsBackOffTrigger'), require('./model/ModelsBillingPortalSession'), require('./model/ModelsBlacklistStatus'), require('./model/ModelsBulkResponse'), require('./model/ModelsCity'), require('./model/ModelsCleanedList'), require('./model/ModelsCountStat'), require('./model/ModelsCustomerQuality'), require('./model/ModelsDNSRecord'), require('./model/ModelsDeleteResponse'), require('./model/ModelsDetailedAlert'), require('./model/ModelsDomain'), require('./model/ModelsEAccount'), require('./model/ModelsEAccountMember'), require('./model/ModelsEDomain'), require('./model/ModelsEIP'), require('./model/ModelsEIPPool'), require('./model/ModelsEIntegration'), require('./model/ModelsEInvitation'), require('./model/ModelsESender'), require('./model/ModelsESubAccount'), require('./model/ModelsEValidation'), require('./model/ModelsEWebhook'), require('./model/ModelsEditorTokenResponse'), require('./model/ModelsEmailErrorCode'), require('./model/ModelsEmailList'), require('./model/ModelsEmailMessage'), require('./model/ModelsEmailResponse'), require('./model/ModelsEventMetadata'), require('./model/ModelsEventType'), require('./model/ModelsFrequencyType'), require('./model/ModelsFrom'), require('./model/ModelsGlockappsBlacklist'), require('./model/ModelsGlockappsMonitorStat'), require('./model/ModelsIIP'), require('./model/ModelsIP'), require('./model/ModelsIPPool'), require('./model/ModelsIPPoolType'), require('./model/ModelsIPStat'), require('./model/ModelsIPType'), require('./model/ModelsInstance'), require('./model/ModelsIntegration'), require('./model/ModelsIntegrationSettings'), require('./model/ModelsIntegrationType'), require('./model/ModelsInvitation'), require('./model/ModelsInvitationStatus'), require('./model/ModelsLabel'), require('./model/ModelsMember'), require('./model/ModelsMemberRole'), require('./model/ModelsNotificationType'), require('./model/ModelsOnboardingChecklist'), require('./model/ModelsPIPStat'), require('./model/ModelsPaymentOptions'), require('./model/ModelsQEmailMessage'), require('./model/ModelsQEvent'), require('./model/ModelsRDSuppression'), require('./model/ModelsRGlockappsMonitorStat'), require('./model/ModelsRIPStat'), require('./model/ModelsRStat'), require('./model/ModelsRSuppression'), require('./model/ModelsReplyTo'), require('./model/ModelsResponse'), require('./model/ModelsSIPStat'), require('./model/ModelsSMTPAuth'), require('./model/ModelsSMTPStat'), require('./model/ModelsSender'), require('./model/ModelsSingleCleanedMail'), require('./model/ModelsStat'), require('./model/ModelsSubAccount'), require('./model/ModelsSubAccountType'), require('./model/ModelsSuppression'), require('./model/ModelsSuppressionEmail'), require('./model/ModelsSuppressionReason'), require('./model/ModelsSystemDNSRecord'), require('./model/ModelsSystemDomain'), require('./model/ModelsSystemIPPool'), require('./model/ModelsTemplate'), require('./model/ModelsTo'), require('./model/ModelsValidation'), require('./model/ModelsValidationReason'), require('./model/ModelsVerifyByTokenRequest'), require('./model/ModelsWMessage'), require('./model/UaparserDevice'), require('./model/UaparserOs'), require('./model/UaparserUserAgent'), require('./api/AccountalertApi'), require('./api/AccounteventApi'), require('./api/AccountintegrationApi'), require('./api/AccountinvitationApi'), require('./api/AccountipApi'), require('./api/AccountippoolApi'), require('./api/AccountipstatApi'), require('./api/AccountlabelApi'), require('./api/AccountmemberApi'), require('./api/AccountmessageApi'), require('./api/AccountonboardingApi'), require('./api/AccountpaymentApi'), require('./api/AccountrecipientApi'), require('./api/AccountsmtpstatApi'), require('./api/AccountstatApi'), require('./api/AccountsubaccountApi'), require('./api/AccounttemplateApi'), require('./api/AccountvalidationApi'), require('./api/AccountwebhookApi'), require('./api/AuthApi'), require('./api/ClusterApi'), require('./api/EditorApi'), require('./api/SmtpApi'), require('./api/SubaccountdomainApi'), require('./api/SubaccountemailApi'), require('./api/SubaccountippoolApi'), require('./api/SubaccountsenderApi'), require('./api/SubaccountstatApi'), require('./api/SubaccountsuppressionApi'), require('./api/TrackApi'));
  }
}(function(ApiClient, Alert, ModelsAGStat, ModelsAIPStat, ModelsAccount, ModelsAccountIPPool, ModelsAccountWebhook, ModelsAlertLabel, ModelsAlertRequest, ModelsAlertResponse, ModelsAuthInfo, ModelsBackOffConfiguration, ModelsBackOffDecreaseType, ModelsBackOffTrigger, ModelsBillingPortalSession, ModelsBlacklistStatus, ModelsBulkResponse, ModelsCity, ModelsCleanedList, ModelsCountStat, ModelsCustomerQuality, ModelsDNSRecord, ModelsDeleteResponse, ModelsDetailedAlert, ModelsDomain, ModelsEAccount, ModelsEAccountMember, ModelsEDomain, ModelsEIP, ModelsEIPPool, ModelsEIntegration, ModelsEInvitation, ModelsESender, ModelsESubAccount, ModelsEValidation, ModelsEWebhook, ModelsEditorTokenResponse, ModelsEmailErrorCode, ModelsEmailList, ModelsEmailMessage, ModelsEmailResponse, ModelsEventMetadata, ModelsEventType, ModelsFrequencyType, ModelsFrom, ModelsGlockappsBlacklist, ModelsGlockappsMonitorStat, ModelsIIP, ModelsIP, ModelsIPPool, ModelsIPPoolType, ModelsIPStat, ModelsIPType, ModelsInstance, ModelsIntegration, ModelsIntegrationSettings, ModelsIntegrationType, ModelsInvitation, ModelsInvitationStatus, ModelsLabel, ModelsMember, ModelsMemberRole, ModelsNotificationType, ModelsOnboardingChecklist, ModelsPIPStat, ModelsPaymentOptions, ModelsQEmailMessage, ModelsQEvent, ModelsRDSuppression, ModelsRGlockappsMonitorStat, ModelsRIPStat, ModelsRStat, ModelsRSuppression, ModelsReplyTo, ModelsResponse, ModelsSIPStat, ModelsSMTPAuth, ModelsSMTPStat, ModelsSender, ModelsSingleCleanedMail, ModelsStat, ModelsSubAccount, ModelsSubAccountType, ModelsSuppression, ModelsSuppressionEmail, ModelsSuppressionReason, ModelsSystemDNSRecord, ModelsSystemDomain, ModelsSystemIPPool, ModelsTemplate, ModelsTo, ModelsValidation, ModelsValidationReason, ModelsVerifyByTokenRequest, ModelsWMessage, UaparserDevice, UaparserOs, UaparserUserAgent, AccountalertApi, AccounteventApi, AccountintegrationApi, AccountinvitationApi, AccountipApi, AccountippoolApi, AccountipstatApi, AccountlabelApi, AccountmemberApi, AccountmessageApi, AccountonboardingApi, AccountpaymentApi, AccountrecipientApi, AccountsmtpstatApi, AccountstatApi, AccountsubaccountApi, AccounttemplateApi, AccountvalidationApi, AccountwebhookApi, AuthApi, ClusterApi, EditorApi, SmtpApi, SubaccountdomainApi, SubaccountemailApi, SubaccountippoolApi, SubaccountsenderApi, SubaccountstatApi, SubaccountsuppressionApi, TrackApi) {
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
     * The Alert model constructor.
     * @property {module:model/Alert}
     */
    Alert: Alert,
    /**
     * The ModelsAGStat model constructor.
     * @property {module:model/ModelsAGStat}
     */
    ModelsAGStat: ModelsAGStat,
    /**
     * The ModelsAIPStat model constructor.
     * @property {module:model/ModelsAIPStat}
     */
    ModelsAIPStat: ModelsAIPStat,
    /**
     * The ModelsAccount model constructor.
     * @property {module:model/ModelsAccount}
     */
    ModelsAccount: ModelsAccount,
    /**
     * The ModelsAccountIPPool model constructor.
     * @property {module:model/ModelsAccountIPPool}
     */
    ModelsAccountIPPool: ModelsAccountIPPool,
    /**
     * The ModelsAccountWebhook model constructor.
     * @property {module:model/ModelsAccountWebhook}
     */
    ModelsAccountWebhook: ModelsAccountWebhook,
    /**
     * The ModelsAlertLabel model constructor.
     * @property {module:model/ModelsAlertLabel}
     */
    ModelsAlertLabel: ModelsAlertLabel,
    /**
     * The ModelsAlertRequest model constructor.
     * @property {module:model/ModelsAlertRequest}
     */
    ModelsAlertRequest: ModelsAlertRequest,
    /**
     * The ModelsAlertResponse model constructor.
     * @property {module:model/ModelsAlertResponse}
     */
    ModelsAlertResponse: ModelsAlertResponse,
    /**
     * The ModelsAuthInfo model constructor.
     * @property {module:model/ModelsAuthInfo}
     */
    ModelsAuthInfo: ModelsAuthInfo,
    /**
     * The ModelsBackOffConfiguration model constructor.
     * @property {module:model/ModelsBackOffConfiguration}
     */
    ModelsBackOffConfiguration: ModelsBackOffConfiguration,
    /**
     * The ModelsBackOffDecreaseType model constructor.
     * @property {module:model/ModelsBackOffDecreaseType}
     */
    ModelsBackOffDecreaseType: ModelsBackOffDecreaseType,
    /**
     * The ModelsBackOffTrigger model constructor.
     * @property {module:model/ModelsBackOffTrigger}
     */
    ModelsBackOffTrigger: ModelsBackOffTrigger,
    /**
     * The ModelsBillingPortalSession model constructor.
     * @property {module:model/ModelsBillingPortalSession}
     */
    ModelsBillingPortalSession: ModelsBillingPortalSession,
    /**
     * The ModelsBlacklistStatus model constructor.
     * @property {module:model/ModelsBlacklistStatus}
     */
    ModelsBlacklistStatus: ModelsBlacklistStatus,
    /**
     * The ModelsBulkResponse model constructor.
     * @property {module:model/ModelsBulkResponse}
     */
    ModelsBulkResponse: ModelsBulkResponse,
    /**
     * The ModelsCity model constructor.
     * @property {module:model/ModelsCity}
     */
    ModelsCity: ModelsCity,
    /**
     * The ModelsCleanedList model constructor.
     * @property {module:model/ModelsCleanedList}
     */
    ModelsCleanedList: ModelsCleanedList,
    /**
     * The ModelsCountStat model constructor.
     * @property {module:model/ModelsCountStat}
     */
    ModelsCountStat: ModelsCountStat,
    /**
     * The ModelsCustomerQuality model constructor.
     * @property {module:model/ModelsCustomerQuality}
     */
    ModelsCustomerQuality: ModelsCustomerQuality,
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
     * The ModelsDetailedAlert model constructor.
     * @property {module:model/ModelsDetailedAlert}
     */
    ModelsDetailedAlert: ModelsDetailedAlert,
    /**
     * The ModelsDomain model constructor.
     * @property {module:model/ModelsDomain}
     */
    ModelsDomain: ModelsDomain,
    /**
     * The ModelsEAccount model constructor.
     * @property {module:model/ModelsEAccount}
     */
    ModelsEAccount: ModelsEAccount,
    /**
     * The ModelsEAccountMember model constructor.
     * @property {module:model/ModelsEAccountMember}
     */
    ModelsEAccountMember: ModelsEAccountMember,
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
     * The ModelsEIntegration model constructor.
     * @property {module:model/ModelsEIntegration}
     */
    ModelsEIntegration: ModelsEIntegration,
    /**
     * The ModelsEInvitation model constructor.
     * @property {module:model/ModelsEInvitation}
     */
    ModelsEInvitation: ModelsEInvitation,
    /**
     * The ModelsESender model constructor.
     * @property {module:model/ModelsESender}
     */
    ModelsESender: ModelsESender,
    /**
     * The ModelsESubAccount model constructor.
     * @property {module:model/ModelsESubAccount}
     */
    ModelsESubAccount: ModelsESubAccount,
    /**
     * The ModelsEValidation model constructor.
     * @property {module:model/ModelsEValidation}
     */
    ModelsEValidation: ModelsEValidation,
    /**
     * The ModelsEWebhook model constructor.
     * @property {module:model/ModelsEWebhook}
     */
    ModelsEWebhook: ModelsEWebhook,
    /**
     * The ModelsEditorTokenResponse model constructor.
     * @property {module:model/ModelsEditorTokenResponse}
     */
    ModelsEditorTokenResponse: ModelsEditorTokenResponse,
    /**
     * The ModelsEmailErrorCode model constructor.
     * @property {module:model/ModelsEmailErrorCode}
     */
    ModelsEmailErrorCode: ModelsEmailErrorCode,
    /**
     * The ModelsEmailList model constructor.
     * @property {module:model/ModelsEmailList}
     */
    ModelsEmailList: ModelsEmailList,
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
     * The ModelsFrequencyType model constructor.
     * @property {module:model/ModelsFrequencyType}
     */
    ModelsFrequencyType: ModelsFrequencyType,
    /**
     * The ModelsFrom model constructor.
     * @property {module:model/ModelsFrom}
     */
    ModelsFrom: ModelsFrom,
    /**
     * The ModelsGlockappsBlacklist model constructor.
     * @property {module:model/ModelsGlockappsBlacklist}
     */
    ModelsGlockappsBlacklist: ModelsGlockappsBlacklist,
    /**
     * The ModelsGlockappsMonitorStat model constructor.
     * @property {module:model/ModelsGlockappsMonitorStat}
     */
    ModelsGlockappsMonitorStat: ModelsGlockappsMonitorStat,
    /**
     * The ModelsIIP model constructor.
     * @property {module:model/ModelsIIP}
     */
    ModelsIIP: ModelsIIP,
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
     * The ModelsIPStat model constructor.
     * @property {module:model/ModelsIPStat}
     */
    ModelsIPStat: ModelsIPStat,
    /**
     * The ModelsIPType model constructor.
     * @property {module:model/ModelsIPType}
     */
    ModelsIPType: ModelsIPType,
    /**
     * The ModelsInstance model constructor.
     * @property {module:model/ModelsInstance}
     */
    ModelsInstance: ModelsInstance,
    /**
     * The ModelsIntegration model constructor.
     * @property {module:model/ModelsIntegration}
     */
    ModelsIntegration: ModelsIntegration,
    /**
     * The ModelsIntegrationSettings model constructor.
     * @property {module:model/ModelsIntegrationSettings}
     */
    ModelsIntegrationSettings: ModelsIntegrationSettings,
    /**
     * The ModelsIntegrationType model constructor.
     * @property {module:model/ModelsIntegrationType}
     */
    ModelsIntegrationType: ModelsIntegrationType,
    /**
     * The ModelsInvitation model constructor.
     * @property {module:model/ModelsInvitation}
     */
    ModelsInvitation: ModelsInvitation,
    /**
     * The ModelsInvitationStatus model constructor.
     * @property {module:model/ModelsInvitationStatus}
     */
    ModelsInvitationStatus: ModelsInvitationStatus,
    /**
     * The ModelsLabel model constructor.
     * @property {module:model/ModelsLabel}
     */
    ModelsLabel: ModelsLabel,
    /**
     * The ModelsMember model constructor.
     * @property {module:model/ModelsMember}
     */
    ModelsMember: ModelsMember,
    /**
     * The ModelsMemberRole model constructor.
     * @property {module:model/ModelsMemberRole}
     */
    ModelsMemberRole: ModelsMemberRole,
    /**
     * The ModelsNotificationType model constructor.
     * @property {module:model/ModelsNotificationType}
     */
    ModelsNotificationType: ModelsNotificationType,
    /**
     * The ModelsOnboardingChecklist model constructor.
     * @property {module:model/ModelsOnboardingChecklist}
     */
    ModelsOnboardingChecklist: ModelsOnboardingChecklist,
    /**
     * The ModelsPIPStat model constructor.
     * @property {module:model/ModelsPIPStat}
     */
    ModelsPIPStat: ModelsPIPStat,
    /**
     * The ModelsPaymentOptions model constructor.
     * @property {module:model/ModelsPaymentOptions}
     */
    ModelsPaymentOptions: ModelsPaymentOptions,
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
     * The ModelsRGlockappsMonitorStat model constructor.
     * @property {module:model/ModelsRGlockappsMonitorStat}
     */
    ModelsRGlockappsMonitorStat: ModelsRGlockappsMonitorStat,
    /**
     * The ModelsRIPStat model constructor.
     * @property {module:model/ModelsRIPStat}
     */
    ModelsRIPStat: ModelsRIPStat,
    /**
     * The ModelsRStat model constructor.
     * @property {module:model/ModelsRStat}
     */
    ModelsRStat: ModelsRStat,
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
     * The ModelsResponse model constructor.
     * @property {module:model/ModelsResponse}
     */
    ModelsResponse: ModelsResponse,
    /**
     * The ModelsSIPStat model constructor.
     * @property {module:model/ModelsSIPStat}
     */
    ModelsSIPStat: ModelsSIPStat,
    /**
     * The ModelsSMTPAuth model constructor.
     * @property {module:model/ModelsSMTPAuth}
     */
    ModelsSMTPAuth: ModelsSMTPAuth,
    /**
     * The ModelsSMTPStat model constructor.
     * @property {module:model/ModelsSMTPStat}
     */
    ModelsSMTPStat: ModelsSMTPStat,
    /**
     * The ModelsSender model constructor.
     * @property {module:model/ModelsSender}
     */
    ModelsSender: ModelsSender,
    /**
     * The ModelsSingleCleanedMail model constructor.
     * @property {module:model/ModelsSingleCleanedMail}
     */
    ModelsSingleCleanedMail: ModelsSingleCleanedMail,
    /**
     * The ModelsStat model constructor.
     * @property {module:model/ModelsStat}
     */
    ModelsStat: ModelsStat,
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
     * The ModelsSystemDNSRecord model constructor.
     * @property {module:model/ModelsSystemDNSRecord}
     */
    ModelsSystemDNSRecord: ModelsSystemDNSRecord,
    /**
     * The ModelsSystemDomain model constructor.
     * @property {module:model/ModelsSystemDomain}
     */
    ModelsSystemDomain: ModelsSystemDomain,
    /**
     * The ModelsSystemIPPool model constructor.
     * @property {module:model/ModelsSystemIPPool}
     */
    ModelsSystemIPPool: ModelsSystemIPPool,
    /**
     * The ModelsTemplate model constructor.
     * @property {module:model/ModelsTemplate}
     */
    ModelsTemplate: ModelsTemplate,
    /**
     * The ModelsTo model constructor.
     * @property {module:model/ModelsTo}
     */
    ModelsTo: ModelsTo,
    /**
     * The ModelsValidation model constructor.
     * @property {module:model/ModelsValidation}
     */
    ModelsValidation: ModelsValidation,
    /**
     * The ModelsValidationReason model constructor.
     * @property {module:model/ModelsValidationReason}
     */
    ModelsValidationReason: ModelsValidationReason,
    /**
     * The ModelsVerifyByTokenRequest model constructor.
     * @property {module:model/ModelsVerifyByTokenRequest}
     */
    ModelsVerifyByTokenRequest: ModelsVerifyByTokenRequest,
    /**
     * The ModelsWMessage model constructor.
     * @property {module:model/ModelsWMessage}
     */
    ModelsWMessage: ModelsWMessage,
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
     * The AccountalertApi service constructor.
     * @property {module:api/AccountalertApi}
     */
    AccountalertApi: AccountalertApi,
    /**
     * The AccounteventApi service constructor.
     * @property {module:api/AccounteventApi}
     */
    AccounteventApi: AccounteventApi,
    /**
     * The AccountintegrationApi service constructor.
     * @property {module:api/AccountintegrationApi}
     */
    AccountintegrationApi: AccountintegrationApi,
    /**
     * The AccountinvitationApi service constructor.
     * @property {module:api/AccountinvitationApi}
     */
    AccountinvitationApi: AccountinvitationApi,
    /**
     * The AccountipApi service constructor.
     * @property {module:api/AccountipApi}
     */
    AccountipApi: AccountipApi,
    /**
     * The AccountippoolApi service constructor.
     * @property {module:api/AccountippoolApi}
     */
    AccountippoolApi: AccountippoolApi,
    /**
     * The AccountipstatApi service constructor.
     * @property {module:api/AccountipstatApi}
     */
    AccountipstatApi: AccountipstatApi,
    /**
     * The AccountlabelApi service constructor.
     * @property {module:api/AccountlabelApi}
     */
    AccountlabelApi: AccountlabelApi,
    /**
     * The AccountmemberApi service constructor.
     * @property {module:api/AccountmemberApi}
     */
    AccountmemberApi: AccountmemberApi,
    /**
     * The AccountmessageApi service constructor.
     * @property {module:api/AccountmessageApi}
     */
    AccountmessageApi: AccountmessageApi,
    /**
     * The AccountonboardingApi service constructor.
     * @property {module:api/AccountonboardingApi}
     */
    AccountonboardingApi: AccountonboardingApi,
    /**
     * The AccountpaymentApi service constructor.
     * @property {module:api/AccountpaymentApi}
     */
    AccountpaymentApi: AccountpaymentApi,
    /**
     * The AccountrecipientApi service constructor.
     * @property {module:api/AccountrecipientApi}
     */
    AccountrecipientApi: AccountrecipientApi,
    /**
     * The AccountsmtpstatApi service constructor.
     * @property {module:api/AccountsmtpstatApi}
     */
    AccountsmtpstatApi: AccountsmtpstatApi,
    /**
     * The AccountstatApi service constructor.
     * @property {module:api/AccountstatApi}
     */
    AccountstatApi: AccountstatApi,
    /**
     * The AccountsubaccountApi service constructor.
     * @property {module:api/AccountsubaccountApi}
     */
    AccountsubaccountApi: AccountsubaccountApi,
    /**
     * The AccounttemplateApi service constructor.
     * @property {module:api/AccounttemplateApi}
     */
    AccounttemplateApi: AccounttemplateApi,
    /**
     * The AccountvalidationApi service constructor.
     * @property {module:api/AccountvalidationApi}
     */
    AccountvalidationApi: AccountvalidationApi,
    /**
     * The AccountwebhookApi service constructor.
     * @property {module:api/AccountwebhookApi}
     */
    AccountwebhookApi: AccountwebhookApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The ClusterApi service constructor.
     * @property {module:api/ClusterApi}
     */
    ClusterApi: ClusterApi,
    /**
     * The EditorApi service constructor.
     * @property {module:api/EditorApi}
     */
    EditorApi: EditorApi,
    /**
     * The SmtpApi service constructor.
     * @property {module:api/SmtpApi}
     */
    SmtpApi: SmtpApi,
    /**
     * The SubaccountdomainApi service constructor.
     * @property {module:api/SubaccountdomainApi}
     */
    SubaccountdomainApi: SubaccountdomainApi,
    /**
     * The SubaccountemailApi service constructor.
     * @property {module:api/SubaccountemailApi}
     */
    SubaccountemailApi: SubaccountemailApi,
    /**
     * The SubaccountippoolApi service constructor.
     * @property {module:api/SubaccountippoolApi}
     */
    SubaccountippoolApi: SubaccountippoolApi,
    /**
     * The SubaccountsenderApi service constructor.
     * @property {module:api/SubaccountsenderApi}
     */
    SubaccountsenderApi: SubaccountsenderApi,
    /**
     * The SubaccountstatApi service constructor.
     * @property {module:api/SubaccountstatApi}
     */
    SubaccountstatApi: SubaccountstatApi,
    /**
     * The SubaccountsuppressionApi service constructor.
     * @property {module:api/SubaccountsuppressionApi}
     */
    SubaccountsuppressionApi: SubaccountsuppressionApi,
    /**
     * The TrackApi service constructor.
     * @property {module:api/TrackApi}
     */
    TrackApi: TrackApi
  };

  return exports;
}));
