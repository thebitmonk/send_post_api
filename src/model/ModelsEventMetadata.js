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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {ModelsCity} from './ModelsCity';
import {UaparserDevice} from './UaparserDevice';
import {UaparserOs} from './UaparserOs';
import {UaparserUserAgent} from './UaparserUserAgent';

/**
 * The ModelsEventMetadata model module.
 * @module model/ModelsEventMetadata
 * @version 1.0.0
 */
export class ModelsEventMetadata {
  /**
   * Constructs a new <code>ModelsEventMetadata</code>.
   * @alias module:model/ModelsEventMetadata
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsEventMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEventMetadata} obj Optional instance to populate.
   * @return {module:model/ModelsEventMetadata} The populated <code>ModelsEventMetadata</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsEventMetadata();
      if (data.hasOwnProperty('clickedURL'))
        obj.clickedURL = ApiClient.convertToType(data['clickedURL'], 'String');
      if (data.hasOwnProperty('device'))
        obj.device = UaparserDevice.constructFromObject(data['device']);
      if (data.hasOwnProperty('geo'))
        obj.geo = ModelsCity.constructFromObject(data['geo']);
      if (data.hasOwnProperty('os'))
        obj.os = UaparserOs.constructFromObject(data['os']);
      if (data.hasOwnProperty('smtpCode'))
        obj.smtpCode = ApiClient.convertToType(data['smtpCode'], 'Number');
      if (data.hasOwnProperty('smtpDescription'))
        obj.smtpDescription = ApiClient.convertToType(data['smtpDescription'], 'String');
      if (data.hasOwnProperty('userAgent'))
        obj.userAgent = UaparserUserAgent.constructFromObject(data['userAgent']);
    }
    return obj;
  }
}

/**
 * @member {String} clickedURL
 */
ModelsEventMetadata.prototype.clickedURL = undefined;

/**
 * @member {module:model/UaparserDevice} device
 */
ModelsEventMetadata.prototype.device = undefined;

/**
 * @member {module:model/ModelsCity} geo
 */
ModelsEventMetadata.prototype.geo = undefined;

/**
 * @member {module:model/UaparserOs} os
 */
ModelsEventMetadata.prototype.os = undefined;

/**
 * @member {Number} smtpCode
 */
ModelsEventMetadata.prototype.smtpCode = undefined;

/**
 * @member {String} smtpDescription
 */
ModelsEventMetadata.prototype.smtpDescription = undefined;

/**
 * @member {module:model/UaparserUserAgent} userAgent
 */
ModelsEventMetadata.prototype.userAgent = undefined;

