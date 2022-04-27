// code for mobile menu
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



let profilebar = document.getElementById('profilemenu');
let except = document.getElementById('profilebtn');





document.addEventListener("click", function () {
    profilebar.classList.add('hidden')
}, false);
except.addEventListener("click", function (ev) {
    if (profilebar.classList.contains('hidden')){
    profilebar.classList.remove('hidden')
    ev.stopPropagation();
    }
}, false);
profilebar.addEventListener("click", function (ev1) {
    profilebar.classList.remove('hidden')
    ev1.stopPropagation();
}, false);
