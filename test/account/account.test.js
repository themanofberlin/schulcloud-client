'use strict';

const assert = require('assert');
const app = require('../../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const loginHelper = require('../helper/login-helper');
chai.use(chaiHttp);

describe('Account tests', function () {
    this.timeout(5000);
    before(function (done) {
        this.server = app.listen(3031);
        this.server.once('listening', () => {
            loginHelper.login(app).then(res => {
                this.agent = res.agent;
                done();
            });
        });
    });

    after(function (done) {
        this.server.close(done);
    });

    it('GET /account', function () {
        return new Promise((resolve, reject) => {
            this.agent
                .get('/account/')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.text).to.contain('Dein Account');
                    expect(res.text).to.contain('Vorname');
                    expect(res.text).to.contain('Ida');
                    expect(res.text).to.contain('Nachname');
                    expect(res.text).to.contain('Renz');
                    resolve();
                });
        });
    });
});
