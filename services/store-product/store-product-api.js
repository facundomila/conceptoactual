var xhr = new XMLHttpRequest();

module.exports = function (options, body) {
    // options: { method, url, async }
    // body: data
    var data = body || null;

    xhr.open(options.method, options.url, options.async);

    xhr.send(data);

    return xhr.response;
};