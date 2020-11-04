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
 * Swagger Codegen version: 2.4.17
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
    instance = new SendPostApi.AccountinvitationApi();
  });

  describe('(package)', function() {
    describe('AccountinvitationApi', function() {
      describe('invitationRouterCreate', function() {
        it('should call invitationRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for invitationRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsEInvitation();
          body.fromEmail = "";
          body.toEmail = "";

          instance.invitationRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsInvitation);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.role).to.be.a(SendPostApi.ModelsMemberRole);
                expect(data.status).to.be.a(SendPostApi.ModelsInvitationStatus);
                expect(data.toEmail).to.be.a('string');
            expect(data.toEmail).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('invitationRouterDelete', function() {
        it('should call invitationRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for invitationRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var invitationId = 789;

          instance.invitationRouterDelete(xAccountApiKey, invitationId, function(error, data, response) {
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
      describe('invitationRouterGetAll', function() {
        it('should call invitationRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for invitationRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.invitationRouterGetAll(xAccountApiKey, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsInvitation);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.role).to.be.a(SendPostApi.ModelsMemberRole);
                  expect(data.status).to.be.a(SendPostApi.ModelsInvitationStatus);
                  expect(data.toEmail).to.be.a('string');
              expect(data.toEmail).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
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
