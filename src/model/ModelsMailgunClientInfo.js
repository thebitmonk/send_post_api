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
 * Swagger Codegen version: 2.4.41
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
    root.SendPostApi.ModelsMailgunClientInfo = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsMailgunClientInfo model module.
   * @module model/ModelsMailgunClientInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMailgunClientInfo</code>.
   * @alias module:model/ModelsMailgunClientInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMailgunClientInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMailgunClientInfo} obj Optional instance to populate.
   * @return {module:model/ModelsMailgunClientInfo} The populated <code>ModelsMailgunClientInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bot'))
        obj.bot = ApiClient.convertToType(data['bot'], 'String');
      if (data.hasOwnProperty('client-name'))
        obj.clientName = ApiClient.convertToType(data['client-name'], 'String');
      if (data.hasOwnProperty('client-os'))
        obj.clientOs = ApiClient.convertToType(data['client-os'], 'String');
      if (data.hasOwnProperty('client-type'))
        obj.clientType = ApiClient.convertToType(data['client-type'], 'String');
      if (data.hasOwnProperty('device-type'))
        obj.deviceType = ApiClient.convertToType(data['device-type'], 'String');
      if (data.hasOwnProperty('user-agent'))
        obj.userAgent = ApiClient.convertToType(data['user-agent'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} bot
   */
  exports.prototype.bot = undefined;

  /**
   * @member {String} clientName
   */
  exports.prototype.clientName = undefined;

  /**
   * @member {String} clientOs
   */
  exports.prototype.clientOs = undefined;

  /**
   * @member {String} clientType
   */
  exports.prototype.clientType = undefined;

  /**
   * @member {String} deviceType
   */
  exports.prototype.deviceType = undefined;

  /**
   * @member {String} userAgent
   */
  exports.prototype.userAgent = undefined;


  return exports;

}));
