const axios = require("axios");

const tgToken = process.env.TG_TOKEN;
const tgChatId = process.env.TG_CHAT_ID;

module.exports.sendMsg = async function (Msg) {
    return axios.post(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        chat_id: tgChatId,
        text: Msg,
        parse_mode: "Markdown",
        disable_web_page_preview: true
    });
};
