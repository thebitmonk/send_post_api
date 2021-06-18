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
    define(['ApiClient', 'model/ModelsIP', 'model/ModelsIncidentStatus', 'model/ModelsMember', 'model/ModelsSubAccount', 'model/ModelsTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIP'), require('./ModelsIncidentStatus'), require('./ModelsMember'), require('./ModelsSubAccount'), require('./ModelsTag'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIncident = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIP, root.SendPostApi.ModelsIncidentStatus, root.SendPostApi.ModelsMember, root.SendPostApi.ModelsSubAccount, root.SendPostApi.ModelsTag);
  }
}(this, function(ApiClient, ModelsIP, ModelsIncidentStatus, ModelsMember, ModelsSubAccount, ModelsTag) {
  'use strict';

  /**
   * The ModelsIncident model module.
   * @module model/ModelsIncident
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIncident</code>.
   * @alias module:model/ModelsIncident
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIncident</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIncident} obj Optional instance to populate.
   * @return {module:model/ModelsIncident} The populated <code>ModelsIncident</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assignedTo'))
        obj.assignedTo = ModelsMember.constructFromObject(data['assignedTo']);
      if (data.hasOwnProperty('author'))
        obj.author = ModelsMember.constructFromObject(data['author']);
      if (data.hasOwnProperty('closed'))
        obj.closed = ApiClient.convertToType(data['closed'], 'Number');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('relatedIP'))
        obj.relatedIP = ModelsIP.constructFromObject(data['relatedIP']);
      if (data.hasOwnProperty('relatedSubAccount'))
        obj.relatedSubAccount = ModelsSubAccount.constructFromObject(data['relatedSubAccount']);
      if (data.hasOwnProperty('status'))
        obj.status = ModelsIncidentStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [ModelsTag]);
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsMember} assignedTo
   */
  exports.prototype.assignedTo = undefined;

  /**
   * @member {module:model/ModelsMember} author
   */
  exports.prototype.author = undefined;

  /**
   * @member {Number} closed
   */
  exports.prototype.closed = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsIP} relatedIP
   */
  exports.prototype.relatedIP = undefined;

  /**
   * @member {module:model/ModelsSubAccount} relatedSubAccount
   */
  exports.prototype.relatedSubAccount = undefined;

  /**
   * @member {module:model/ModelsIncidentStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} summary
   */
  exports.prototype.summary = undefined;

  /**
   * @member {Array.<module:model/ModelsTag>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
