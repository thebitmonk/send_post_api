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
import ModelsIEMember from './ModelsIEMember';

/**
 * The ModelsEComment model module.
 * @module model/ModelsEComment
 * @version 1.0.0
 */
class ModelsEComment {
    /**
     * Constructs a new <code>ModelsEComment</code>.
     * @alias module:model/ModelsEComment
     */
    constructor() { 
        
        ModelsEComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsEComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsEComment} obj Optional instance to populate.
     * @return {module:model/ModelsEComment} The populated <code>ModelsEComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsEComment();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ModelsIEMember.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsEComment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsEComment</code>.
     */
    static validateJSON(data) {
        // validate the optional field `author`
        if (data['author']) { // data not null
          ModelsIEMember.validateJSON(data['author']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }

        return true;
    }


}



/**
 * @member {module:model/ModelsIEMember} author
 */
ModelsEComment.prototype['author'] = undefined;

/**
 * @member {String} content
 */
ModelsEComment.prototype['content'] = undefined;






export default ModelsEComment;

