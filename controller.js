'use strict';

var response = require('./res');
var connection = require('./connection');
const conn = require('./connection');

exports.index = function(req,res) {
    response.ok("REST API Success yay!" , res);
};

//[GET] shows data mahasiswa
exports.showsDataMahasiswa = function (req,res) {
    connection.query('SELECT * FROM mahasiswa',
        function (error, rows, fields){
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}

//[GET] shows data mahasiswa by id
exports.showsDataMahasiswaById = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}

//[POST] add data mahasiswa
exports.addMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query('INSERT INTO mahasiswa (nim,nama,prodi) VALUES(?,?,?)', [nim, nama, prodi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data has been added!", res);
            }
        }
    );
}

//[PUT] change/update data by id
exports.updateMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, prodi=? WHERE id_mahasiswa=?',[nim, nama, prodi, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data has been updated!", res);
            }
        }
    );
}

//[DELETE] delete data by id
exports.deleteMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    
    connection.query('DELETE from mahasiswa WHERE id_mahasiswa=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data has been deleted!", res);
            }
        }
    );
}