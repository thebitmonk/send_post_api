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
 * Swagger Codegen version: 2.4.39
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
    instance = new SendPostApi.AccounteventApi();
  });

  describe('(package)', function() {
    describe('AccounteventApi', function() {
      describe('eventRouterCountAllEventsFromAAccountForAGivenTimeRange', function() {
        it('should call eventRouterCountAllEventsFromAAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterCountAllEventsFromAAccountForAGivenTimeRange call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.search = "search_example";
          opts.type = "type_example";
          opts.from = "from_example";
          opts.to = "to_example";
          opts.source = "source_example";
          opts.sourceId = "sourceId_example";

          instance.eventRouterCountAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterExportAllEventsFromAAccountForAGivenTimeRange', function() {
        it('should call eventRouterExportAllEventsFromAAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterExportAllEventsFromAAccountForAGivenTimeRange call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.from = "from_example";
          opts.to = "to_example";
          opts.source = "source_example";
          opts.sourceId = "sourceId_example";

          instance.eventRouterExportAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelExport);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGet', function() {
        it('should call eventRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var eventId = "eventId_example";

          instance.eventRouterGet(xAccountApiKey, eventId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsQEvent);
            expect(data.accountID).to.be.a('number');
            expect(data.accountID).to.be("0");
            expect(data.domainID).to.be.a('number');
            expect(data.domainID).to.be("0");
            expect(data.eventID).to.be.a('string');
            expect(data.eventID).to.be("");
            expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                  expect(data.eventMetadata.clickedURL).to.be.a('string');
              expect(data.eventMetadata.clickedURL).to.be("");
              expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                    expect(data.eventMetadata.device.family).to.be.a('string');
                expect(data.eventMetadata.device.family).to.be("");
              expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                    expect(data.eventMetadata.geo.cityID).to.be.a('number');
                expect(data.eventMetadata.geo.cityID).to.be(0);
                expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                expect(data.eventMetadata.geo.continentCode).to.be("");
                expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                expect(data.eventMetadata.geo.countryCode).to.be("");
                expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                expect(data.eventMetadata.geo.postalCode).to.be("");
                expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                expect(data.eventMetadata.geo.timeZone).to.be("");
              expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                    expect(data.eventMetadata.os.family).to.be.a('string');
                expect(data.eventMetadata.os.family).to.be("");
                expect(data.eventMetadata.os.major).to.be.a('string');
                expect(data.eventMetadata.os.major).to.be("");
                expect(data.eventMetadata.os.minor).to.be.a('string');
                expect(data.eventMetadata.os.minor).to.be("");
                expect(data.eventMetadata.os.patch).to.be.a('string');
                expect(data.eventMetadata.os.patch).to.be("");
                expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                expect(data.eventMetadata.os.patchMinor).to.be("");
              expect(data.eventMetadata.rawUserAgent).to.be.a('string');
              expect(data.eventMetadata.rawUserAgent).to.be("");
              expect(data.eventMetadata.smtpCode).to.be.a('number');
              expect(data.eventMetadata.smtpCode).to.be("0");
              expect(data.eventMetadata.smtpDescription).to.be.a('string');
              expect(data.eventMetadata.smtpDescription).to.be("");
              expect(data.eventMetadata.trackedIP).to.be.a('string');
              expect(data.eventMetadata.trackedIP).to.be("");
              expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                    expect(data.eventMetadata.userAgent.family).to.be.a('string');
                expect(data.eventMetadata.userAgent.family).to.be("");
                expect(data.eventMetadata.userAgent.major).to.be.a('string');
                expect(data.eventMetadata.userAgent.major).to.be("");
                expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                expect(data.eventMetadata.userAgent.minor).to.be("");
                expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                expect(data.eventMetadata.userAgent.patch).to.be("");
            expect(data.from).to.be.a('string');
            expect(data.from).to.be("");
            expect(data.fromName).to.be.a('string');
            expect(data.fromName).to.be("");
            expect(data.groups).to.be.a(Object);
            expect(data.groups).to.be();
            expect(data.ipID).to.be.a('number');
            expect(data.ipID).to.be("0");
            expect(data.ipPoolID).to.be.a('number');
            expect(data.ipPoolID).to.be("0");
            expect(data.messageID).to.be.a('string');
            expect(data.messageID).to.be("");
            expect(data.messageSubject).to.be.a('string');
            expect(data.messageSubject).to.be("");
            expect(data.messageType).to.be.a('string');
            expect(data.messageType).to.be("");
            expect(data.smtpCode).to.be.a('number');
            expect(data.smtpCode).to.be("0");
            expect(data.smtpDescription).to.be.a('string');
            expect(data.smtpDescription).to.be("");
            expect(data.subAccountID).to.be.a('number');
            expect(data.subAccountID).to.be("0");
            expect(data.submittedAt).to.be.a('number');
            expect(data.submittedAt).to.be("0");
            expect(data.to).to.be.a('string');
            expect(data.to).to.be("");
            expect(data.toName).to.be.a('string');
            expect(data.toName).to.be("");
            expect(data.tpspId).to.be.a('number');
            expect(data.tpspId).to.be("0");
            expect(data.type).to.be.a('number');
            expect(data.type).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGetAllEventsFromAAccountForAGivenTimeRange', function() {
        it('should call eventRouterGetAllEventsFromAAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGetAllEventsFromAAccountForAGivenTimeRange call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";
          opts.type = "type_example";
          opts.from = "from_example";
          opts.to = "to_example";
          opts.source = "source_example";
          opts.sourceId = "sourceId_example";

          instance.eventRouterGetAllEventsFromAAccountForAGivenTimeRange(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsQEvent);
              expect(data.accountID).to.be.a('number');
              expect(data.accountID).to.be("0");
              expect(data.domainID).to.be.a('number');
              expect(data.domainID).to.be("0");
              expect(data.eventID).to.be.a('string');
              expect(data.eventID).to.be("");
              expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                    expect(data.eventMetadata.clickedURL).to.be.a('string');
                expect(data.eventMetadata.clickedURL).to.be("");
                expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                      expect(data.eventMetadata.device.family).to.be.a('string');
                  expect(data.eventMetadata.device.family).to.be("");
                expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                      expect(data.eventMetadata.geo.cityID).to.be.a('number');
                  expect(data.eventMetadata.geo.cityID).to.be(0);
                  expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                  expect(data.eventMetadata.geo.continentCode).to.be("");
                  expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                  expect(data.eventMetadata.geo.countryCode).to.be("");
                  expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                  expect(data.eventMetadata.geo.postalCode).to.be("");
                  expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                  expect(data.eventMetadata.geo.timeZone).to.be("");
                expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                      expect(data.eventMetadata.os.family).to.be.a('string');
                  expect(data.eventMetadata.os.family).to.be("");
                  expect(data.eventMetadata.os.major).to.be.a('string');
                  expect(data.eventMetadata.os.major).to.be("");
                  expect(data.eventMetadata.os.minor).to.be.a('string');
                  expect(data.eventMetadata.os.minor).to.be("");
                  expect(data.eventMetadata.os.patch).to.be.a('string');
                  expect(data.eventMetadata.os.patch).to.be("");
                  expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                  expect(data.eventMetadata.os.patchMinor).to.be("");
                expect(data.eventMetadata.rawUserAgent).to.be.a('string');
                expect(data.eventMetadata.rawUserAgent).to.be("");
                expect(data.eventMetadata.smtpCode).to.be.a('number');
                expect(data.eventMetadata.smtpCode).to.be("0");
                expect(data.eventMetadata.smtpDescription).to.be.a('string');
                expect(data.eventMetadata.smtpDescription).to.be("");
                expect(data.eventMetadata.trackedIP).to.be.a('string');
                expect(data.eventMetadata.trackedIP).to.be("");
                expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                      expect(data.eventMetadata.userAgent.family).to.be.a('string');
                  expect(data.eventMetadata.userAgent.family).to.be("");
                  expect(data.eventMetadata.userAgent.major).to.be.a('string');
                  expect(data.eventMetadata.userAgent.major).to.be("");
                  expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                  expect(data.eventMetadata.userAgent.minor).to.be("");
                  expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                  expect(data.eventMetadata.userAgent.patch).to.be("");
              expect(data.from).to.be.a('string');
              expect(data.from).to.be("");
              expect(data.fromName).to.be.a('string');
              expect(data.fromName).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.ipPoolID).to.be.a('number');
              expect(data.ipPoolID).to.be("0");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.messageSubject).to.be.a('string');
              expect(data.messageSubject).to.be("");
              expect(data.messageType).to.be.a('string');
              expect(data.messageType).to.be("");
              expect(data.smtpCode).to.be.a('number');
              expect(data.smtpCode).to.be("0");
              expect(data.smtpDescription).to.be.a('string');
              expect(data.smtpDescription).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.to).to.be.a('string');
              expect(data.to).to.be("");
              expect(data.toName).to.be.a('string');
              expect(data.toName).to.be("");
              expect(data.tpspId).to.be.a('number');
              expect(data.tpspId).to.be("0");
              expect(data.type).to.be.a('number');
              expect(data.type).to.be("0");
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
