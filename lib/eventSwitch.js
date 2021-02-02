module.exports.eventSwitch = async function (gh_event, body) {
    switch (gh_event) {
        default: {
            return gh_event.replace('_', '\\_ ').replace('*', '\\*');
        }
    }
};
