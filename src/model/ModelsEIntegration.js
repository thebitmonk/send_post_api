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
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIntegrationSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIntegrationSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEIntegration = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIntegrationSettings);
  }
}(this, function(ApiClient, ModelsIntegrationSettings) {
  'use strict';

  /**
   * The ModelsEIntegration model module.
   * @module model/ModelsEIntegration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEIntegration</code>.
   * @alias module:model/ModelsEIntegration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIntegration} obj Optional instance to populate.
   * @return {module:model/ModelsEIntegration} The populated <code>ModelsEIntegration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('settings'))
        obj.settings = ModelsIntegrationSettings.constructFromObject(data['settings']);
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * @member {module:model/ModelsIntegrationSettings} settings
   */
  exports.prototype.settings = undefined;


  return exports;

}));
