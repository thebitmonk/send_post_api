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
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBackOffDecreaseType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsBackOffDecreaseType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsBackOffConfiguration = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBackOffDecreaseType);
  }
}(this, function(ApiClient, ModelsBackOffDecreaseType) {
  'use strict';

  /**
   * The ModelsBackOffConfiguration model module.
   * @module model/ModelsBackOffConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsBackOffConfiguration</code>.
   * @alias module:model/ModelsBackOffConfiguration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsBackOffConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBackOffConfiguration} obj Optional instance to populate.
   * @return {module:model/ModelsBackOffConfiguration} The populated <code>ModelsBackOffConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('concurrentConnections'))
        obj.concurrentConnections = ApiClient.convertToType(data['concurrentConnections'], 'Number');
      if (data.hasOwnProperty('concurrentConnectionsType'))
        obj.concurrentConnectionsType = ModelsBackOffDecreaseType.constructFromObject(data['concurrentConnectionsType']);
      if (data.hasOwnProperty('sendPerDay'))
        obj.sendPerDay = ApiClient.convertToType(data['sendPerDay'], 'Number');
      if (data.hasOwnProperty('sendPerDayType'))
        obj.sendPerDayType = ModelsBackOffDecreaseType.constructFromObject(data['sendPerDayType']);
      if (data.hasOwnProperty('sendPerHour'))
        obj.sendPerHour = ApiClient.convertToType(data['sendPerHour'], 'Number');
      if (data.hasOwnProperty('sendPerHourType'))
        obj.sendPerHourType = ModelsBackOffDecreaseType.constructFromObject(data['sendPerHourType']);
      if (data.hasOwnProperty('sendPerMinute'))
        obj.sendPerMinute = ApiClient.convertToType(data['sendPerMinute'], 'Number');
      if (data.hasOwnProperty('sendPerMinuteType'))
        obj.sendPerMinuteType = ModelsBackOffDecreaseType.constructFromObject(data['sendPerMinuteType']);
    }
    return obj;
  }

  /**
   * @member {Number} concurrentConnections
   */
  exports.prototype.concurrentConnections = undefined;

  /**
   * @member {module:model/ModelsBackOffDecreaseType} concurrentConnectionsType
   */
  exports.prototype.concurrentConnectionsType = undefined;

  /**
   * @member {Number} sendPerDay
   */
  exports.prototype.sendPerDay = undefined;

  /**
   * @member {module:model/ModelsBackOffDecreaseType} sendPerDayType
   */
  exports.prototype.sendPerDayType = undefined;

  /**
   * @member {Number} sendPerHour
   */
  exports.prototype.sendPerHour = undefined;

  /**
   * @member {module:model/ModelsBackOffDecreaseType} sendPerHourType
   */
  exports.prototype.sendPerHourType = undefined;

  /**
   * @member {Number} sendPerMinute
   */
  exports.prototype.sendPerMinute = undefined;

  /**
   * @member {module:model/ModelsBackOffDecreaseType} sendPerMinuteType
   */
  exports.prototype.sendPerMinuteType = undefined;


  return exports;

}));
