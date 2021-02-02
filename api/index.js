const event = require("../lib/eventSwitch.js");

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    const body = req.body;
    const method = req.method;
    const gh_event = req.headers["x-github-event"];
    const gh_sig = req.headers["x-hub-signature"];
    const gh_sig_256 = req.headers["x-hub-signature-256"];

    if (method === "POST") {
        event.eventSwitch(gh_event, body).then((Msg) => {
            console.log(Msg);
        });
        res.status(200).send();
    } else {
        res.status(403).send();
    }
};
