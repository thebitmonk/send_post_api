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

/**
 * The ModelsMember model module.
 * @module model/ModelsMember
 * @version 1.0.0
 */
class ModelsMember {
    /**
     * Constructs a new <code>ModelsMember</code>.
     * @alias module:model/ModelsMember
     */
    constructor() { 
        
        ModelsMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsMember} obj Optional instance to populate.
     * @return {module:model/ModelsMember} The populated <code>ModelsMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsMember();

            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isForbidden')) {
                obj['isForbidden'] = ApiClient.convertToType(data['isForbidden'], 'Boolean');
            }
            if (data.hasOwnProperty('isVerified')) {
                obj['isVerified'] = ApiClient.convertToType(data['isVerified'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('onboardQAnswered')) {
                obj['onboardQAnswered'] = ApiClient.convertToType(data['onboardQAnswered'], 'Boolean');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsMember</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsMember</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} companyName
 */
ModelsMember.prototype['companyName'] = undefined;

/**
 * @member {Number} created
 */
ModelsMember.prototype['created'] = undefined;

/**
 * @member {String} email
 */
ModelsMember.prototype['email'] = undefined;

/**
 * @member {Number} id
 */
ModelsMember.prototype['id'] = undefined;

/**
 * @member {Boolean} isForbidden
 */
ModelsMember.prototype['isForbidden'] = undefined;

/**
 * @member {Boolean} isVerified
 */
ModelsMember.prototype['isVerified'] = undefined;

/**
 * @member {String} name
 */
ModelsMember.prototype['name'] = undefined;

/**
 * @member {Boolean} onboardQAnswered
 */
ModelsMember.prototype['onboardQAnswered'] = undefined;

/**
 * @member {String} phoneNumber
 */
ModelsMember.prototype['phoneNumber'] = undefined;

/**
 * @member {String} url
 */
ModelsMember.prototype['url'] = undefined;






export default ModelsMember;

