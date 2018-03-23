document.addEventListener ("DOMContentLoaded", function (event) {


    // let images = [
    //     "images/image_01.jpg",
    //     "images/image_02.jpg",
    //     "images/image_03.jpg",
    //     "images/image_04.jpg",
    //     "images/image_05.jpg",
    //     "images/image_06.jpg",
    //     "images/image_07.jpg"
    // ]
    // let galleri_1 = new OOPGallery("gallery01", images);
    // galleri_1.addImage("images/image_01.jpg");
    // console.log(galleri_1);

    // let galleri_2 = new OOPGallery("gallery02", images);

    // let data = new Image("data", "yes");
    // console.log(data);
    fetch('http://localhost:1337/images')
    .then((response) => {
        if (response.ok) {
           return response.json();
        }
     })
     .then((data) => {
    //   console.log(data);
    let images = [];
      data.forEach(function (imagedb) {
          let imageobj = new Image(imagedb.titel, imagedb.filnavn, imagedb.kategori, imagedb.fotograf, imagedb.dato);
        //   galleri_1.addImage(imageobj);
        images.push(imageobj);
      })
      console.log(images);
        // console.log(galleri_1);
        // galleri_1.gotoImageFirst();
        
    let galleri_1 = new OOPGallery("gallery01", images);
    let galleri_2 = new OOPGallery("gallery02", images);

     })
     .catch((err) => {
        console.log(err);
     })
})