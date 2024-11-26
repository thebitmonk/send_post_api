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
 * Swagger Codegen version: 2.4.43
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
    root.SendPostApi.ModelsWarmupDetails = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsWarmupDetails model module.
   * @module model/ModelsWarmupDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsWarmupDetails</code>.
   * @alias module:model/ModelsWarmupDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsWarmupDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsWarmupDetails} obj Optional instance to populate.
   * @return {module:model/ModelsWarmupDetails} The populated <code>ModelsWarmupDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currentVolumePerHour'))
        obj.currentVolumePerHour = ApiClient.convertToType(data['currentVolumePerHour'], 'Number');
      if (data.hasOwnProperty('decreasePercentage'))
        obj.decreasePercentage = ApiClient.convertToType(data['decreasePercentage'], 'Number');
      if (data.hasOwnProperty('deliverabilityGoal'))
        obj.deliverabilityGoal = ApiClient.convertToType(data['deliverabilityGoal'], 'Number');
      if (data.hasOwnProperty('gracePeriodNeeded'))
        obj.gracePeriodNeeded = ApiClient.convertToType(data['gracePeriodNeeded'], 'Boolean');
      if (data.hasOwnProperty('increasePercentage'))
        obj.increasePercentage = ApiClient.convertToType(data['increasePercentage'], 'Number');
      if (data.hasOwnProperty('isPaused'))
        obj.isPaused = ApiClient.convertToType(data['isPaused'], 'Boolean');
      if (data.hasOwnProperty('isWarmupCompleted'))
        obj.isWarmupCompleted = ApiClient.convertToType(data['isWarmupCompleted'], 'Boolean');
      if (data.hasOwnProperty('lastUpdated'))
        obj.lastUpdated = ApiClient.convertToType(data['lastUpdated'], 'Number');
      if (data.hasOwnProperty('maxBounceRate'))
        obj.maxBounceRate = ApiClient.convertToType(data['maxBounceRate'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('reasonForSpeedChange'))
        obj.reasonForSpeedChange = ApiClient.convertToType(data['reasonForSpeedChange'], 'String');
      if (data.hasOwnProperty('timePerEmail'))
        obj.timePerEmail = ApiClient.convertToType(data['timePerEmail'], 'Number');
      if (data.hasOwnProperty('warmupDay'))
        obj.warmupDay = ApiClient.convertToType(data['warmupDay'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} currentVolumePerHour
   */
  exports.prototype.currentVolumePerHour = undefined;

  /**
   * @member {Number} decreasePercentage
   */
  exports.prototype.decreasePercentage = undefined;

  /**
   * @member {Number} deliverabilityGoal
   */
  exports.prototype.deliverabilityGoal = undefined;

  /**
   * @member {Boolean} gracePeriodNeeded
   */
  exports.prototype.gracePeriodNeeded = undefined;

  /**
   * @member {Number} increasePercentage
   */
  exports.prototype.increasePercentage = undefined;

  /**
   * @member {Boolean} isPaused
   */
  exports.prototype.isPaused = undefined;

  /**
   * @member {Boolean} isWarmupCompleted
   */
  exports.prototype.isWarmupCompleted = undefined;

  /**
   * @member {Number} lastUpdated
   */
  exports.prototype.lastUpdated = undefined;

  /**
   * @member {Number} maxBounceRate
   */
  exports.prototype.maxBounceRate = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} reasonForSpeedChange
   */
  exports.prototype.reasonForSpeedChange = undefined;

  /**
   * @member {Number} timePerEmail
   */
  exports.prototype.timePerEmail = undefined;

  /**
   * @member {Number} warmupDay
   */
  exports.prototype.warmupDay = undefined;


  return exports;

}));
