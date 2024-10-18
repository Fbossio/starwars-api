const extractId = (url) => {
    return url.match(/\/([0-9]*)\/$/)[1];
}

module.exports = {
    extractId
};