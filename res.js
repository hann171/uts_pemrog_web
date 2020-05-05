'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };
     res.json(data);
     res.end();
}

//nested
exports.oknested = function(values,res){
    //akumulasi
    const hasil = values.reduce((groupBy, item)=>{
        //key group
        if(groupBy[item.nama_user]){
            //variabel group nama user
            const group = groupBy[item.nama_user];
            //cek isi array adalah nama sparepart
            if(Array.isArray(group.nama_sparepart)){
                group.nama_sparepart.push(item.nama_sparepart);
            }else{
                group.nama_sparepart = [group.nama_sparepart, item.nama_sparepart];
            }
        }else{
            groupBy[item.nama_user] = item;
        }
        return groupBy;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    res.json(data);
    res.end();
}
