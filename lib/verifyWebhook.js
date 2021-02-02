const crypto = require('crypto');

const gh_hook_secret = process.env.GH_HOOK_SECRET
const prod = process.env.PROD

module.exports.verifyWebhook = function verifyWebhook(body, gh_sig_256) {
    if (prod !== "true") return true;
    if (!body || !gh_sig_256) return false;

    const payload = JSON.stringify(body);
    const hmac = crypto.createHmac('sha256', gh_hook_secret);
    const digest = 'sha256=' + hmac.update(payload).digest('hex');
    return (digest === gh_sig_256);
}
