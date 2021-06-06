'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.showsDataMahasiswa);

    app.route('/mahasiswa/:id')
        .get(jsonku.showsDataMahasiswaById);

    app.route('/addMahasiswa')
        .post(jsonku.addMahasiswa);

    app.route('/updateMahasiswa')
        .put(jsonku.updateMahasiswa);

    app.route('/deleteMahasiswa')
        .delete(jsonku.deleteMahasiswa);
}