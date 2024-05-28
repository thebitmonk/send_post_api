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
 * Swagger Codegen version: 2.4.33
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
    instance = new SendPostApi.SubaccountemailApi();
  });

  describe('(package)', function() {
    describe('SubaccountemailApi', function() {
      describe('emailRouterSendEmail', function() {
        it('should call emailRouterSendEmail successfully', function(done) {
          // TODO: uncomment, update parameter values for emailRouterSendEmail call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsEmailMessage();
          body.ampBody = "";
          body.attachments = [new SendPostApi.ModelsAttachment()];
          body.attachments[0].content = "";
          body.attachments[0].filename = "";
          body.from = new SendPostApi.ModelsFrom();
          body.from.email = "";
          body.from.name = "";
          body.groups = [""];
          body.headers = ;
          body.htmlBody = "";
          body.ippool = "";
          body.preText = "";
          body.replyTo = new SendPostApi.ModelsReplyTo();
          body.replyTo.email = "";
          body.replyTo.name = "";
          body.subject = "";
          body.template = "";
          body.textBody = "";
          body.to = [new SendPostApi.ModelsTo()];
          body.to[0].name = "";
          body.to[0].email = "";
          body.to[0].cc = [new SendPostApi.ModelsCopyTo()];
          body.to[0].cc[0].name = "";
          body.to[0].cc[0].email = "";
          body.to[0].cc[0].customFields = ;
          body.to[0].bcc = [new SendPostApi.ModelsCopyTo()];
          body.to[0].bcc[0].name = "";
          body.to[0].bcc[0].email = "";
          body.to[0].bcc[0].customFields = ;
          body.to[0].customFields = ;
          body.trackClicks = false;
          body.trackOpens = false;
          body.webhookEndpoint = "";
          var opts = {};
          opts.xSendPostMockEmail = true;
          opts.xSendPostMockTimeShift = "xSendPostMockTimeShift_example";

          instance.emailRouterSendEmail(xSubAccountApiKey, body, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsEmailResponse);
              expect(data.errorCode).to.be.a(SendPostApi.ModelsEmailErrorCode);
                  expect(data.message).to.be.a('string');
              expect(data.message).to.be("");
              expect(data.messageId).to.be.a('string');
              expect(data.messageId).to.be("");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.to).to.be.a('string');
              expect(data.to).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('emailRouterSendEmailWithTemplate', function() {
        it('should call emailRouterSendEmailWithTemplate successfully', function(done) {
          // TODO: uncomment, update parameter values for emailRouterSendEmailWithTemplate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsEmailMessage();
          body.ampBody = "";
          body.attachments = [new SendPostApi.ModelsAttachment()];
          body.attachments[0].content = "";
          body.attachments[0].filename = "";
          body.from = new SendPostApi.ModelsFrom();
          body.from.email = "";
          body.from.name = "";
          body.groups = [""];
          body.headers = ;
          body.htmlBody = "";
          body.ippool = "";
          body.preText = "";
          body.replyTo = new SendPostApi.ModelsReplyTo();
          body.replyTo.email = "";
          body.replyTo.name = "";
          body.subject = "";
          body.template = "";
          body.textBody = "";
          body.to = [new SendPostApi.ModelsTo()];
          body.to[0].name = "";
          body.to[0].email = "";
          body.to[0].cc = [new SendPostApi.ModelsCopyTo()];
          body.to[0].cc[0].name = "";
          body.to[0].cc[0].email = "";
          body.to[0].cc[0].customFields = ;
          body.to[0].bcc = [new SendPostApi.ModelsCopyTo()];
          body.to[0].bcc[0].name = "";
          body.to[0].bcc[0].email = "";
          body.to[0].bcc[0].customFields = ;
          body.to[0].customFields = ;
          body.trackClicks = false;
          body.trackOpens = false;
          body.webhookEndpoint = "";

          instance.emailRouterSendEmailWithTemplate(xSubAccountApiKey, body, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsEmailResponse);
              expect(data.errorCode).to.be.a(SendPostApi.ModelsEmailErrorCode);
                  expect(data.message).to.be.a('string');
              expect(data.message).to.be("");
              expect(data.messageId).to.be.a('string');
              expect(data.messageId).to.be("");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.to).to.be.a('string');
              expect(data.to).to.be("");
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
