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
    define(['ApiClient', 'model/ModelsMailgunClientInfo', 'model/ModelsMailgunDeliveryStatus', 'model/ModelsMailgunUserVariables'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsMailgunClientInfo'), require('./ModelsMailgunDeliveryStatus'), require('./ModelsMailgunUserVariables'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsMailgunEvent = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsMailgunClientInfo, root.SendPostApi.ModelsMailgunDeliveryStatus, root.SendPostApi.ModelsMailgunUserVariables);
  }
}(this, function(ApiClient, ModelsMailgunClientInfo, ModelsMailgunDeliveryStatus, ModelsMailgunUserVariables) {
  'use strict';

  /**
   * The ModelsMailgunEvent model module.
   * @module model/ModelsMailgunEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMailgunEvent</code>.
   * @alias module:model/ModelsMailgunEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMailgunEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMailgunEvent} obj Optional instance to populate.
   * @return {module:model/ModelsMailgunEvent} The populated <code>ModelsMailgunEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('client-info'))
        obj.clientInfo = ModelsMailgunClientInfo.constructFromObject(data['client-info']);
      if (data.hasOwnProperty('delivery-status'))
        obj.deliveryStatus = ModelsMailgunDeliveryStatus.constructFromObject(data['delivery-status']);
      if (data.hasOwnProperty('event'))
        obj.event = ApiClient.convertToType(data['event'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
      if (data.hasOwnProperty('recipient'))
        obj.recipient = ApiClient.convertToType(data['recipient'], 'String');
      if (data.hasOwnProperty('severity'))
        obj.severity = ApiClient.convertToType(data['severity'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('user-variables'))
        obj.userVariables = ModelsMailgunUserVariables.constructFromObject(data['user-variables']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsMailgunClientInfo} clientInfo
   */
  exports.prototype.clientInfo = undefined;

  /**
   * @member {module:model/ModelsMailgunDeliveryStatus} deliveryStatus
   */
  exports.prototype.deliveryStatus = undefined;

  /**
   * @member {String} event
   */
  exports.prototype.event = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  /**
   * @member {String} recipient
   */
  exports.prototype.recipient = undefined;

  /**
   * @member {String} severity
   */
  exports.prototype.severity = undefined;

  /**
   * @member {Number} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {module:model/ModelsMailgunUserVariables} userVariables
   */
  exports.prototype.userVariables = undefined;


  return exports;

}));
