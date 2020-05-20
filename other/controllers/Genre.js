'use strict';

var utils = require('../utils/writer.js');
var GenreService = require('../service/GenreService.js');

module.exports.genresGET = function genresGET (req, res, next) {
    //console.log("genresGET");
	
    GenreService.genresGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

