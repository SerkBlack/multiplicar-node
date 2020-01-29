// requireds
const fs = require('fs');
var colors = require('colors');

// module.exports.crearArchivo = ( base ) => {

let listarTabla = (base, limite = 10) => {

    console.log('====================================='.green);
    console.log(`         tabla del ${ base }`.green);
    console.log('====================================='.green);

    for (let i = 1; i <= limite; i++) {
        var resul = base * i;
        console.log(`${ base } * ${ i } = ${ resul } \n`);

    }

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            var resul = base * i;
            data += `${ base } * ${ i } = ${ resul } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}