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
    define(['ApiClient', 'model/ModelsCertificateExtensions', 'model/ModelsCertificateIssuer', 'model/ModelsCertificateSignature', 'model/ModelsCertificateSubject', 'model/ModelsCertificateValidity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsCertificateExtensions'), require('./ModelsCertificateIssuer'), require('./ModelsCertificateSignature'), require('./ModelsCertificateSubject'), require('./ModelsCertificateValidity'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsCertificateDetails = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCertificateExtensions, root.SendPostApi.ModelsCertificateIssuer, root.SendPostApi.ModelsCertificateSignature, root.SendPostApi.ModelsCertificateSubject, root.SendPostApi.ModelsCertificateValidity);
  }
}(this, function(ApiClient, ModelsCertificateExtensions, ModelsCertificateIssuer, ModelsCertificateSignature, ModelsCertificateSubject, ModelsCertificateValidity) {
  'use strict';

  /**
   * The ModelsCertificateDetails model module.
   * @module model/ModelsCertificateDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCertificateDetails</code>.
   * @alias module:model/ModelsCertificateDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCertificateDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCertificateDetails} obj Optional instance to populate.
   * @return {module:model/ModelsCertificateDetails} The populated <code>ModelsCertificateDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('extensions'))
        obj.extensions = ModelsCertificateExtensions.constructFromObject(data['extensions']);
      if (data.hasOwnProperty('issuer'))
        obj.issuer = ModelsCertificateIssuer.constructFromObject(data['issuer']);
      if (data.hasOwnProperty('signature'))
        obj.signature = ModelsCertificateSignature.constructFromObject(data['signature']);
      if (data.hasOwnProperty('subject'))
        obj.subject = ModelsCertificateSubject.constructFromObject(data['subject']);
      if (data.hasOwnProperty('validity'))
        obj.validity = ModelsCertificateValidity.constructFromObject(data['validity']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsCertificateExtensions} extensions
   */
  exports.prototype.extensions = undefined;

  /**
   * @member {module:model/ModelsCertificateIssuer} issuer
   */
  exports.prototype.issuer = undefined;

  /**
   * @member {module:model/ModelsCertificateSignature} signature
   */
  exports.prototype.signature = undefined;

  /**
   * @member {module:model/ModelsCertificateSubject} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {module:model/ModelsCertificateValidity} validity
   */
  exports.prototype.validity = undefined;


  return exports;

}));
