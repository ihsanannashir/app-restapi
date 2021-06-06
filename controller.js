'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res) {
    response.ok("REST API Success yay!" , res);
};

//Shows data mahasiswa
exports.showsDataMahasiswa = function (req,res) {
    connection.query('SELECT * FROM mahasiswa',
        function(error, rows, fields){
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}

//Shows data mahasiswa by id
exports.showsDataMahasiswaById = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}