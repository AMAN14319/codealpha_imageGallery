const images = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        current=index;
        showImage();
        lightbox.style.display="flex";
    });
});

function showImage(){
    lightboxImg.src=images[current].src;
}

document.getElementById("next").onclick=()=>{
    current=(current+1)%images.length;
    showImage();
};

document.getElementById("prev").onclick=()=>{
    current=(current-1+images.length)%images.length;
    showImage();
};

document.getElementById("close").onclick=()=>{
    lightbox.style.display="none";
};

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight"){
        current=(current+1)%images.length;
        showImage();
    }

    if(e.key==="ArrowLeft"){
        current=(current-1+images.length)%images.length;
        showImage();
    }

    if(e.key==="Escape"){
        lightbox.style.display="none";
    }
});