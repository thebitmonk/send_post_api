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
 * Swagger Codegen version: 2.4.37
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
    root.SendPostApi.ModelsBillingPortalSession = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsBillingPortalSession model module.
   * @module model/ModelsBillingPortalSession
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsBillingPortalSession</code>.
   * @alias module:model/ModelsBillingPortalSession
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsBillingPortalSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBillingPortalSession} obj Optional instance to populate.
   * @return {module:model/ModelsBillingPortalSession} The populated <code>ModelsBillingPortalSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('customer'))
        obj.customer = ApiClient.convertToType(data['customer'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('livemode'))
        obj.livemode = ApiClient.convertToType(data['livemode'], 'Boolean');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('return_url'))
        obj.returnUrl = ApiClient.convertToType(data['return_url'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} customer
   */
  exports.prototype.customer = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} livemode
   */
  exports.prototype.livemode = undefined;

  /**
   * @member {String} _object
   */
  exports.prototype._object = undefined;

  /**
   * @member {String} returnUrl
   */
  exports.prototype.returnUrl = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;


  return exports;

}));
