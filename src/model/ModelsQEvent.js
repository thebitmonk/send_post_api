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
    define(['ApiClient', 'model/ModelsEventMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEventMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsQEvent = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEventMetadata);
  }
}(this, function(ApiClient, ModelsEventMetadata) {
  'use strict';

  /**
   * The ModelsQEvent model module.
   * @module model/ModelsQEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsQEvent</code>.
   * @alias module:model/ModelsQEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsQEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsQEvent} obj Optional instance to populate.
   * @return {module:model/ModelsQEvent} The populated <code>ModelsQEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountID'))
        obj.accountID = ApiClient.convertToType(data['accountID'], 'Number');
      if (data.hasOwnProperty('domainID'))
        obj.domainID = ApiClient.convertToType(data['domainID'], 'Number');
      if (data.hasOwnProperty('eventID'))
        obj.eventID = ApiClient.convertToType(data['eventID'], 'String');
      if (data.hasOwnProperty('eventMetadata'))
        obj.eventMetadata = ModelsEventMetadata.constructFromObject(data['eventMetadata']);
      if (data.hasOwnProperty('from'))
        obj.from = ApiClient.convertToType(data['from'], 'String');
      if (data.hasOwnProperty('fromName'))
        obj.fromName = ApiClient.convertToType(data['fromName'], 'String');
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], ['String']);
      if (data.hasOwnProperty('ipID'))
        obj.ipID = ApiClient.convertToType(data['ipID'], 'Number');
      if (data.hasOwnProperty('ipPoolID'))
        obj.ipPoolID = ApiClient.convertToType(data['ipPoolID'], 'Number');
      if (data.hasOwnProperty('messageID'))
        obj.messageID = ApiClient.convertToType(data['messageID'], 'String');
      if (data.hasOwnProperty('messageSubject'))
        obj.messageSubject = ApiClient.convertToType(data['messageSubject'], 'String');
      if (data.hasOwnProperty('messageType'))
        obj.messageType = ApiClient.convertToType(data['messageType'], 'String');
      if (data.hasOwnProperty('smtpCode'))
        obj.smtpCode = ApiClient.convertToType(data['smtpCode'], 'Number');
      if (data.hasOwnProperty('smtpDescription'))
        obj.smtpDescription = ApiClient.convertToType(data['smtpDescription'], 'String');
      if (data.hasOwnProperty('subAccountID'))
        obj.subAccountID = ApiClient.convertToType(data['subAccountID'], 'Number');
      if (data.hasOwnProperty('submittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['submittedAt'], 'Number');
      if (data.hasOwnProperty('to'))
        obj.to = ApiClient.convertToType(data['to'], 'String');
      if (data.hasOwnProperty('toName'))
        obj.toName = ApiClient.convertToType(data['toName'], 'String');
      if (data.hasOwnProperty('tpspId'))
        obj.tpspId = ApiClient.convertToType(data['tpspId'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} accountID
   */
  exports.prototype.accountID = undefined;

  /**
   * @member {Number} domainID
   */
  exports.prototype.domainID = undefined;

  /**
   * @member {String} eventID
   */
  exports.prototype.eventID = undefined;

  /**
   * @member {module:model/ModelsEventMetadata} eventMetadata
   */
  exports.prototype.eventMetadata = undefined;

  /**
   * @member {String} from
   */
  exports.prototype.from = undefined;

  /**
   * @member {String} fromName
   */
  exports.prototype.fromName = undefined;

  /**
   * @member {Array.<String>} groups
   */
  exports.prototype.groups = undefined;

  /**
   * @member {Number} ipID
   */
  exports.prototype.ipID = undefined;

  /**
   * @member {Number} ipPoolID
   */
  exports.prototype.ipPoolID = undefined;

  /**
   * @member {String} messageID
   */
  exports.prototype.messageID = undefined;

  /**
   * @member {String} messageSubject
   */
  exports.prototype.messageSubject = undefined;

  /**
   * @member {String} messageType
   */
  exports.prototype.messageType = undefined;

  /**
   * @member {Number} smtpCode
   */
  exports.prototype.smtpCode = undefined;

  /**
   * @member {String} smtpDescription
   */
  exports.prototype.smtpDescription = undefined;

  /**
   * @member {Number} subAccountID
   */
  exports.prototype.subAccountID = undefined;

  /**
   * @member {Number} submittedAt
   */
  exports.prototype.submittedAt = undefined;

  /**
   * @member {String} to
   */
  exports.prototype.to = undefined;

  /**
   * @member {String} toName
   */
  exports.prototype.toName = undefined;

  /**
   * @member {Number} tpspId
   */
  exports.prototype.tpspId = undefined;

  /**
   * @member {Number} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
