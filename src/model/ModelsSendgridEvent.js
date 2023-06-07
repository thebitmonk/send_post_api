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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSendgridEvent = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsSendgridEvent model module.
   * @module model/ModelsSendgridEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSendgridEvent</code>.
   * @alias module:model/ModelsSendgridEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSendgridEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSendgridEvent} obj Optional instance to populate.
   * @return {module:model/ModelsSendgridEvent} The populated <code>ModelsSendgridEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('emailType'))
        obj.emailType = ApiClient.convertToType(data['emailType'], 'String');
      if (data.hasOwnProperty('event'))
        obj.event = ApiClient.convertToType(data['event'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('sg_message_id'))
        obj.sgMessageId = ApiClient.convertToType(data['sg_message_id'], 'String');
      if (data.hasOwnProperty('smtp-id'))
        obj.smtpId = ApiClient.convertToType(data['smtp-id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('subAccountId'))
        obj.subAccountId = ApiClient.convertToType(data['subAccountId'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('tpspId'))
        obj.tpspId = ApiClient.convertToType(data['tpspId'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('userAgent'))
        obj.userAgent = ApiClient.convertToType(data['userAgent'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} emailType
   */
  exports.prototype.emailType = undefined;

  /**
   * @member {String} event
   */
  exports.prototype.event = undefined;

  /**
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  /**
   * @member {String} messageId
   */
  exports.prototype.messageId = undefined;

  /**
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * @member {String} sgMessageId
   */
  exports.prototype.sgMessageId = undefined;

  /**
   * @member {String} smtpId
   */
  exports.prototype.smtpId = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} subAccountId
   */
  exports.prototype.subAccountId = undefined;

  /**
   * @member {Number} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {String} tpspId
   */
  exports.prototype.tpspId = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {String} userAgent
   */
  exports.prototype.userAgent = undefined;


  return exports;

}));