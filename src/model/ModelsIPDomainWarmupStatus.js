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
    root.SendPostApi.ModelsIPDomainWarmupStatus = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsIPDomainWarmupStatus model module.
   * @module model/ModelsIPDomainWarmupStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIPDomainWarmupStatus</code>.
   * @alias module:model/ModelsIPDomainWarmupStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIPDomainWarmupStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIPDomainWarmupStatus} obj Optional instance to populate.
   * @return {module:model/ModelsIPDomainWarmupStatus} The populated <code>ModelsIPDomainWarmupStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('autoWarmupDelay'))
        obj.autoWarmupDelay = ApiClient.convertToType(data['autoWarmupDelay'], 'Number');
      if (data.hasOwnProperty('autoWarmupLastRunAt'))
        obj.autoWarmupLastRunAt = ApiClient.convertToType(data['autoWarmupLastRunAt'], 'Number');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('currentWarmupStage'))
        obj.currentWarmupStage = ApiClient.convertToType(data['currentWarmupStage'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
      if (data.hasOwnProperty('warmupCompleted'))
        obj.warmupCompleted = ApiClient.convertToType(data['warmupCompleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} autoWarmupDelay
   */
  exports.prototype.autoWarmupDelay = undefined;

  /**
   * @member {Number} autoWarmupLastRunAt
   */
  exports.prototype.autoWarmupLastRunAt = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} currentWarmupStage
   */
  exports.prototype.currentWarmupStage = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {Boolean} warmupCompleted
   */
  exports.prototype.warmupCompleted = undefined;


  return exports;

}));
