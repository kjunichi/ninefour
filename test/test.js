const assert = require('assert');
const {spawn} = require('child_process');
const tunnel = require('tunnel');
const https = require('https');

// web server
// web client
describe('Connect', () => {
    before(() => {
        spawn('node', ['./main.js']);
    });

    describe('ninefour can https', () => {
        it('should connect and fetch url.', () => {
            const tunnelAg = tunnel.httpsOverHttp({
                proxy: {
                    host: 'localhost',
                    port: 8080
                }
            });

            const options = {
                host: 'www.google.co.jp',
                port: 443,
                path: '/',
                agent: tunnelAg
            };
            https.get(options, (res) => {
                let html="";
                res.on('data', function (chunk) {
                    //console.log(chunk.toString());
                    html += data;
                });
                res.on('end', ()=>{
                    assert.isAbove(-1,html.length);
                })
            })

        });
    });
});