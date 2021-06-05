'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res) {
    response.ok("REST API Success yay!" , res);
};

//Shows data mahasiswa
exports.showsDataMahasiswa = function(req,res) {
    connection.query('SELECT * FROM mahasiswa',  function(error, rows, failed){
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}