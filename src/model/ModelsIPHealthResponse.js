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
    define(['ApiClient', 'model/ModelsProviderDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsProviderDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIPHealthResponse = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsProviderDetails);
  }
}(this, function(ApiClient, ModelsProviderDetails) {
  'use strict';

  /**
   * The ModelsIPHealthResponse model module.
   * @module model/ModelsIPHealthResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIPHealthResponse</code>.
   * @alias module:model/ModelsIPHealthResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIPHealthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIPHealthResponse} obj Optional instance to populate.
   * @return {module:model/ModelsIPHealthResponse} The populated <code>ModelsIPHealthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('providerStats'))
        obj.providerStats = ApiClient.convertToType(data['providerStats'], [ModelsProviderDetails]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsProviderDetails>} providerStats
   */
  exports.prototype.providerStats = undefined;


  return exports;

}));
