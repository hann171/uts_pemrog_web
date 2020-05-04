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
    const hasil = values.reduce((akumulasi, item)=>{
        if(akumulasi[item.nama_user]){
            const group = akumulasi[item.nama_user];
            if(Array.isArray(group.nama_sparepart)){
                group.nama_sparepart.push(item.nama_sparepart);
            }else{
                group.nama_sparepart = [group.nama_sparepart, item.nama_sparepart];
            }
        }else{
            akumulasi[item.nama_user] = item;
        }
        return akumulasi;
    },{});

    var data = {
        'status':200,
        'values':hasil
    };
    res.json(data);
    res.end();
}
