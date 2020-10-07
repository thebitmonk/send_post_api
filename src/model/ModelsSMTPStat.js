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
 * Swagger Codegen version: 2.4.16
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
    root.SendPostApi.ModelsSMTPStat = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsSMTPStat model module.
   * @module model/ModelsSMTPStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSMTPStat</code>.
   * @alias module:model/ModelsSMTPStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSMTPStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSMTPStat} obj Optional instance to populate.
   * @return {module:model/ModelsSMTPStat} The populated <code>ModelsSMTPStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('smtpCode'))
        obj.smtpCode = ApiClient.convertToType(data['smtpCode'], 'Number');
      if (data.hasOwnProperty('smtpDescription'))
        obj.smtpDescription = ApiClient.convertToType(data['smtpDescription'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype.count = undefined;

  /**
   * @member {Number} smtpCode
   */
  exports.prototype.smtpCode = undefined;

  /**
   * @member {String} smtpDescription
   */
  exports.prototype.smtpDescription = undefined;

  return exports;

}));
