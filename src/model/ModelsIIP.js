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
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIIPUpdateType', 'model/ModelsProviderSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIIPUpdateType'), require('./ModelsProviderSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIIP = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIIPUpdateType, root.SendPostApi.ModelsProviderSettings);
  }
}(this, function(ApiClient, ModelsIIPUpdateType, ModelsProviderSettings) {
  'use strict';

  /**
   * The ModelsIIP model module.
   * @module model/ModelsIIP
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIIP</code>.
   * @alias module:model/ModelsIIP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIIP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIIP} obj Optional instance to populate.
   * @return {module:model/ModelsIIP} The populated <code>ModelsIIP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], ['String']);
      if (data.hasOwnProperty('providerSettings'))
        obj.providerSettings = ModelsProviderSettings.constructFromObject(data['providerSettings']);
      if (data.hasOwnProperty('type'))
        obj.type = ModelsIIPUpdateType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * @member {module:model/ModelsProviderSettings} providerSettings
   */
  exports.prototype.providerSettings = undefined;

  /**
   * @member {module:model/ModelsIIPUpdateType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
