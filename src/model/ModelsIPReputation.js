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
    root.SendPostApi.ModelsIPReputation = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsIPReputation model module.
   * @module model/ModelsIPReputation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIPReputation</code>.
   * @alias module:model/ModelsIPReputation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIPReputation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIPReputation} obj Optional instance to populate.
   * @return {module:model/ModelsIPReputation} The populated <code>ModelsIPReputation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ipCount'))
        obj.ipCount = ApiClient.convertToType(data['ipCount'], 'String');
      if (data.hasOwnProperty('reputation'))
        obj.reputation = ApiClient.convertToType(data['reputation'], 'String');
      if (data.hasOwnProperty('sampleIps'))
        obj.sampleIps = ApiClient.convertToType(data['sampleIps'], Object);
    }
    return obj;
  }

  /**
   * @member {String} ipCount
   */
  exports.prototype.ipCount = undefined;

  /**
   * @member {String} reputation
   */
  exports.prototype.reputation = undefined;

  /**
   * @member {Object} sampleIps
   */
  exports.prototype.sampleIps = undefined;


  return exports;

}));