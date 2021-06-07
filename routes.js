'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.showsDataMahasiswa);

    app.route('/mahasiswa/:id')
        .get(jsonku.showsDataMahasiswaById);

    app.route('/mahasiswa/tambah')
        .post(jsonku.addMahasiswa);

    app.route('/mahasiswa/update')
        .put(jsonku.updateMahasiswa);

    app.route('/mahasiswa/delete')
        .delete(jsonku.deleteMahasiswa);

    app.route('/matakuliah')
        .get(jsonku.showsGroupMatakuliah);
}