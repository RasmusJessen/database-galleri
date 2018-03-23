class OOPGallery {
	constructor(name, images) {
		// this.billeder = ["images/image_01.jpg", "images/image_02.jpg", "images/image_03.jpg", "images/image_04.jpg", "images/image_05.jpg", "images/image_06.jpg", "images/image_07.jpg"];
		this.name = name;
		this.images = images;
		this.index = 0;
		this.setEventHandler();
	}

	setEventHandler() {
		document.querySelector(`#${this.name} .oopgallery-control-first`).addEventListener("click",  () => {
			document.querySelector(`#${this.name} .oopgallery-image`).src = this.gotoImageFirst();
			this.updateImage();
		})

		document.querySelector(`#${this.name} .oopgallery-control-last`).addEventListener("click", () => {
			document.querySelector(`#${this.name} .oopgallery-image`).src = this.gotoImageLast();
			this.updateImage();
		})

		document.querySelector(`#${this.name} .oopgallery-control-next`).addEventListener("click", () => {
			document.querySelector(`#${this.name} .oopgallery-image`).src = this.gotoImageNext();
			this.updateImage();
		})

		document.querySelector(`#${this.name} .oopgallery-control-previous`).addEventListener("click", () => {
			document.querySelector(`#${this.name} .oopgallery-image`).src = this.gotoImagePrevious();
			this.updateImage();
		})
		this.updateImage();

		document.querySelector(`#${this.name} .oopgallery-image`).src = this.gotoImageFirst();
	}

updateImage() {
	document.querySelector(`#${this.name} .oopgallery-image`).src = this.images[this.index].filnavn
	document.querySelector(`#${this.name} .titel`).innerHTML = this.images[this.index].titel
	document.querySelector(`#${this.name} .fotograf`).innerHTML = this.images[this.index].fotograf
	document.querySelector(`#${this.name} .kategori`).innerHTML = this.images[this.index].kategori
	document.querySelector(`#${this.name} .dato`).innerHTML = this.images[this.index].dato
}


gotoImageFirst () {
	this.index = 0;
		return this.images[this.index].filnavn;
}

gotoImageLast () {
	this.index = this.images.length - 1;
		return this.images[this.index].filnavn;
}

gotoImagePrevious () {
	if (this.index > 0) {
		this.index--;
	}
	return this.images[this.index].filnavn;
}

gotoImageNext () {	
	if (this.index < this.images.length - 1) {
		this.index++;
	}
	return this.images[this.index].filnavn;
}

addImage(image) {
   this.images.push(image) 
}

}