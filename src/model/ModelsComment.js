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
 * Swagger Codegen version: 2.4.20
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIncident', 'model/ModelsMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIncident'), require('./ModelsMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsComment = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIncident, root.SendPostApi.ModelsMember);
  }
}(this, function(ApiClient, ModelsIncident, ModelsMember) {
  'use strict';

  /**
   * The ModelsComment model module.
   * @module model/ModelsComment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsComment</code>.
   * @alias module:model/ModelsComment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsComment} obj Optional instance to populate.
   * @return {module:model/ModelsComment} The populated <code>ModelsComment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('author'))
        obj.author = ModelsMember.constructFromObject(data['author']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('incident'))
        obj.incident = ModelsIncident.constructFromObject(data['incident']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsMember} author
   */
  exports.prototype.author = undefined;

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsIncident} incident
   */
  exports.prototype.incident = undefined;


  return exports;

}));
