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
 * Swagger Codegen version: 2.4.37
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBackOffConfiguration', 'model/ModelsBackOffTrigger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsBackOffConfiguration'), require('./ModelsBackOffTrigger'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsProviderSettings = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBackOffConfiguration, root.SendPostApi.ModelsBackOffTrigger);
  }
}(this, function(ApiClient, ModelsBackOffConfiguration, ModelsBackOffTrigger) {
  'use strict';

  /**
   * The ModelsProviderSettings model module.
   * @module model/ModelsProviderSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsProviderSettings</code>.
   * @alias module:model/ModelsProviderSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsProviderSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsProviderSettings} obj Optional instance to populate.
   * @return {module:model/ModelsProviderSettings} The populated <code>ModelsProviderSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('backOffConfiguration'))
        obj.backOffConfiguration = ModelsBackOffConfiguration.constructFromObject(data['backOffConfiguration']);
      if (data.hasOwnProperty('backOffTrigger'))
        obj.backOffTrigger = ModelsBackOffTrigger.constructFromObject(data['backOffTrigger']);
      if (data.hasOwnProperty('maxConcurrentConnections'))
        obj.maxConcurrentConnections = ApiClient.convertToType(data['maxConcurrentConnections'], 'Number');
      if (data.hasOwnProperty('maxSendPerDay'))
        obj.maxSendPerDay = ApiClient.convertToType(data['maxSendPerDay'], 'Number');
      if (data.hasOwnProperty('maxSendPerHour'))
        obj.maxSendPerHour = ApiClient.convertToType(data['maxSendPerHour'], 'Number');
      if (data.hasOwnProperty('maxSendPerMinute'))
        obj.maxSendPerMinute = ApiClient.convertToType(data['maxSendPerMinute'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsBackOffConfiguration} backOffConfiguration
   */
  exports.prototype.backOffConfiguration = undefined;

  /**
   * @member {module:model/ModelsBackOffTrigger} backOffTrigger
   */
  exports.prototype.backOffTrigger = undefined;

  /**
   * @member {Number} maxConcurrentConnections
   */
  exports.prototype.maxConcurrentConnections = undefined;

  /**
   * @member {Number} maxSendPerDay
   */
  exports.prototype.maxSendPerDay = undefined;

  /**
   * @member {Number} maxSendPerHour
   */
  exports.prototype.maxSendPerHour = undefined;

  /**
   * @member {Number} maxSendPerMinute
   */
  exports.prototype.maxSendPerMinute = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
