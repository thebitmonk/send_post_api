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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAccount', 'model/ModelsAccountIPPool', 'model/ModelsAccountTemplate', 'model/ModelsAccountWebhook', 'model/ModelsDomain', 'model/ModelsEntity', 'model/ModelsIP', 'model/ModelsIncident', 'model/ModelsIntegration', 'model/ModelsInvitation', 'model/ModelsLabel', 'model/ModelsMember', 'model/ModelsSubAccount', 'model/ModelsSystemEventType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAccount'), require('./ModelsAccountIPPool'), require('./ModelsAccountTemplate'), require('./ModelsAccountWebhook'), require('./ModelsDomain'), require('./ModelsEntity'), require('./ModelsIP'), require('./ModelsIncident'), require('./ModelsIntegration'), require('./ModelsInvitation'), require('./ModelsLabel'), require('./ModelsMember'), require('./ModelsSubAccount'), require('./ModelsSystemEventType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSystemEvent = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAccount, root.SendPostApi.ModelsAccountIPPool, root.SendPostApi.ModelsAccountTemplate, root.SendPostApi.ModelsAccountWebhook, root.SendPostApi.ModelsDomain, root.SendPostApi.ModelsEntity, root.SendPostApi.ModelsIP, root.SendPostApi.ModelsIncident, root.SendPostApi.ModelsIntegration, root.SendPostApi.ModelsInvitation, root.SendPostApi.ModelsLabel, root.SendPostApi.ModelsMember, root.SendPostApi.ModelsSubAccount, root.SendPostApi.ModelsSystemEventType);
  }
}(this, function(ApiClient, ModelsAccount, ModelsAccountIPPool, ModelsAccountTemplate, ModelsAccountWebhook, ModelsDomain, ModelsEntity, ModelsIP, ModelsIncident, ModelsIntegration, ModelsInvitation, ModelsLabel, ModelsMember, ModelsSubAccount, ModelsSystemEventType) {
  'use strict';

  /**
   * The ModelsSystemEvent model module.
   * @module model/ModelsSystemEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSystemEvent</code>.
   * @alias module:model/ModelsSystemEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSystemEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSystemEvent} obj Optional instance to populate.
   * @return {module:model/ModelsSystemEvent} The populated <code>ModelsSystemEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AccountTemplate'))
        obj.accountTemplate = ModelsAccountTemplate.constructFromObject(data['AccountTemplate']);
      if (data.hasOwnProperty('AccountWebhook'))
        obj.accountWebhook = ModelsAccountWebhook.constructFromObject(data['AccountWebhook']);
      if (data.hasOwnProperty('account'))
        obj.account = ModelsAccount.constructFromObject(data['account']);
      if (data.hasOwnProperty('domain'))
        obj.domain = ModelsDomain.constructFromObject(data['domain']);
      if (data.hasOwnProperty('entity'))
        obj.entity = ModelsEntity.constructFromObject(data['entity']);
      if (data.hasOwnProperty('eventId'))
        obj.eventId = ApiClient.convertToType(data['eventId'], 'String');
      if (data.hasOwnProperty('eventType'))
        obj.eventType = ModelsSystemEventType.constructFromObject(data['eventType']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('incident'))
        obj.incident = ModelsIncident.constructFromObject(data['incident']);
      if (data.hasOwnProperty('integration'))
        obj.integration = ModelsIntegration.constructFromObject(data['integration']);
      if (data.hasOwnProperty('invitation'))
        obj.invitation = ModelsInvitation.constructFromObject(data['invitation']);
      if (data.hasOwnProperty('ip'))
        obj.ip = ModelsIP.constructFromObject(data['ip']);
      if (data.hasOwnProperty('ipPool'))
        obj.ipPool = ModelsAccountIPPool.constructFromObject(data['ipPool']);
      if (data.hasOwnProperty('label'))
        obj.label = ModelsLabel.constructFromObject(data['label']);
      if (data.hasOwnProperty('member'))
        obj.member = ModelsMember.constructFromObject(data['member']);
      if (data.hasOwnProperty('subAccount'))
        obj.subAccount = ModelsSubAccount.constructFromObject(data['subAccount']);
      if (data.hasOwnProperty('submittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['submittedAt'], 'Number');
      if (data.hasOwnProperty('systemEventMetadata'))
        obj.systemEventMetadata = ApiClient.convertToType(data['systemEventMetadata'], Object);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsAccountTemplate} accountTemplate
   */
  exports.prototype.accountTemplate = undefined;

  /**
   * @member {module:model/ModelsAccountWebhook} accountWebhook
   */
  exports.prototype.accountWebhook = undefined;

  /**
   * @member {module:model/ModelsAccount} account
   */
  exports.prototype.account = undefined;

  /**
   * @member {module:model/ModelsDomain} domain
   */
  exports.prototype.domain = undefined;

  /**
   * @member {module:model/ModelsEntity} entity
   */
  exports.prototype.entity = undefined;

  /**
   * @member {String} eventId
   */
  exports.prototype.eventId = undefined;

  /**
   * @member {module:model/ModelsSystemEventType} eventType
   */
  exports.prototype.eventType = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsIncident} incident
   */
  exports.prototype.incident = undefined;

  /**
   * @member {module:model/ModelsIntegration} integration
   */
  exports.prototype.integration = undefined;

  /**
   * @member {module:model/ModelsInvitation} invitation
   */
  exports.prototype.invitation = undefined;

  /**
   * @member {module:model/ModelsIP} ip
   */
  exports.prototype.ip = undefined;

  /**
   * @member {module:model/ModelsAccountIPPool} ipPool
   */
  exports.prototype.ipPool = undefined;

  /**
   * @member {module:model/ModelsLabel} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {module:model/ModelsMember} member
   */
  exports.prototype.member = undefined;

  /**
   * @member {module:model/ModelsSubAccount} subAccount
   */
  exports.prototype.subAccount = undefined;

  /**
   * @member {Number} submittedAt
   */
  exports.prototype.submittedAt = undefined;

  /**
   * @member {Object} systemEventMetadata
   */
  exports.prototype.systemEventMetadata = undefined;


  return exports;

}));
