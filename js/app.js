class website{
    constructor (one, two){
        this.one = `<!-- landing page -->
        <div class="w-100 bg-dark">
            <div class="p-lg-5 p-2">
                <div class="p-lg-5 p-2">
                    <div class="container p-lg-5 p-2">
                        <div class="row p-lg-5 p-2">
                            <div class="col col-lg-5 text-center p-lg-2 p-1">
                                <img src="./imgs/img (3).png" width="260px" class="w-70 rounded-circle">
                            </div>

                            <div class="col-lg-7 col p-lg-1 p-1">
                                <h1 class="text-primary">Bookaty</h1>
                                <p class="text-light">Where you can have the best mood for reading</p>
                            </div>
                        </div>
                        <div class="text-center p-5">
                            <a class="text-light ul" href="#sc">Scroll down</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
        <!-- we have -->
        <div class="w-100 bg-primary p-3">
            <div class="text-center p-2">
                <p class="display-4">We have:</p>

                <div class="container">
                    <div class="row">
                        <button class="btn-outline-dark col-lg-3 btn">
                            <i class="fa-solid fa-book-open"></i>
                            <br>
                            Books
                        </button>
                        <button class="btn-outline-dark col-lg-3 btn">
                            <i class="fa-solid fa-book-open-reader"></i>
                            <br>
                            Novels
                        </button>

                        <button class="btn btn-outline-dark col-6 col-lg-3">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <br>
                            Courses
                        </button>
                        <button class="btn btn-outline-dark col-6 col-lg-3">
                            <i class="fa-solid fa-mug-saucer"></i>
                            <br>
                            coffee
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Courses -->
        <div id="sc" class="w-100 bg-dark p-5">
            <p class="display-4 text-light">Courses</p>
            <hr class="divide">
            <div class="bg-black">
                <div class="row">
                    <div class="col p-1 text-center">
                        <button class="btn btn-outline-light">
                            <i class="fa-solid fa-terminal"></i>
                            Coding
                        </button>
                    </div>
                    <div class="col p-1 text-center">
                        <button class="btn btn-outline-light">
                            <i class="fa-solid fa-book-quran"></i>
                            Quran
                        </button>
                    </div>
                    <div class="col p-1 text-center">
                        <button class="btn btn-outline-light">
                            <i class="fa-solid fa-language"></i>
                            Languages
                        </button>
                    </div>
                    <div class="col p-1 text-center">
                        <button class="btn btn-outline-light">
                            <i class="fa-solid fa-microphone"></i>
                            voice over
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- discount -->
        <div class="w-100 bg-primary p-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col text-center">
                        <img src="./imgs/img (5).png" class="rounded-circle" width="250px">
                    </div>
                    <div class="col-lg-9 col">
                        <h2 class="display-4">Discounts to 50%!!</h2>
                        <p class="h1">What you wait?</p>
                    </div>
                </div>
            </div>
        </div>`,
        this.two = `<div class="h-100 w-100 p-5 bg-dark">
        <div class="container p-5 text-center">
            <img src="./imgs/error.png" width="200px" class="p-1 rounded">
            <h1 class="p-5 text-light">Page not found</h1>
        </div>
    </div>`
    }

    home(){
        websiteV.innerHTML = this.one;
    }

    elsePage(){
        websiteV.innerHTML = this.two;
    }
}

let websiteV = document.getElementById('inHTML');

let websiteObj = new website();

var homeBtn = document.getElementById('home'),
two = document.getElementsByClassName('two');

homeBtn.onclick = function (){websiteObj.home();};

window.onload = function (){websiteObj.home();};