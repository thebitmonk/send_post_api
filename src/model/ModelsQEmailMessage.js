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
import ModelsAttachment from './ModelsAttachment';
import ModelsCopyTo from './ModelsCopyTo';
import ModelsFrom from './ModelsFrom';
import ModelsReplyTo from './ModelsReplyTo';
import ModelsTo from './ModelsTo';

/**
 * The ModelsQEmailMessage model module.
 * @module model/ModelsQEmailMessage
 * @version 1.0.0
 */
class ModelsQEmailMessage {
    /**
     * Constructs a new <code>ModelsQEmailMessage</code>.
     * @alias module:model/ModelsQEmailMessage
     */
    constructor() { 
        
        ModelsQEmailMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsQEmailMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsQEmailMessage} obj Optional instance to populate.
     * @return {module:model/ModelsQEmailMessage} The populated <code>ModelsQEmailMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsQEmailMessage();

            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
            }
            if (data.hasOwnProperty('ampBody')) {
                obj['ampBody'] = ApiClient.convertToType(data['ampBody'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [ModelsAttachment]);
            }
            if (data.hasOwnProperty('attempt')) {
                obj['attempt'] = ApiClient.convertToType(data['attempt'], 'Number');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
            }
            if (data.hasOwnProperty('emailType')) {
                obj['emailType'] = ApiClient.convertToType(data['emailType'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ModelsFrom.constructFromObject(data['from']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], Object);
            }
            if (data.hasOwnProperty('headerBcc')) {
                obj['headerBcc'] = ApiClient.convertToType(data['headerBcc'], [ModelsCopyTo]);
            }
            if (data.hasOwnProperty('headerCc')) {
                obj['headerCc'] = ApiClient.convertToType(data['headerCc'], [ModelsCopyTo]);
            }
            if (data.hasOwnProperty('headerTo')) {
                obj['headerTo'] = ModelsTo.constructFromObject(data['headerTo']);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], Object);
            }
            if (data.hasOwnProperty('htmlBody')) {
                obj['htmlBody'] = ApiClient.convertToType(data['htmlBody'], 'String');
            }
            if (data.hasOwnProperty('ipID')) {
                obj['ipID'] = ApiClient.convertToType(data['ipID'], 'Number');
            }
            if (data.hasOwnProperty('ipPool')) {
                obj['ipPool'] = ApiClient.convertToType(data['ipPool'], 'String');
            }
            if (data.hasOwnProperty('localIP')) {
                obj['localIP'] = ApiClient.convertToType(data['localIP'], 'String');
            }
            if (data.hasOwnProperty('messageID')) {
                obj['messageID'] = ApiClient.convertToType(data['messageID'], 'String');
            }
            if (data.hasOwnProperty('preText')) {
                obj['preText'] = ApiClient.convertToType(data['preText'], 'String');
            }
            if (data.hasOwnProperty('publicIP')) {
                obj['publicIP'] = ApiClient.convertToType(data['publicIP'], 'String');
            }
            if (data.hasOwnProperty('replyTo')) {
                obj['replyTo'] = ModelsReplyTo.constructFromObject(data['replyTo']);
            }
            if (data.hasOwnProperty('subAccountID')) {
                obj['subAccountID'] = ApiClient.convertToType(data['subAccountID'], 'Number');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('submittedAt')) {
                obj['submittedAt'] = ApiClient.convertToType(data['submittedAt'], 'Number');
            }
            if (data.hasOwnProperty('textBody')) {
                obj['textBody'] = ApiClient.convertToType(data['textBody'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ModelsTo.constructFromObject(data['to']);
            }
            if (data.hasOwnProperty('trackClicks')) {
                obj['trackClicks'] = ApiClient.convertToType(data['trackClicks'], 'Boolean');
            }
            if (data.hasOwnProperty('trackOpens')) {
                obj['trackOpens'] = ApiClient.convertToType(data['trackOpens'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsQEmailMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsQEmailMessage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ampBody'] && !(typeof data['ampBody'] === 'string' || data['ampBody'] instanceof String)) {
            throw new Error("Expected the field `ampBody` to be a primitive type in the JSON string but got " + data['ampBody']);
        }
        if (data['attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attachments'])) {
                throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
            }
            // validate the optional field `attachments` (array)
            for (const item of data['attachments']) {
                ModelsAttachment.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['emailType'] && !(typeof data['emailType'] === 'string' || data['emailType'] instanceof String)) {
            throw new Error("Expected the field `emailType` to be a primitive type in the JSON string but got " + data['emailType']);
        }
        // validate the optional field `from`
        if (data['from']) { // data not null
          ModelsFrom.validateJSON(data['from']);
        }
        if (data['headerBcc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['headerBcc'])) {
                throw new Error("Expected the field `headerBcc` to be an array in the JSON data but got " + data['headerBcc']);
            }
            // validate the optional field `headerBcc` (array)
            for (const item of data['headerBcc']) {
                ModelsCopyTo.validateJSON(item);
            };
        }
        if (data['headerCc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['headerCc'])) {
                throw new Error("Expected the field `headerCc` to be an array in the JSON data but got " + data['headerCc']);
            }
            // validate the optional field `headerCc` (array)
            for (const item of data['headerCc']) {
                ModelsCopyTo.validateJSON(item);
            };
        }
        // validate the optional field `headerTo`
        if (data['headerTo']) { // data not null
          ModelsTo.validateJSON(data['headerTo']);
        }
        // ensure the json data is a string
        if (data['htmlBody'] && !(typeof data['htmlBody'] === 'string' || data['htmlBody'] instanceof String)) {
            throw new Error("Expected the field `htmlBody` to be a primitive type in the JSON string but got " + data['htmlBody']);
        }
        // ensure the json data is a string
        if (data['ipPool'] && !(typeof data['ipPool'] === 'string' || data['ipPool'] instanceof String)) {
            throw new Error("Expected the field `ipPool` to be a primitive type in the JSON string but got " + data['ipPool']);
        }
        // ensure the json data is a string
        if (data['localIP'] && !(typeof data['localIP'] === 'string' || data['localIP'] instanceof String)) {
            throw new Error("Expected the field `localIP` to be a primitive type in the JSON string but got " + data['localIP']);
        }
        // ensure the json data is a string
        if (data['messageID'] && !(typeof data['messageID'] === 'string' || data['messageID'] instanceof String)) {
            throw new Error("Expected the field `messageID` to be a primitive type in the JSON string but got " + data['messageID']);
        }
        // ensure the json data is a string
        if (data['preText'] && !(typeof data['preText'] === 'string' || data['preText'] instanceof String)) {
            throw new Error("Expected the field `preText` to be a primitive type in the JSON string but got " + data['preText']);
        }
        // ensure the json data is a string
        if (data['publicIP'] && !(typeof data['publicIP'] === 'string' || data['publicIP'] instanceof String)) {
            throw new Error("Expected the field `publicIP` to be a primitive type in the JSON string but got " + data['publicIP']);
        }
        // validate the optional field `replyTo`
        if (data['replyTo']) { // data not null
          ModelsReplyTo.validateJSON(data['replyTo']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['textBody'] && !(typeof data['textBody'] === 'string' || data['textBody'] instanceof String)) {
            throw new Error("Expected the field `textBody` to be a primitive type in the JSON string but got " + data['textBody']);
        }
        // validate the optional field `to`
        if (data['to']) { // data not null
          ModelsTo.validateJSON(data['to']);
        }

        return true;
    }


}



/**
 * @member {Number} accountID
 */
ModelsQEmailMessage.prototype['accountID'] = undefined;

/**
 * @member {String} ampBody
 */
ModelsQEmailMessage.prototype['ampBody'] = undefined;

/**
 * @member {Array.<module:model/ModelsAttachment>} attachments
 */
ModelsQEmailMessage.prototype['attachments'] = undefined;

/**
 * @member {Number} attempt
 */
ModelsQEmailMessage.prototype['attempt'] = undefined;

/**
 * @member {Object} customFields
 */
ModelsQEmailMessage.prototype['customFields'] = undefined;

/**
 * @member {String} emailType
 */
ModelsQEmailMessage.prototype['emailType'] = undefined;

/**
 * @member {module:model/ModelsFrom} from
 */
ModelsQEmailMessage.prototype['from'] = undefined;

/**
 * @member {Object} groups
 */
ModelsQEmailMessage.prototype['groups'] = undefined;

/**
 * @member {Array.<module:model/ModelsCopyTo>} headerBcc
 */
ModelsQEmailMessage.prototype['headerBcc'] = undefined;

/**
 * @member {Array.<module:model/ModelsCopyTo>} headerCc
 */
ModelsQEmailMessage.prototype['headerCc'] = undefined;

/**
 * @member {module:model/ModelsTo} headerTo
 */
ModelsQEmailMessage.prototype['headerTo'] = undefined;

/**
 * @member {Object} headers
 */
ModelsQEmailMessage.prototype['headers'] = undefined;

/**
 * @member {String} htmlBody
 */
ModelsQEmailMessage.prototype['htmlBody'] = undefined;

/**
 * @member {Number} ipID
 */
ModelsQEmailMessage.prototype['ipID'] = undefined;

/**
 * @member {String} ipPool
 */
ModelsQEmailMessage.prototype['ipPool'] = undefined;

/**
 * @member {String} localIP
 */
ModelsQEmailMessage.prototype['localIP'] = undefined;

/**
 * @member {String} messageID
 */
ModelsQEmailMessage.prototype['messageID'] = undefined;

/**
 * @member {String} preText
 */
ModelsQEmailMessage.prototype['preText'] = undefined;

/**
 * @member {String} publicIP
 */
ModelsQEmailMessage.prototype['publicIP'] = undefined;

/**
 * @member {module:model/ModelsReplyTo} replyTo
 */
ModelsQEmailMessage.prototype['replyTo'] = undefined;

/**
 * @member {Number} subAccountID
 */
ModelsQEmailMessage.prototype['subAccountID'] = undefined;

/**
 * @member {String} subject
 */
ModelsQEmailMessage.prototype['subject'] = undefined;

/**
 * @member {Number} submittedAt
 */
ModelsQEmailMessage.prototype['submittedAt'] = undefined;

/**
 * @member {String} textBody
 */
ModelsQEmailMessage.prototype['textBody'] = undefined;

/**
 * @member {module:model/ModelsTo} to
 */
ModelsQEmailMessage.prototype['to'] = undefined;

/**
 * @member {Boolean} trackClicks
 */
ModelsQEmailMessage.prototype['trackClicks'] = undefined;

/**
 * @member {Boolean} trackOpens
 */
ModelsQEmailMessage.prototype['trackOpens'] = undefined;






export default ModelsQEmailMessage;

