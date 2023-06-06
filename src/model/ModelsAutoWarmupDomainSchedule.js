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
    define(['ApiClient', 'model/ModelsAutoWarmupDailySchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAutoWarmupDailySchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAutoWarmupDomainSchedule = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAutoWarmupDailySchedule);
  }
}(this, function(ApiClient, ModelsAutoWarmupDailySchedule) {
  'use strict';

  /**
   * The ModelsAutoWarmupDomainSchedule model module.
   * @module model/ModelsAutoWarmupDomainSchedule
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutoWarmupDomainSchedule</code>.
   * @alias module:model/ModelsAutoWarmupDomainSchedule
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutoWarmupDomainSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutoWarmupDomainSchedule} obj Optional instance to populate.
   * @return {module:model/ModelsAutoWarmupDomainSchedule} The populated <code>ModelsAutoWarmupDomainSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dailySchedule'))
        obj.dailySchedule = ApiClient.convertToType(data['dailySchedule'], [ModelsAutoWarmupDailySchedule]);
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsAutoWarmupDailySchedule>} dailySchedule
   */
  exports.prototype.dailySchedule = undefined;

  /**
   * @member {String} domain
   */
  exports.prototype.domain = undefined;


  return exports;

}));
