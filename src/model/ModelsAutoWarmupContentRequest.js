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
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsContent'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAutoWarmupContentRequest = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsContent);
  }
}(this, function(ApiClient, ModelsContent) {
  'use strict';

  /**
   * The ModelsAutoWarmupContentRequest model module.
   * @module model/ModelsAutoWarmupContentRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAutoWarmupContentRequest</code>.
   * @alias module:model/ModelsAutoWarmupContentRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAutoWarmupContentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAutoWarmupContentRequest} obj Optional instance to populate.
   * @return {module:model/ModelsAutoWarmupContentRequest} The populated <code>ModelsAutoWarmupContentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contentList'))
        obj.contentList = ApiClient.convertToType(data['contentList'], [ModelsContent]);
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsContent>} contentList
   */
  exports.prototype.contentList = undefined;

  /**
   * @member {String} domain
   */
  exports.prototype.domain = undefined;


  return exports;

}));
