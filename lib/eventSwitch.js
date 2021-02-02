// Webhook events switch
// https://docs.github.com/en/developers/webhooks-and-events/webhook-events-and-payloads

module.exports.eventSwitch = async function (gh_event, body) {
    const action = body.acyion
    const repository = body.repository
    const sender = body.sender
    const organization = body.organization
    const installation = body.installation

    switch (gh_event) {
        default: {
            return gh_event.replace('_', '\\_').replace('*', '\\*');
        }
    }
};
