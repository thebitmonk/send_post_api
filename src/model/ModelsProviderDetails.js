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
 * Swagger Codegen version: 2.4.30
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsConsumerStats', 'model/ModelsIPProviderSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsConsumerStats'), require('./ModelsIPProviderSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsProviderDetails = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsConsumerStats, root.SendPostApi.ModelsIPProviderSettings);
  }
}(this, function(ApiClient, ModelsConsumerStats, ModelsIPProviderSettings) {
  'use strict';

  /**
   * The ModelsProviderDetails model module.
   * @module model/ModelsProviderDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsProviderDetails</code>.
   * @alias module:model/ModelsProviderDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsProviderDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsProviderDetails} obj Optional instance to populate.
   * @return {module:model/ModelsProviderDetails} The populated <code>ModelsProviderDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('consumerStats'))
        obj.consumerStats = ModelsConsumerStats.constructFromObject(data['consumerStats']);
      if (data.hasOwnProperty('deferredConsumerStats'))
        obj.deferredConsumerStats = ModelsConsumerStats.constructFromObject(data['deferredConsumerStats']);
      if (data.hasOwnProperty('providerSettings'))
        obj.providerSettings = ModelsIPProviderSettings.constructFromObject(data['providerSettings']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsConsumerStats} consumerStats
   */
  exports.prototype.consumerStats = undefined;

  /**
   * @member {module:model/ModelsConsumerStats} deferredConsumerStats
   */
  exports.prototype.deferredConsumerStats = undefined;

  /**
   * @member {module:model/ModelsIPProviderSettings} providerSettings
   */
  exports.prototype.providerSettings = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
