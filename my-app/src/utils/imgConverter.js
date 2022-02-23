// let imageData = 'MzM5MzE=';

// const imgConverter = (img) => {
//     let bufarray = new Uint8Array( img );
//     let blob = new Blob( [ bufarray ], { type: 'image/jpeg' });
//     let urlCreator = window.URL || window.webkitURL;
//     let imageURL = urlCreator.createObjectURL( blob );
//     console.log(imageURL);
//     let elmImage = document.querySelector('#foto');
//     elmImage.src = imageURL;
// }

// imgConverter(imageData);

let base64String = "";

export function imageUploaded() {
    //Aqui pega o campo na tela do html
    var arquivo = document.querySelector(
        'input[type=file]')['files'][0];

    //Aqui cria o cara que vai converter a imagem pra base64
    var reader = new FileReader();
    console.log("next");

    //Quando carregada a imagem
    reader.onload = function () {
        //Aqui retira a data é dispensavel
        base64String = reader.result.replace("data:", "")
            // Replace nos caracteres especiais
            .replace(/^.+,/, "");


        // imageBase64Stringsep = base64String;

        // alert(imageBase64Stringsep);
        console.log(base64String);
    }
    // rele a imagem como url base64
    reader.readAsDataURL(arquivo);

    return base64String
}

export function displayString() {
    console.log("Base64String about to be printed");
    alert(base64String);
}

//Mostra a imagem
export function displayImage() {
    //Aqui pega o campo na tela do html
    let imgElm = document.querySelector('#foto');

    // Aqui eu monto a url que vai ser usada no src da imagem
    let stringBase64 = 'data:image/jpeg;base64,' + base64String;

    //Aqui eu passo a url pronta pra imagem
    imgElm.src = stringBase64;
}