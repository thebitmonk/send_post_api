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

/**
 * The ModelsMemberRole model module.
 * @module model/ModelsMemberRole
 * @version 1.0.0
 */
export class ModelsMemberRole {
  /**
   * Constructs a new <code>ModelsMemberRole</code>.
   * @alias module:model/ModelsMemberRole
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsMemberRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMemberRole} obj Optional instance to populate.
   * @return {module:model/ModelsMemberRole} The populated <code>ModelsMemberRole</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsMemberRole();
    }
    return obj;
  }
}
