'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}

//[NESTED JSON OBJECT] response for nested data (matakuliah)
exports.nestedMatkul = function (values, res) {
    //akumulasi biar jadi single value
    const result = values.reduce((combine, item) => {
        //tentukan key group
        if (combine[item.nama]) {
            //variable group nama mahasiswa
            const group = combine[item.nama];

            //cek array isi matkul atau bukan
            if (Array.isArray(group.matakuliah)) {
                //tambah value ke group mahasiswa
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            combine[item.nama] = item;
        }

        return combine;
    }, {});

    var data = {
        'status':200,
        'values':result
    };

     res.json(data);
     res.end();
}