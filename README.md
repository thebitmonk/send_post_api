# send_post_api

SendPostApi - JavaScript client for send_post_api
SendPost API to send transactional emails reliably
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install send_post_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your send_post_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('send_post_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/send_post_api
then install it via:

```shell
    npm install YOUR_USERNAME/send_post_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SendPostApi = require('send_post_api');

var api = new SendPostApi.AccountgetorcreateApi()

var body = new SendPostApi.ModelsEAccount(); // {ModelsEAccount} The Account content

var xToken = "xToken_example"; // {String} Firebase dynamic token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountRouterCreate(body, xToken, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8080/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SendPostApi.AccountgetorcreateApi* | [**accountRouterCreate**](docs/AccountgetorcreateApi.md#accountRouterCreate) | **POST** /account/getorcreate/ | 
*SendPostApi.AccountipApi* | [**iPRouterAllocateIP**](docs/AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
*SendPostApi.AccountipApi* | [**iPRouterDelete**](docs/AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGet**](docs/AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
*SendPostApi.AccountipApi* | [**iPRouterGetAll**](docs/AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
*SendPostApi.AccountipApi* | [**iPRouterUpdate**](docs/AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 
*SendPostApi.AccountstatApi* | [**accountStatsRouterGetAllAccountStats**](docs/AccountstatApi.md#accountStatsRouterGetAllAccountStats) | **GET** /account/stat/ | 
*SendPostApi.AccountstatApi* | [**accountStatsRouterGetAllAccountStatsByGroup**](docs/AccountstatApi.md#accountStatsRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
*SendPostApi.AccountstatApi* | [**accountStatsRouterGetAllAggregateAccountStats**](docs/AccountstatApi.md#accountStatsRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
*SendPostApi.AccountstatApi* | [**accountStatsRouterGetAllAggregateAccountStatsByGroup**](docs/AccountstatApi.md#accountStatsRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterCreate**](docs/AccountsubaccountApi.md#subAccountRouterCreate) | **POST** /account/subaccount/ | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterDelete**](docs/AccountsubaccountApi.md#subAccountRouterDelete) | **DELETE** /account/subaccount/{subAccountId} | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterGet**](docs/AccountsubaccountApi.md#subAccountRouterGet) | **GET** /account/subaccount/{subAccountId} | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterGetAll**](docs/AccountsubaccountApi.md#subAccountRouterGetAll) | **GET** /account/subaccount/ | 
*SendPostApi.AccountsubaccountApi* | [**subAccountRouterUpdate**](docs/AccountsubaccountApi.md#subAccountRouterUpdate) | **PUT** /account/subaccount/{subAccountId} | 
*SendPostApi.ClusterApi* | [**clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster) | **POST** /cluster/suppression/filter | 
*SendPostApi.ClusterApi* | [**clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster**](docs/ClusterApi.md#clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster) | **DELETE** /cluster/suppression/filter | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterCreate**](docs/SubaccountdomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterDelete**](docs/SubaccountdomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGet**](docs/SubaccountdomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterGetAll**](docs/SubaccountdomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
*SendPostApi.SubaccountdomainApi* | [**domainRouterUpdate**](docs/SubaccountdomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
*SendPostApi.SubaccountemailApi* | [**emailRouterSendEmail**](docs/SubaccountemailApi.md#emailRouterSendEmail) | **POST** /subaccount/email/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGet**](docs/SubaccounteventApi.md#eventRouterGet) | **GET** /subaccount/event/{eventId} | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsFromASubAccountForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsFromASubAccountForAGivenTimeRange) | **GET** /subaccount/event/ | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange**](docs/SubaccounteventApi.md#eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange) | **GET** /subaccount/event/node/{subAccountId} | 
*SendPostApi.SubaccounteventApi* | [**eventRouterGetEventInNode**](docs/SubaccounteventApi.md#eventRouterGetEventInNode) | **GET** /subaccount/event/node/{subAccountId}/{eventId} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterCreate**](docs/SubaccountippoolApi.md#iPPoolRouterCreate) | **POST** /subaccount/ippool/ | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterDelete**](docs/SubaccountippoolApi.md#iPPoolRouterDelete) | **DELETE** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterGet**](docs/SubaccountippoolApi.md#iPPoolRouterGet) | **GET** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterGetAll**](docs/SubaccountippoolApi.md#iPPoolRouterGetAll) | **GET** /subaccount/ippool/ | 
*SendPostApi.SubaccountippoolApi* | [**iPPoolRouterUpdate**](docs/SubaccountippoolApi.md#iPPoolRouterUpdate) | **PUT** /subaccount/ippool/{ippoolid} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGet**](docs/SubaccountmessageApi.md#messageRouterGet) | **GET** /subaccount/message/{messageId} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange**](docs/SubaccountmessageApi.md#messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange) | **GET** /subaccount/message/ | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange**](docs/SubaccountmessageApi.md#messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange) | **GET** /subaccount/message/node/{subAccountId} | 
*SendPostApi.SubaccountmessageApi* | [**messageRouterGetMessageFromNodeById**](docs/SubaccountmessageApi.md#messageRouterGetMessageFromNodeById) | **GET** /subaccount/message/node/{subAccountId}/{messageId} | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterCreate**](docs/SubaccountsenderApi.md#senderRouterCreate) | **POST** /subaccount/sender/ | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterDelete**](docs/SubaccountsenderApi.md#senderRouterDelete) | **DELETE** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterGet**](docs/SubaccountsenderApi.md#senderRouterGet) | **GET** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterGetAll**](docs/SubaccountsenderApi.md#senderRouterGetAll) | **GET** /subaccount/sender/ | 
*SendPostApi.SubaccountsenderApi* | [**senderRouterUpdate**](docs/SubaccountsenderApi.md#senderRouterUpdate) | **PUT** /subaccount/sender/{senderId} | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatsRouterGetAllAggregateSubAccountStats**](docs/SubaccountstatApi.md#subAccountStatsRouterGetAllAggregateSubAccountStats) | **GET** /subaccount/stat/aggregate | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup**](docs/SubaccountstatApi.md#subAccountStatsRouterGetAllAggregateSubAccountStatsByGroup) | **GET** /subaccount/stat/aggregate/group | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatsRouterGetAllSubAccountStats**](docs/SubaccountstatApi.md#subAccountStatsRouterGetAllSubAccountStats) | **GET** /subaccount/stat/ | 
*SendPostApi.SubaccountstatApi* | [**subAccountStatsRouterGetAllSubAccountStatsByGroup**](docs/SubaccountstatApi.md#subAccountStatsRouterGetAllSubAccountStatsByGroup) | **GET** /subaccount/stat/group | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterCreateSuppressions**](docs/SubaccountsuppressionApi.md#suppressionRouterCreateSuppressions) | **POST** /subaccount/suppression/ | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterCreateSuppressionsInSuppressionFilter**](docs/SubaccountsuppressionApi.md#suppressionRouterCreateSuppressionsInSuppressionFilter) | **POST** /subaccount/suppression/filter | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterDeleteSuppression**](docs/SubaccountsuppressionApi.md#suppressionRouterDeleteSuppression) | **DELETE** /subaccount/suppression/ | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterDeleteSuppressionsInSuppressionFilter**](docs/SubaccountsuppressionApi.md#suppressionRouterDeleteSuppressionsInSuppressionFilter) | **DELETE** /subaccount/suppression/filter | 
*SendPostApi.SubaccountsuppressionApi* | [**suppressionRouterGetAllSuppressions**](docs/SubaccountsuppressionApi.md#suppressionRouterGetAllSuppressions) | **GET** /subaccount/suppression/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterCreate**](docs/SubaccountwebhookApi.md#webhookRouterCreate) | **POST** /subaccount/webhook/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterDelete**](docs/SubaccountwebhookApi.md#webhookRouterDelete) | **DELETE** /subaccount/webhook/{webhookId} | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterGet**](docs/SubaccountwebhookApi.md#webhookRouterGet) | **GET** /subaccount/webhook/{webhookId} | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterGetAll**](docs/SubaccountwebhookApi.md#webhookRouterGetAll) | **GET** /subaccount/webhook/ | 
*SendPostApi.SubaccountwebhookApi* | [**webhookRouterUpdate**](docs/SubaccountwebhookApi.md#webhookRouterUpdate) | **PUT** /subaccount/webhook/{webhookId} | 
*SendPostApi.TrackApi* | [**trackRouterTrackEmailOpen**](docs/TrackApi.md#trackRouterTrackEmailOpen) | **GET** /track/open/{subAccountId}/{messageId}/1.png | 
*SendPostApi.TrackApi* | [**trackRouterTrackLinkClick**](docs/TrackApi.md#trackRouterTrackLinkClick) | **GET** /track/click/{subAccountId}/{messageId} | 
*SendPostApi.TrackApi* | [**trackRouterTrackUnsubscribe**](docs/TrackApi.md#trackRouterTrackUnsubscribe) | **GET** /track/unsubscribe/{subAccountId}/{messageId} | 


## Documentation for Models

 - [SendPostApi.Geoip2City](docs/Geoip2City.md)
 - [SendPostApi.ModelsAccount](docs/ModelsAccount.md)
 - [SendPostApi.ModelsDNSRecord](docs/ModelsDNSRecord.md)
 - [SendPostApi.ModelsDeleteResponse](docs/ModelsDeleteResponse.md)
 - [SendPostApi.ModelsDomain](docs/ModelsDomain.md)
 - [SendPostApi.ModelsEAccount](docs/ModelsEAccount.md)
 - [SendPostApi.ModelsEDomain](docs/ModelsEDomain.md)
 - [SendPostApi.ModelsEIP](docs/ModelsEIP.md)
 - [SendPostApi.ModelsEIPPool](docs/ModelsEIPPool.md)
 - [SendPostApi.ModelsESender](docs/ModelsESender.md)
 - [SendPostApi.ModelsESubAccount](docs/ModelsESubAccount.md)
 - [SendPostApi.ModelsEWebhook](docs/ModelsEWebhook.md)
 - [SendPostApi.ModelsEmailErrorCode](docs/ModelsEmailErrorCode.md)
 - [SendPostApi.ModelsEmailMessage](docs/ModelsEmailMessage.md)
 - [SendPostApi.ModelsEmailResponse](docs/ModelsEmailResponse.md)
 - [SendPostApi.ModelsEventMetadata](docs/ModelsEventMetadata.md)
 - [SendPostApi.ModelsEventType](docs/ModelsEventType.md)
 - [SendPostApi.ModelsFrom](docs/ModelsFrom.md)
 - [SendPostApi.ModelsIP](docs/ModelsIP.md)
 - [SendPostApi.ModelsIPPool](docs/ModelsIPPool.md)
 - [SendPostApi.ModelsIPPoolType](docs/ModelsIPPoolType.md)
 - [SendPostApi.ModelsIPType](docs/ModelsIPType.md)
 - [SendPostApi.ModelsQEmailMessage](docs/ModelsQEmailMessage.md)
 - [SendPostApi.ModelsQEvent](docs/ModelsQEvent.md)
 - [SendPostApi.ModelsRDSuppression](docs/ModelsRDSuppression.md)
 - [SendPostApi.ModelsRStats](docs/ModelsRStats.md)
 - [SendPostApi.ModelsRSuppression](docs/ModelsRSuppression.md)
 - [SendPostApi.ModelsReplyTo](docs/ModelsReplyTo.md)
 - [SendPostApi.ModelsSender](docs/ModelsSender.md)
 - [SendPostApi.ModelsStats](docs/ModelsStats.md)
 - [SendPostApi.ModelsSubAccount](docs/ModelsSubAccount.md)
 - [SendPostApi.ModelsSubAccountType](docs/ModelsSubAccountType.md)
 - [SendPostApi.ModelsSuppression](docs/ModelsSuppression.md)
 - [SendPostApi.ModelsSuppressionEmail](docs/ModelsSuppressionEmail.md)
 - [SendPostApi.ModelsSuppressionReason](docs/ModelsSuppressionReason.md)
 - [SendPostApi.ModelsTo](docs/ModelsTo.md)
 - [SendPostApi.ModelsWebhook](docs/ModelsWebhook.md)
 - [SendPostApi.UaparserDevice](docs/UaparserDevice.md)
 - [SendPostApi.UaparserOs](docs/UaparserOs.md)
 - [SendPostApi.UaparserUserAgent](docs/UaparserUserAgent.md)


## Documentation for Authorization

 All endpoints do not require authorization.

