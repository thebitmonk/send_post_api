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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsHubspotTicketProperties = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsHubspotTicketProperties model module.
   * @module model/ModelsHubspotTicketProperties
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsHubspotTicketProperties</code>.
   * @alias module:model/ModelsHubspotTicketProperties
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsHubspotTicketProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsHubspotTicketProperties} obj Optional instance to populate.
   * @return {module:model/ModelsHubspotTicketProperties} The populated <code>ModelsHubspotTicketProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('createdate'))
        obj.createdate = ApiClient.convertToType(data['createdate'], 'String');
      if (data.hasOwnProperty('hs_pipeline'))
        obj.hsPipeline = ApiClient.convertToType(data['hs_pipeline'], 'String');
      if (data.hasOwnProperty('hs_pipeline_stage'))
        obj.hsPipelineStage = ApiClient.convertToType(data['hs_pipeline_stage'], 'String');
      if (data.hasOwnProperty('hs_ticket_category'))
        obj.hsTicketCategory = ApiClient.convertToType(data['hs_ticket_category'], 'String');
      if (data.hasOwnProperty('hs_ticket_priority'))
        obj.hsTicketPriority = ApiClient.convertToType(data['hs_ticket_priority'], 'String');
      if (data.hasOwnProperty('linear_issue'))
        obj.linearIssue = ApiClient.convertToType(data['linear_issue'], 'String');
      if (data.hasOwnProperty('linear_uuid'))
        obj.linearUuid = ApiClient.convertToType(data['linear_uuid'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {String} createdate
   */
  exports.prototype.createdate = undefined;

  /**
   * @member {String} hsPipeline
   */
  exports.prototype.hsPipeline = undefined;

  /**
   * @member {String} hsPipelineStage
   */
  exports.prototype.hsPipelineStage = undefined;

  /**
   * @member {String} hsTicketCategory
   */
  exports.prototype.hsTicketCategory = undefined;

  /**
   * @member {String} hsTicketPriority
   */
  exports.prototype.hsTicketPriority = undefined;

  /**
   * @member {String} linearIssue
   */
  exports.prototype.linearIssue = undefined;

  /**
   * @member {String} linearUuid
   */
  exports.prototype.linearUuid = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;


  return exports;

}));
