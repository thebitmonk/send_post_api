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
 * Swagger Codegen version: 2.4.27
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
    instance = new SendPostApi.AccountrecipientApi();
  });

  describe('(package)', function() {
    describe('AccountrecipientApi', function() {
      describe('recipientRouterGetAllMessagesForARecipient', function() {
        it('should call recipientRouterGetAllMessagesForARecipient successfully', function(done) {
          // TODO: uncomment, update parameter values for recipientRouterGetAllMessagesForARecipient call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var recipient = "recipient_example";

          instance.recipientRouterGetAllMessagesForARecipient(xAccountApiKey, recipient, function(error, data, response) {
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
              expect(data.accountID).to.be.a('number');
              expect(data.accountID).to.be("0");
              expect(data.ampBody).to.be.a('string');
              expect(data.ampBody).to.be("");
              {
                let dataCtr = data.attachments;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsAttachment);
                  expect(data.content).to.be.a('string');
                  expect(data.content).to.be("");
                  expect(data.filename).to.be.a('string');
                  expect(data.filename).to.be("");
  
                        }
              }
              expect(data.attempt).to.be.a('number');
              expect(data.attempt).to.be("0");
              expect(data.customFields).to.be.a(SendPostApi.Model3179900xc00086b140False);
                  expect(data.emailType).to.be.a('string');
              expect(data.emailType).to.be("");
              expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                    expect(data.from.email).to.be.a('string');
                expect(data.from.email).to.be("");
                expect(data.from.name).to.be.a('string');
                expect(data.from.name).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              {
                let dataCtr = data.headerBcc;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                  expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                      expect(data.email).to.be.a('string');
                  expect(data.email).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              {
                let dataCtr = data.headerCc;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                  expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                      expect(data.email).to.be.a('string');
                  expect(data.email).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.headerTo).to.be.a(SendPostApi.ModelsTo);
                    {
                  let dataCtr = data.headerTo.bcc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.headerTo.cc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.headerTo.customFields).to.be.a(SendPostApi.Model1219130xc0005bf200False);
                    expect(data.headerTo.email).to.be.a('string');
                expect(data.headerTo.email).to.be("");
                expect(data.headerTo.name).to.be.a('string');
                expect(data.headerTo.name).to.be("");
              expect(data.headers).to.be.a(Object);
              expect(data.headers).to.be();
              expect(data.htmlBody).to.be.a('string');
              expect(data.htmlBody).to.be("");
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.ipPool).to.be.a('string');
              expect(data.ipPool).to.be("");
              expect(data.localIP).to.be.a('string');
              expect(data.localIP).to.be("");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.preText).to.be.a('string');
              expect(data.preText).to.be("");
              expect(data.publicIP).to.be.a('string');
              expect(data.publicIP).to.be("");
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
                    {
                  let dataCtr = data.to.bcc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.to.cc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.to.customFields).to.be.a(SendPostApi.Model1219130xc0005bf200False);
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
          var xAccountApiKey = "xAccountApiKey_example";
          var recipient = "recipient_example";

          instance.recipientRouterGetAllMessagesForARecipientFromANode(xAccountApiKey, recipient, function(error, data, response) {
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
              expect(data.accountID).to.be.a('number');
              expect(data.accountID).to.be("0");
              expect(data.ampBody).to.be.a('string');
              expect(data.ampBody).to.be("");
              {
                let dataCtr = data.attachments;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsAttachment);
                  expect(data.content).to.be.a('string');
                  expect(data.content).to.be("");
                  expect(data.filename).to.be.a('string');
                  expect(data.filename).to.be("");
  
                        }
              }
              expect(data.attempt).to.be.a('number');
              expect(data.attempt).to.be("0");
              expect(data.customFields).to.be.a(SendPostApi.Model3179900xc00086b140False);
                  expect(data.emailType).to.be.a('string');
              expect(data.emailType).to.be("");
              expect(data.from).to.be.a(SendPostApi.ModelsFrom);
                    expect(data.from.email).to.be.a('string');
                expect(data.from.email).to.be("");
                expect(data.from.name).to.be.a('string');
                expect(data.from.name).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              {
                let dataCtr = data.headerBcc;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                  expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                      expect(data.email).to.be.a('string');
                  expect(data.email).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              {
                let dataCtr = data.headerCc;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                  expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                      expect(data.email).to.be.a('string');
                  expect(data.email).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
  
                        }
              }
              expect(data.headerTo).to.be.a(SendPostApi.ModelsTo);
                    {
                  let dataCtr = data.headerTo.bcc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.headerTo.cc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.headerTo.customFields).to.be.a(SendPostApi.Model1219130xc0005bf200False);
                    expect(data.headerTo.email).to.be.a('string');
                expect(data.headerTo.email).to.be("");
                expect(data.headerTo.name).to.be.a('string');
                expect(data.headerTo.name).to.be("");
              expect(data.headers).to.be.a(Object);
              expect(data.headers).to.be();
              expect(data.htmlBody).to.be.a('string');
              expect(data.htmlBody).to.be("");
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.ipPool).to.be.a('string');
              expect(data.ipPool).to.be("");
              expect(data.localIP).to.be.a('string');
              expect(data.localIP).to.be("");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.preText).to.be.a('string');
              expect(data.preText).to.be("");
              expect(data.publicIP).to.be.a('string');
              expect(data.publicIP).to.be("");
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
                    {
                  let dataCtr = data.to.bcc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                {
                  let dataCtr = data.to.cc;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SendPostApi.ModelsCopyTo);
                    expect(data.customFields).to.be.a(SendPostApi.Model1216320xc0005bf0e0False);
                        expect(data.email).to.be.a('string');
                    expect(data.email).to.be("");
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
    
                          }
                }
                expect(data.to.customFields).to.be.a(SendPostApi.Model1219130xc0005bf200False);
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
