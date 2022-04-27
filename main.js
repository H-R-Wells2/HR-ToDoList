temp1.addEventListener('click', function () {
    document.getElementById('mobmenu').classList.remove('hidden');
    document.getElementById('temp1').classList.remove('block');
    document.getElementById('temp1').classList.add('hidden');
    document.getElementById('temp2').classList.add('block');
    document.getElementById('temp2').classList.remove('hidden');
});

temp2.addEventListener('click', function () {
    document.getElementById('mobmenu').classList.add('hidden');
    document.getElementById('temp1').classList.add('block');
    document.getElementById('temp1').classList.remove('hidden');
    document.getElementById('temp2').classList.remove('block');
    document.getElementById('temp2').classList.add('hidden');
});



let profun = document.getElementById('profilemenu');


profilebtn.addEventListener('click',function(){
    if (profun.classList.contains('hidden')){
        profun.classList.remove('hidden');
    }
    else{
        profun.classList.add('hidden');
    };
})


let except = document.getElementById('profilebtn');
let except2 = document.getElementById('profilemenu');

document.addEventListener("click", function () {
    profun.classList.add('hidden')
}, false);
except.addEventListener("click", function (ev) {
    profun.classList.remove('hidden')
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
except2.addEventListener("click", function (ev) {
    profun.classList.remove('hidden')
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
