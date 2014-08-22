'use strict';

function API($resource) {
    var endpoint = 'http://localhost:3000/api/article-read';
    return {
        endpoint: $resource(endpoint, {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        })
    };
}

angular
    .module('services.API', [])
    .factory('API', ['$resource', API]);
