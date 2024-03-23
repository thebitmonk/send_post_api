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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsDNSRecord = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsDNSRecord model module.
   * @module model/ModelsDNSRecord
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDNSRecord</code>.
   * @alias module:model/ModelsDNSRecord
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDNSRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDNSRecord} obj Optional instance to populate.
   * @return {module:model/ModelsDNSRecord} The populated <code>ModelsDNSRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('textValue'))
        obj.textValue = ApiClient.convertToType(data['textValue'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} host
   */
  exports.prototype.host = undefined;

  /**
   * @member {String} textValue
   */
  exports.prototype.textValue = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
