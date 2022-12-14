//Get all game elements

const gamedsp = document.querySelector(".gamedisplay");
const cube = document.querySelector(".cube");
const jmp = document.querySelector(".jumpbottom");
const time = document.querySelector(".timer");
const redb = document.querySelector(".redblock");
const coin = document.querySelector(".coin");
const startbtn = document.querySelector(".startbtn");
const whiteairplane = document.querySelector(".whiteairplane");
const standartairplane = document.querySelector(".standartairplane");
const redairplane = document.querySelector(".redairplane");
const cloud = document.querySelector(".cloud");
const life = document.querySelector(".life");
const spancoin = document.querySelector(".coinspan");
const spanlife = document.querySelector(".lifespan");
const spantime = document.querySelector(".timerspan");
const upStatus = document.querySelector(".upstatus");

//Create 'red airplane' model
redairplane.addEventListener("click",()=>{
    cube.style.backgroundImage = "url(img/airplanered.png)";
    whiteairplane.style.border = "solid 1px gray";
    standartairplane.style.border = "solid 1px gray";
    redairplane.style.border = "solid 2px gray";
    cube.style.height = "67px";
    cube.style.width = "60px";
});
//Create 'standart airplane' model
standartairplane.addEventListener("click",()=>{
    cube.style.backgroundImage = "url(img/airplane1.png)";
    whiteairplane.style.border = "solid 1px gray";
    redairplane.style.border = "solid 1px gray";
    standartairplane.style.border = "solid 2px gray";
    cube.style.height = "60px";
    cube.style.width = "60px";
});
//Create 'white airplane' model
whiteairplane.addEventListener("click",()=>{
    cube.style.backgroundImage = "url(img/airplanewhite.png)";
    cube.style.height = "70px";
    cube.style.width = "125px";
    whiteairplane.style.border = "solid 2px gray";
    standartairplane.style.border = "solid 1px gray";
});

//Game starting button
startbtn.addEventListener("click",startgame);

function startgame(){

    startbtn.style.display = "none";
    cube.style.left = "10px";
    cube.style.bottom = "-10px";

    document.addEventListener('keydown', (event)=>{
        if (event.which == 87) {
            cube.style.bottom = "100px";
            upStatus.style.opacity = "40%"; 
        }
    });

    document.addEventListener('keyup', (event)=>{
        cube.style.bottom = "-10px";
        upStatus.style.opacity = "100%"; 
    })

    let li = 0;
    let l = 0;
    life.style.left = "1800px";
    life.style.bottom = "-10px";

    function lifet() {

        let mtl = Math.round(Math.random()*(1-0)+0);
        life.style.left = `${1800-l}+px`;

        l += 5;

        if (l >= 1850) {
            life.style.display = "block";
            l = 0;
            life.style.left = "1800px";

            mtl === 0 ? life.style.bottom = "-10px":life.style.bottom = "100px";
        }
        if ((life.style.left===cube.style.left) && (life.style.bottom===cube.style.bottom)) {
            life.style.display = "none";
            li += 1;
            spanlife.innerHTML = li;
        }
    }

    let lifeset = setInterval(lifet,35);
    let c = 0;

    function coinapp() {

        c += 100;
        spancoin.innerHTML = c;

        if (c === 300) {
            c = 0;
            li += 1;
            spanlife.innerHTML = li;
            spancoin.innerHTML = c;
        }
    }

    let i = 0;
    function gametimer(){
        i += 1;
        spantime.innerText = i;
    }

 let settime = setInterval(gametimer,1000);
 let coinset = setInterval(coinapp,10000);

 let n = 0;
 let x = 0;

 function speed(){
     function redblockspawn(){
         if (x >= 960 || x === 0) {
            redb.style.display = "block";
            x = 0;
            let mt = Math.round(Math.random()*(1-0)+0);
            if (mt == 0) {

                let bmt = Math.round(Math.random()*(1-0)+0);

                redb.style.left = `${750}px`;
                redb.style.bottom = "-10px";

                bmt === 0 ? redb.style.backgroundImage = "url(img/building.png)" : redb.style.backgroundImage = "url(img/buildingblue.png)";
            }else {
                redb.style.left = `${750}px`;
                redb.style.bottom = "100px";
                redb.style.backgroundImage = "url(img/airplanebig-removebg-preview.png)";
            }
         }

         if ((redb.style.left===cube.style.left) && (redb.style.bottom===cube.style.bottom)) {
             if (li === 0){
                 location.reload();
             }else{
                li -= 1;
                spanlife.innerHTML = li;
                redb.style.display = "none";
             }
         } 
        redb.style.left = `${750-x}px`;
        x += 4;
    }
    let set = setInterval(redblockspawn,70);
}

let speedset = setInterval(speed,2000);
let s = 0;

cloud.style.left = "1000px";
cloud.style.bottom = "110px";

function scloud(){

    cloud.style.left = `${1000-s}px`;
    s += 4;

    if (s >= 1100) {

        let mtc = Math.round(Math.random()*(250-100)+100);
        cloud.style.left = "1000px";
        cloud.style.bottom = `${mtc}px`;
        s = 0;

    }
}
let cset = setInterval(scloud,40);
// game timer
}