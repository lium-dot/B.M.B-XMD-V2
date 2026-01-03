const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "NOVA~1cUSUBLJ#hACSo8mu_3Up2T4loSVPowMn82ZwShjJp2LRLANk2Y8",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true or false for auto react on status

ANTI_CALL: process.env.ANTI_CALL || "true",
// anticall on/off

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎",
// set the auto reply massage on status reply  

ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat     

WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    

ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 

MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/mxb907.jpg",
// add custom menu and mention reply image url

PREFIX: process.env.PREFIX || "*",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "ησνα-χм∂",
// add bot namw here for menu

STICKER_NAME: process.env.STICKER_NAME || "®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself

OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111",
// add youner number

OWNER_NAME: process.env.OWNER_NAME || "®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "*© ṖᎾᏯƐŔƐD ßY ИᎾ√Λ DƐṖĿᎾYƐD ßY ƓƐИZ ҠƐИYΛ*",
// add bot description    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/mxb907.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> ® ŔƐΛĿĿY ΛĿĪ√Ɛ ΛИD ŔƐΛDY ŦᎾ F**Ҡ YᎾƱŔ SĪSŦƐŔ㋛︎☠︎︎",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

MODE: process.env.MODE || "private",
// make bot public-private-inbox

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   

READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

DEV: process.env.DEV || "254758443111",
// replace with your whatsapp number        

ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

AUTO_BIO: process.env.AUTO_BIO || "false",
// make true if you want bot to auto-update bio/status

CHAT_BOT: process.env.CHAT_BOT || "false"
// make true if you want AI chatbot responses enabled
};
