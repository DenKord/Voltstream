var about = document.querySelector(".about__item"),
    stages = document.querySelector(".stages__item"),
    reviews = document.querySelector(".reviews__item"),
    progect = document.querySelector(".progect__item"),
    answers = document.querySelector(".answers__item"),
    answersBlok = document.querySelector(".answers"),
    aboutBlok = document.querySelector(".specically"),
    stagesBlok = document.querySelector(".work"),
    reviewsBlok = document.querySelector("#rivews"),
    progectBlok = document.querySelector("#our__progect");


function scrollTo (element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}
var body = document.body,
    bodyWidth = body.clientWidth;
console.log(bodyWidth);

answers.addEventListener("click", () => {
    if (bodyWidth < 426) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("active");
        menuBody.classList.toggle("active");
    }

    scrollTo(answersBlok);
});
stages.addEventListener("click", () => {
    if (bodyWidth < 426) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("active");
        menuBody.classList.toggle("active");
    }
    scrollTo(stagesBlok);
});
reviews.addEventListener("click", () => {
    if (bodyWidth < 426) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("active");
        menuBody.classList.toggle("active");
    }
    scrollTo(reviewsBlok);
});
about.addEventListener("click", () => {
    if (bodyWidth < 426) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("active");
        menuBody.classList.toggle("active");
    }
    scrollTo(aboutBlok);
});
progect.addEventListener("click", () => {
    if (bodyWidth < 426) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("active");
        menuBody.classList.toggle("active");
    }
    scrollTo(progectBlok);
});


var burger = document.querySelector(".menu__icon"),
    menuBody = document.querySelector(".menu__body");
    burger.addEventListener("click", () => {
    document.body.classList.toggle("lock")
    burger.classList.toggle("active");
    menuBody.classList.toggle("active");
});      


'use strict'


class Slider {
    constructor({
        main,
        wrap,
        position = 0,
        next,
        prev,
        reponsive = [],
        infinfty = true,
        slidesToshow }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.sliders = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.options = {
            position,
            infinfty,
            widthSlide: Math.floor(100 / slidesToshow)
        };
        this.slidesToshow = slidesToshow;
        this.reponsive = reponsive;
    }
    init (){
        this.addGloClass();
        this.addStyle();
        this.controlSlider();
        if (this.reponsive){
            this.reponsiveInit();
        }
    }
    addGloClass(){
        this.main.classList.add("glo__slider");
        this.wrap.classList.add("glo__slider__wrap");
        for (const item of this.sliders){
            item.classList.add("glo__slider__item");
        }
    }
    addStyle(){
        let style = document.getElementById("sleder__style");
        if (!style){
            style = document.createElement("style");
            style.id = "sleder__style";
        }

        style.textContent = `
            .glo__slider {
                overflow: hidden !important;
            }
            .glo__slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo__slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                display: flex;
                justify-content: center;
                
            }
        `;
        document.head.appendChild(style);
    }    
    controlSlider (){
        this.prev.addEventListener("click", this.prevSlider.bind(this));
        this.next.addEventListener("click", this.nextSlider.bind(this));


        

    }
    prevSlider(){
        if (this.options.infinfty || this.options.position > 0) {
            -- this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.sliders.length - this.slidesToshow
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }  
    }
    nextSlider(){
        if (this.options.infinfty || this.options.position < this.sliders.length - this.slidesToshow) {
            ++ this.options.position;
            if (this.options.position > this.sliders.length - this.slidesToshow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }

    }
    reponsiveInit(){
        const slidesToShiwDefult = this.slidesToshow;
        const allRespone = this.reponsive.map(item => item.breakpoint);
        const maxRespone = Math.max(...allRespone);
        
        const checResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxRespone){
                for (let i = 0; i < allRespone.length; i++){
                    if (widthWindow < allRespone[i]) {
                        this.slidesToshow = this.reponsive[i].slidesToshow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                    else{
                        this.slidesToshow = slidesToShiwDefult;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                }
            }
        }
        checResponse ();
    }

}

class Slider__comp {
    constructor({
        main__comp,
        wrap__comp,
        position = 0,
        next__comp,
        reponsive = [],
        infinfty = true,
        prev__comp,
        slidesToshow}){
        this.main__comp = document.querySelector(main__comp);
        this.wrap__comp = document.querySelector(wrap__comp);
        this.sliders = document.querySelector(wrap__comp).children;
        this.next__comp = document.querySelector(next__comp);
        this.prev__comp = document.querySelector(prev__comp);
        this.options = {
            position,
            infinfty,
            widthSlide: Math.floor(100 / slidesToshow)
        };
        this.slidesToshow = slidesToshow;
        this.reponsive = reponsive;

    }
    init (){
        this.addGloClass();
        this.addStyle();
        this.controlSlider();
        if (this.reponsive){
            this.reponsiveInit();
        }
    }
    addGloClass(){
        this.main__comp.classList.add("comp__slider");
        this.wrap__comp.classList.add("comp__slider__wrap");
        for (const item of this.sliders){
            item.classList.add("comp__slider__item");
        }
    }
    addStyle(){
        let style = document.getElementById("sleder__style__comp");
        if (!style){
            style = document.createElement("style");
            style.id = "sleder__style__comp";
        }
        style.textContent = `
            .comp__slider {
                overflow: hidden !important;
            }
            .comp__slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .comp__slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                display: flex;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
    }    
    controlSlider (){
        this.prev__comp.addEventListener("click", this.prevSlider.bind(this));
        this.next__comp.addEventListener("click", this.nextSlider.bind(this));


        

    }
    prevSlider(){
        if (this.options.infinfty || this.options.position > 0) {
            -- this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.sliders.length - this.slidesToshow
            }
            this.wrap__comp.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    
        }
    }
    nextSlider(){
        if (this.options.infinfty || this.options.position < (this.sliders.length - this.slidesToshow))
        ++ this.options.position;
        if (this.options.position > this.sliders.length - this.slidesToshow){
            this.options.position = 0;
        }
        this.wrap__comp.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`

    }
    reponsiveInit(){
        const slidesToShiwDefult = this.slidesToshow;
        const allRespone = this.reponsive.map(item => item.breakpoint);
        const maxRespone = Math.max(...allRespone);
        
        const checResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxRespone){
                for (let i = 0; i < allRespone.length; i++){
                    if (widthWindow < allRespone[i]) {
                        this.slidesToshow = this.reponsive[i].slidesToshow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                    else{
                        this.slidesToshow = slidesToShiwDefult;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                }
            }
        }
        checResponse ();
    }
}
class Slider__certificate {
    constructor({
        main__certificate,
        wrap__certificate,
        position = 0,
        next__certificate,
        reponsive = [],
        infinfty = true,
        prev__certificate,
        slidesToshow}){
        this.main__certificate = document.querySelector(main__certificate);
        this.wrap__certificate = document.querySelector(wrap__certificate);
        this.sliders = document.querySelector(wrap__certificate).children;
        this.next__certificate = document.querySelector(next__certificate);
        this.prev__certificate = document.querySelector(prev__certificate);
        this.options = {
            position,
            infinfty,
            widthSlide: Math.floor(100 / slidesToshow)
        };
        this.slidesToshow = slidesToshow;
        this.reponsive = reponsive;
    }
    init (){
        this.addGloClass();
        this.addStyle();
        this.controlSlider();
        if (this.reponsive){
            this.reponsiveInit();
        }
    }
    addGloClass(){
        this.main__certificate.classList.add("certificate__slider");
        this.wrap__certificate.classList.add("certificate__slider__wrap");
        for (const item of this.sliders){
            item.classList.add("certificate__slider__item");
        }
    }
    addStyle(){
        let style = document.getElementById("sleder__style__certificate");
        if (!style){
            style = document.createElement("style");
            style.id = "sleder__style__certificate";
        }
        style.textContent = `
            .certificate__slider {
                overflow: hidden !important;
            }
            .certificate__slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .certificate__slider__item {
                flex: 0 0  ${this.options.widthSlide}% !important;
                display: flex;
                justify-content: center;
            }   
        `;
        document.head.appendChild(style);
    }    
    controlSlider (){
        
        this.prev__certificate.addEventListener("click", this.prevSlider.bind(this));
        this.next__certificate.addEventListener("click", this.nextSlider.bind(this));


        

    }
    prevSlider(){
        if (this.options.infinfty ||  this.options.position > 0) {
            -- this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.sliders.length - this.slidesToshow
            }
            this.wrap__certificate.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
    
        }
    }
    nextSlider(){
        if (this.options.infinfty ||  this.options.position < (this.sliders.length - this.slidesToshow))
        ++ this.options.position;
        if (this.options.position > this.sliders.length - this.slidesToshow){
            this.options.position = 0;
        }
        this.wrap__certificate.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`

    }
    reponsiveInit(){
        const slidesToShiwDefult = this.slidesToshow;
        const allRespone = this.reponsive.map(item => item.breakpoint);
        const maxRespone = Math.max(...allRespone);
        
        const checResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxRespone){
                for (let i = 0; i < allRespone.length; i++){
                    if (widthWindow < allRespone[i]) {
                        this.slidesToshow = this.reponsive[i].slidesToshow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                    else{
                        this.slidesToshow = slidesToShiwDefult;
                        this.options.widthSlide = Math.floor(100 / this.slidesToshow);
                        this.addStyle()
                    }
                }
            }
        }
        checResponse ();
    }
}
