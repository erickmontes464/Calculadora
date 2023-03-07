window.onload = function changeImg(){
	var a = 1;

	document.getElementById("img1").src="IMG/inicio/nov"+a+".png";

	setInterval(function(){
		if (a==a) {
			document.getElementById("btn"+a).checked = true;
		}else{
			document.getElementById("btn"+a).checked = false;
		}
	});
	
	setInterval(function () {
		if (a<5) {
			a++;
			document.getElementById("img1").src="IMG/inicio/nov"+a+".png";
		}else{
			a=0;
		}
		
		innerHTML = a;
	},2000);

}
/*******************************************HASTA ACA INICIO*******************************/
let indice=1;
muestraSlides(indice);

function avanzaSlide(n){
	muestraSlides(indice+=n);
}

function posicionSlide(n){
	muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}

