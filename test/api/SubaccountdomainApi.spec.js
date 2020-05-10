/*
 * SendPost API
 * SendPost API to transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
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
    instance = new SendPostApi.SubaccountdomainApi();
  });

  describe('(package)', function() {
    describe('SubaccountdomainApi', function() {
      describe('domainRouterCreate', function() {
        it('should call domainRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterCreate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsEDomain();
          body.name = "";

          instance.domainRouterCreate(xSubAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.spf).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.spf.host).to.be.a('string');
              expect(data.spf.host).to.be("");
              expect(data.spf.textValue).to.be.a('string');
              expect(data.spf.textValue).to.be("");
              expect(data.spf.type).to.be.a('string');
              expect(data.spf.type).to.be("");
            expect(data.spfVerified).to.be.a('boolean');
            expect(data.spfVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterDelete', function() {
        it('should call domainRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterDelete call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;

          instance.domainRouterDelete(xSubAccountApiKey, domainId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterGet', function() {
        it('should call domainRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterGet call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;

          instance.domainRouterGet(xSubAccountApiKey, domainId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.spf).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.spf.host).to.be.a('string');
              expect(data.spf.host).to.be("");
              expect(data.spf.textValue).to.be.a('string');
              expect(data.spf.textValue).to.be("");
              expect(data.spf.type).to.be.a('string');
              expect(data.spf.type).to.be("");
            expect(data.spfVerified).to.be.a('boolean');
            expect(data.spfVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterGetAll', function() {
        it('should call domainRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterGetAll call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";

          instance.domainRouterGetAll(xSubAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsDomain);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.dkim.host).to.be.a('string');
                expect(data.dkim.host).to.be("");
                expect(data.dkim.textValue).to.be.a('string');
                expect(data.dkim.textValue).to.be("");
                expect(data.dkim.type).to.be.a('string');
                expect(data.dkim.type).to.be("");
              expect(data.dkimVerified).to.be.a('boolean');
              expect(data.dkimVerified).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.spf).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.spf.host).to.be.a('string');
                expect(data.spf.host).to.be("");
                expect(data.spf.textValue).to.be.a('string');
                expect(data.spf.textValue).to.be("");
                expect(data.spf.type).to.be.a('string');
                expect(data.spf.type).to.be("");
              expect(data.spfVerified).to.be.a('boolean');
              expect(data.spfVerified).to.be(false);
              expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.track.host).to.be.a('string');
                expect(data.track.host).to.be("");
                expect(data.track.textValue).to.be.a('string');
                expect(data.track.textValue).to.be("");
                expect(data.track.type).to.be.a('string');
                expect(data.track.type).to.be("");
              expect(data.trackVerified).to.be.a('boolean');
              expect(data.trackVerified).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterUpdate', function() {
        it('should call domainRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterUpdate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;
          var body = new SendPostApi.ModelsEDomain();
          body.name = "";

          instance.domainRouterUpdate(xSubAccountApiKey, domainId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.spf).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.spf.host).to.be.a('string');
              expect(data.spf.host).to.be("");
              expect(data.spf.textValue).to.be.a('string');
              expect(data.spf.textValue).to.be("");
              expect(data.spf.type).to.be.a('string');
              expect(data.spf.type).to.be("");
            expect(data.spfVerified).to.be.a('boolean');
            expect(data.spfVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

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