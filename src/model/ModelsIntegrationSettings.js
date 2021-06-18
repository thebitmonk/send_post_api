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
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsFrequencyType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsFrequencyType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIntegrationSettings = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsFrequencyType);
  }
}(this, function(ApiClient, ModelsFrequencyType) {
  'use strict';

  /**
   * The ModelsIntegrationSettings model module.
   * @module model/ModelsIntegrationSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIntegrationSettings</code>.
   * @alias module:model/ModelsIntegrationSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIntegrationSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIntegrationSettings} obj Optional instance to populate.
   * @return {module:model/ModelsIntegrationSettings} The populated <code>ModelsIntegrationSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('autoEnableMonitoring'))
        obj.autoEnableMonitoring = ApiClient.convertToType(data['autoEnableMonitoring'], 'Boolean');
      if (data.hasOwnProperty('emailTo'))
        obj.emailTo = ApiClient.convertToType(data['emailTo'], ['String']);
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ModelsFrequencyType.constructFromObject(data['frequency']);
      if (data.hasOwnProperty('receiveReports'))
        obj.receiveReports = ApiClient.convertToType(data['receiveReports'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} autoEnableMonitoring
   */
  exports.prototype.autoEnableMonitoring = undefined;

  /**
   * @member {Array.<String>} emailTo
   */
  exports.prototype.emailTo = undefined;

  /**
   * @member {module:model/ModelsFrequencyType} frequency
   */
  exports.prototype.frequency = undefined;

  /**
   * @member {Boolean} receiveReports
   */
  exports.prototype.receiveReports = undefined;


  return exports;

}));
