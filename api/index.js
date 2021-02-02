const event = require("../lib/eventSwitch.js");
const sendMsg = require("../lib/sendMsg.js");
const verifyWebhook = require("../lib/verifyWebhook.js");

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    const body = req.body;
    const method = req.method;
    const gh_event = req.headers["x-github-event"];
    const gh_sig = req.headers["x-hub-signature"];
    const gh_sig_256 = req.headers["x-hub-signature-256"];

    if ((method === "POST") && verifyWebhook.verifyWebhook(body, gh_sig_256)) {
        event.eventSwitch(gh_event, body).then((Msg) => {
            console.log(Msg);
            sendMsg.sendMsg(Msg)
                .then(() => {
                    res.status(201).send({ status: "ok" });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(err.response.status).send(err.response.statusText);
                });
        });
    } else {
        res.status(403).send();
    }
};
