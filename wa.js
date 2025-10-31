const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },

   webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2419.6.html',
},
    authStrategy: new LocalAuth({ clientId: "client" })
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const isGroups = message.from.endsWith('@g.us');
    if (isGroups) return;

    const msg = message.body.toLowerCase();

    if (msg.includes('ky')) {
        message.reply('iyaaa'); 
    // } else if (msg.includes('halo')) {
    //     message.reply('halooo juga!     ');
    // } else if (msg.includes('siapaaaa kamu')) {
    //     message.reply('aku bot buatan kamu ');
    // } else if (msg.includes('udah makan')) {
    //     message.reply('belum... mau makan bareng? ');
    // } else if (msg.includes('lagi apa')) {
    //     message.reply('lagi mikirin kamu ');
    }
});
client.initialize();