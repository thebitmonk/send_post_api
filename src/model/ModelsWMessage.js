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
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsEventType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEventType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsWMessage = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEventType);
  }
}(this, function(ApiClient, ModelsEventType) {
  'use strict';

  /**
   * The ModelsWMessage model module.
   * @module model/ModelsWMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsWMessage</code>.
   * @alias module:model/ModelsWMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsWMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsWMessage} obj Optional instance to populate.
   * @return {module:model/ModelsWMessage} The populated <code>ModelsWMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AccountID'))
        obj.accountID = ApiClient.convertToType(data['AccountID'], 'Number');
      if (data.hasOwnProperty('From'))
        obj.from = ApiClient.convertToType(data['From'], 'String');
      if (data.hasOwnProperty('Groups'))
        obj.groups = ApiClient.convertToType(data['Groups'], Object);
      if (data.hasOwnProperty('IPID'))
        obj.IPID = ApiClient.convertToType(data['IPID'], 'Number');
      if (data.hasOwnProperty('MessageType'))
        obj.messageType = ApiClient.convertToType(data['MessageType'], 'String');
      if (data.hasOwnProperty('MessageUUID'))
        obj.messageUUID = ApiClient.convertToType(data['MessageUUID'], 'String');
      if (data.hasOwnProperty('MockMessage'))
        obj.mockMessage = ApiClient.convertToType(data['MockMessage'], 'Boolean');
      if (data.hasOwnProperty('MockTimeShift'))
        obj.mockTimeShift = ApiClient.convertToType(data['MockTimeShift'], 'Number');
      if (data.hasOwnProperty('SMTPCode'))
        obj.sMTPCode = ApiClient.convertToType(data['SMTPCode'], 'Number');
      if (data.hasOwnProperty('SMTPDescription'))
        obj.sMTPDescription = ApiClient.convertToType(data['SMTPDescription'], 'String');
      if (data.hasOwnProperty('SubAccountID'))
        obj.subAccountID = ApiClient.convertToType(data['SubAccountID'], 'Number');
      if (data.hasOwnProperty('SubmittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['SubmittedAt'], 'Number');
      if (data.hasOwnProperty('To'))
        obj.to = ApiClient.convertToType(data['To'], 'String');
      if (data.hasOwnProperty('Type'))
        obj.type = ModelsEventType.constructFromObject(data['Type']);
    }
    return obj;
  }

  /**
   * @member {Number} accountID
   */
  exports.prototype.accountID = undefined;

  /**
   * @member {String} from
   */
  exports.prototype.from = undefined;

  /**
   * @member {Object} groups
   */
  exports.prototype.groups = undefined;

  /**
   * @member {Number} IPID
   */
  exports.prototype.IPID = undefined;

  /**
   * @member {String} messageType
   */
  exports.prototype.messageType = undefined;

  /**
   * @member {String} messageUUID
   */
  exports.prototype.messageUUID = undefined;

  /**
   * @member {Boolean} mockMessage
   */
  exports.prototype.mockMessage = undefined;

  /**
   * @member {Number} mockTimeShift
   */
  exports.prototype.mockTimeShift = undefined;

  /**
   * @member {Number} sMTPCode
   */
  exports.prototype.sMTPCode = undefined;

  /**
   * @member {String} sMTPDescription
   */
  exports.prototype.sMTPDescription = undefined;

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
   * @member {module:model/ModelsEventType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
