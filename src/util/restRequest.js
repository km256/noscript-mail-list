function restRequest(path) {
    return ns.http(path, {}, {type: 'GET'})
        .then(function (data) {
            this.setData(data);
        }, function (error) {
            this.setError(error);
        }, this)
}
