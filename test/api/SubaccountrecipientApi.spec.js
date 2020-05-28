/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.SubaccountrecipientApi();
  });

  describe('(package)', function() {
    describe('SubaccountrecipientApi', function() {
      describe('recipientRouterGetAllMessagesForARecipient', function() {
        it('should call recipientRouterGetAllMessagesForARecipient successfully', function(done) {
          // TODO: uncomment, update parameter values for recipientRouterGetAllMessagesForARecipient call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var recipient = "recipient_example";

          instance.recipientRouterGetAllMessagesForARecipient(xSubAccountApiKey, recipient, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEmailMessage);
              expect(data.customFields).to.be.a(Object);
              expect(data.customFields).to.be();
              expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                    expect(data.from.email).to.be.a('string');
                expect(data.from.email).to.be("");
                expect(data.from.name).to.be.a('string');
                expect(data.from.name).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.headers).to.be.a(Object);
              expect(data.headers).to.be();
              expect(data.htmlBody).to.be.a('string');
              expect(data.htmlBody).to.be("");
              expect(data.ipPool).to.be.a('string');
              expect(data.ipPool).to.be("");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.preText).to.be.a('string');
              expect(data.preText).to.be("");
              expect(data.replyTo).to.be.a(SendPostApi.ModelsReplyTo);
                    expect(data.replyTo.email).to.be.a('string');
                expect(data.replyTo.email).to.be("");
                expect(data.replyTo.name).to.be.a('string');
                expect(data.replyTo.name).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.subject).to.be.a('string');
              expect(data.subject).to.be("");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.textBody).to.be.a('string');
              expect(data.textBody).to.be("");
              expect(data.to).to.be.a(SendPostApi.ModelsTo);
                    expect(data.to.customFields).to.be.a(Object);
                expect(data.to.customFields).to.be();
                expect(data.to.email).to.be.a('string');
                expect(data.to.email).to.be("");
                expect(data.to.name).to.be.a('string');
                expect(data.to.name).to.be("");
              expect(data.trackClicks).to.be.a('boolean');
              expect(data.trackClicks).to.be(false);
              expect(data.trackOpens).to.be.a('boolean');
              expect(data.trackOpens).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('recipientRouterGetAllMessagesForARecipientFromANode', function() {
        it('should call recipientRouterGetAllMessagesForARecipientFromANode successfully', function(done) {
          // TODO: uncomment, update parameter values for recipientRouterGetAllMessagesForARecipientFromANode call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var subAccountId = 789;
          var recipient = "recipient_example";

          instance.recipientRouterGetAllMessagesForARecipientFromANode(xSubAccountApiKey, subAccountId, recipient, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEmailMessage);
              expect(data.customFields).to.be.a(Object);
              expect(data.customFields).to.be();
              expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                    expect(data.from.email).to.be.a('string');
                expect(data.from.email).to.be("");
                expect(data.from.name).to.be.a('string');
                expect(data.from.name).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.headers).to.be.a(Object);
              expect(data.headers).to.be();
              expect(data.htmlBody).to.be.a('string');
              expect(data.htmlBody).to.be("");
              expect(data.ipPool).to.be.a('string');
              expect(data.ipPool).to.be("");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.preText).to.be.a('string');
              expect(data.preText).to.be("");
              expect(data.replyTo).to.be.a(SendPostApi.ModelsReplyTo);
                    expect(data.replyTo.email).to.be.a('string');
                expect(data.replyTo.email).to.be("");
                expect(data.replyTo.name).to.be.a('string');
                expect(data.replyTo.name).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.subject).to.be.a('string');
              expect(data.subject).to.be("");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.textBody).to.be.a('string');
              expect(data.textBody).to.be("");
              expect(data.to).to.be.a(SendPostApi.ModelsTo);
                    expect(data.to.customFields).to.be.a(Object);
                expect(data.to.customFields).to.be();
                expect(data.to.email).to.be.a('string');
                expect(data.to.email).to.be("");
                expect(data.to.name).to.be.a('string');
                expect(data.to.name).to.be("");
              expect(data.trackClicks).to.be.a('boolean');
              expect(data.trackClicks).to.be(false);
              expect(data.trackOpens).to.be.a('boolean');
              expect(data.trackOpens).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
