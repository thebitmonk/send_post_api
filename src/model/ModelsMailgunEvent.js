/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ModelsMailgunClientInfo from './ModelsMailgunClientInfo';
import ModelsMailgunDeliveryStatus from './ModelsMailgunDeliveryStatus';
import ModelsMailgunUserVariables from './ModelsMailgunUserVariables';

/**
 * The ModelsMailgunEvent model module.
 * @module model/ModelsMailgunEvent
 * @version 1.0.0
 */
class ModelsMailgunEvent {
    /**
     * Constructs a new <code>ModelsMailgunEvent</code>.
     * @alias module:model/ModelsMailgunEvent
     */
    constructor() { 
        
        ModelsMailgunEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsMailgunEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsMailgunEvent} obj Optional instance to populate.
     * @return {module:model/ModelsMailgunEvent} The populated <code>ModelsMailgunEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsMailgunEvent();

            if (data.hasOwnProperty('client-info')) {
                obj['client-info'] = ModelsMailgunClientInfo.constructFromObject(data['client-info']);
            }
            if (data.hasOwnProperty('delivery-status')) {
                obj['delivery-status'] = ModelsMailgunDeliveryStatus.constructFromObject(data['delivery-status']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user-variables')) {
                obj['user-variables'] = ModelsMailgunUserVariables.constructFromObject(data['user-variables']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsMailgunEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsMailgunEvent</code>.
     */
    static validateJSON(data) {
        // validate the optional field `client-info`
        if (data['client-info']) { // data not null
          ModelsMailgunClientInfo.validateJSON(data['client-info']);
        }
        // validate the optional field `delivery-status`
        if (data['delivery-status']) { // data not null
          ModelsMailgunDeliveryStatus.validateJSON(data['delivery-status']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // ensure the json data is a string
        if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
            throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // validate the optional field `user-variables`
        if (data['user-variables']) { // data not null
          ModelsMailgunUserVariables.validateJSON(data['user-variables']);
        }

        return true;
    }


}



/**
 * @member {module:model/ModelsMailgunClientInfo} client-info
 */
ModelsMailgunEvent.prototype['client-info'] = undefined;

/**
 * @member {module:model/ModelsMailgunDeliveryStatus} delivery-status
 */
ModelsMailgunEvent.prototype['delivery-status'] = undefined;

/**
 * @member {String} event
 */
ModelsMailgunEvent.prototype['event'] = undefined;

/**
 * @member {String} id
 */
ModelsMailgunEvent.prototype['id'] = undefined;

/**
 * @member {String} ip
 */
ModelsMailgunEvent.prototype['ip'] = undefined;

/**
 * @member {String} recipient
 */
ModelsMailgunEvent.prototype['recipient'] = undefined;

/**
 * @member {String} severity
 */
ModelsMailgunEvent.prototype['severity'] = undefined;

/**
 * @member {Number} timestamp
 */
ModelsMailgunEvent.prototype['timestamp'] = undefined;

/**
 * @member {String} url
 */
ModelsMailgunEvent.prototype['url'] = undefined;

/**
 * @member {module:model/ModelsMailgunUserVariables} user-variables
 */
ModelsMailgunEvent.prototype['user-variables'] = undefined;






export default ModelsMailgunEvent;

