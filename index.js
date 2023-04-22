const https = require('https');
const express = require('express');
const app = express();


function header_data(channel_id) {
    return {
      "content-type": "application/json",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.48",
      "authorization": "NjI2NjM3NTExMjA0MDEyMDMy.G4KRRc._Wbjw_gtHKDeGk1g2Py2jV0KoaE9AiCOhs09go",
      "host": "discordapp.com",
      "referrer":https://discord.com/channels/1006098878329794611/${channel_id}
    }
}


function get_connection(){
    return https.request({
        host:'discordapp.com',
        port: 443
    });
}


function send_message(conn, channel_id, message_data){
    conn.request("POST", /api/v6/channels/${channel_id}/messages, message_data, header_data(channel_id), res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            if (res.statusCode < 300 && res.statusCode >= 199) {
                console.log('Message sent!');
            } else {
                console.error(Received HTTP ${res.statusCode}: ${res.statusMessage});
            }
        })


})
.end();       

}


function main_task(msg, channel_id){
    const message_data = JSON.stringify({
      "content": msg,
      "tts": "false",
    })


send_message(get_connection(), channel_id, message_data);

}


app.get('/work', function(req, res){
    let message = "!work";
    let messages = 48;
    let main_wait = 3610;
    let human_margin = 0;
    console.log();
    for (let i = 0; i < messages; i++) {
        main_task(message, '1093361898847744010');
        console.log(Estimated time to complete: ${Math.floor((messages-i) * (human_margin / 2 + main_wait) / 60)} minutes.);
        console.log(Iteration ${i} complete.\n)
        sleep(main_wait);
        sleep(Math.random() * human_margin);
    }
    console.log(Work complete! ${messages} messages sent.);
});


app.get('/daily', function(req, res){
    let message = "!daily";
    let messages = 2;
    let main_wait = 86400;
    let human_margin = 0;
    console.log();
    for (let i = 0; i < messages; i++) {
        main_task(message, '1093361563706077184');
        console.log(Estimated time to complete: ${Math.floor((messages-i) * (human_margin / 2 + main_wait) / 60)} minutes.);
        console.log(Iteration ${i} complete.\n)
        sleep(main_wait);
        sleep(Math.random() * human_margin);
    }
    console.log(Daily complete! ${messages} messages sent.);
});

app.get('/dice', function(req, res){
    let message = "!dice 300";
    let messages = 96;
    let main_wait = 1800;
    let human_margin = 0;
    console.log();
    for (let i = 0; i < messages; i++) {
        main_task(message, '1093362410854809620');
        console.log(Estimated time to complete: ${Math.floor((messages-i) * (human_margin / 2 + main_wait) / 60)} minutes.);
        console.log(Iteration ${i} complete.\n)
        sleep(main_wait);
        sleep(Math.random() * human_margin);
    }
    console.log(Dice complete! ${messages} messages sent.);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(App listening on port ${port});
});
