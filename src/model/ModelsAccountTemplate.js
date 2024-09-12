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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsMember'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAccountTemplate = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsMember);
  }
}(this, function(ApiClient, ModelsMember) {
  'use strict';

  /**
   * The ModelsAccountTemplate model module.
   * @module model/ModelsAccountTemplate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccountTemplate</code>.
   * @alias module:model/ModelsAccountTemplate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccountTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccountTemplate} obj Optional instance to populate.
   * @return {module:model/ModelsAccountTemplate} The populated <code>ModelsAccountTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ModelsMember.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('template'))
        obj.template = ApiClient.convertToType(data['template'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
      if (data.hasOwnProperty('updated_by'))
        obj.updatedBy = ModelsMember.constructFromObject(data['updated_by']);
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {module:model/ModelsMember} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {String} html
   */
  exports.prototype.html = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Bee Drag Drop Editor JSON
   * @member {String} template
   */
  exports.prototype.template = undefined;

  /**
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {module:model/ModelsMember} updatedBy
   */
  exports.prototype.updatedBy = undefined;


  return exports;

}));
