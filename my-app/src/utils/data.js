import moment from 'moment';

function aplicarMascaraEmDataIso(data){
    if(data){
        return moment(data).locale('pt-br').format('DD/MM/YYYY');
    }
    return data;
}

function aplicarMascaraDateAmereicanEmDataIso(data){
    if(data){
        return moment(data).locale('pt-br').format('YYYY-MM-DD');
    }
    return data;
}

function aplicarMascaraDataHoraEmDataIso(data){
    if(data){
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }
    return undefined;
}

function aplicarMascaraIsoEmDateAmerican(data){
    if(data){
        let novaData = moment(data).locale('pt-br').format('YYYY-MM-DD');
        return novaData + 'T00:00:00';
    }
    return undefined;
}


export default{
    aplicarMascaraEmDataIso,
    aplicarMascaraDataHoraEmDataIso,
    aplicarMascaraDateAmereicanEmDataIso,
    aplicarMascaraIsoEmDateAmerican
}