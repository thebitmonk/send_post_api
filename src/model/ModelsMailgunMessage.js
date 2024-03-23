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
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsMailgunEvent', 'model/ModelsMailgunSignature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsMailgunEvent'), require('./ModelsMailgunSignature'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsMailgunMessage = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsMailgunEvent, root.SendPostApi.ModelsMailgunSignature);
  }
}(this, function(ApiClient, ModelsMailgunEvent, ModelsMailgunSignature) {
  'use strict';

  /**
   * The ModelsMailgunMessage model module.
   * @module model/ModelsMailgunMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMailgunMessage</code>.
   * @alias module:model/ModelsMailgunMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMailgunMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMailgunMessage} obj Optional instance to populate.
   * @return {module:model/ModelsMailgunMessage} The populated <code>ModelsMailgunMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('event-data'))
        obj.eventData = ModelsMailgunEvent.constructFromObject(data['event-data']);
      if (data.hasOwnProperty('signature'))
        obj.signature = ModelsMailgunSignature.constructFromObject(data['signature']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsMailgunEvent} eventData
   */
  exports.prototype.eventData = undefined;

  /**
   * @member {module:model/ModelsMailgunSignature} signature
   */
  exports.prototype.signature = undefined;


  return exports;

}));
