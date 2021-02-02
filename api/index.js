// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    const body = req.body;
    const method = req.method;

    if (method === "POST") {
        res.status(200).send()
    } else {
        res.status(403).send()
    }
};
