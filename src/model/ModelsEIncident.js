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
    define(['ApiClient', 'model/ModelsIEIP', 'model/ModelsIEMember', 'model/ModelsIESubAccount', 'model/ModelsIETag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIEIP'), require('./ModelsIEMember'), require('./ModelsIESubAccount'), require('./ModelsIETag'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEIncident = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIEIP, root.SendPostApi.ModelsIEMember, root.SendPostApi.ModelsIESubAccount, root.SendPostApi.ModelsIETag);
  }
}(this, function(ApiClient, ModelsIEIP, ModelsIEMember, ModelsIESubAccount, ModelsIETag) {
  'use strict';

  /**
   * The ModelsEIncident model module.
   * @module model/ModelsEIncident
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEIncident</code>.
   * @alias module:model/ModelsEIncident
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEIncident</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIncident} obj Optional instance to populate.
   * @return {module:model/ModelsEIncident} The populated <code>ModelsEIncident</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assignedTo'))
        obj.assignedTo = ModelsIEMember.constructFromObject(data['assignedTo']);
      if (data.hasOwnProperty('author'))
        obj.author = ModelsIEMember.constructFromObject(data['author']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('modifiedBy'))
        obj.modifiedBy = ModelsIEMember.constructFromObject(data['modifiedBy']);
      if (data.hasOwnProperty('relatedIP'))
        obj.relatedIP = ModelsIEIP.constructFromObject(data['relatedIP']);
      if (data.hasOwnProperty('relatedSubAccount'))
        obj.relatedSubAccount = ModelsIESubAccount.constructFromObject(data['relatedSubAccount']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [ModelsIETag]);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsIEMember} assignedTo
   */
  exports.prototype.assignedTo = undefined;

  /**
   * @member {module:model/ModelsIEMember} author
   */
  exports.prototype.author = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/ModelsIEMember} modifiedBy
   */
  exports.prototype.modifiedBy = undefined;

  /**
   * @member {module:model/ModelsIEIP} relatedIP
   */
  exports.prototype.relatedIP = undefined;

  /**
   * @member {module:model/ModelsIESubAccount} relatedSubAccount
   */
  exports.prototype.relatedSubAccount = undefined;

  /**
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} summary
   */
  exports.prototype.summary = undefined;

  /**
   * @member {Array.<module:model/ModelsIETag>} tags
   */
  exports.prototype.tags = undefined;


  return exports;

}));
