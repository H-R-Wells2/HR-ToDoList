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




// profilemenu
document.addEventListener("click", function () {
    profilebar.classList.add('hidden')
}, false);
except.addEventListener("click", function (ev) {
    if (profilebar.classList.contains('hidden')) {
        profilebar.classList.remove('hidden')
        ev.stopPropagation();
    }
}, false);
profilebar.addEventListener("click", function (ev1) {
    profilebar.classList.remove('hidden')
    ev1.stopPropagation();
}, false);








// get and update list
function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
    // console.log("MDFK");
}





// update
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }


    // Populate the table
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr class="bg-gray-100 border-b">
            <td id="tit${index}" class="px-1 py-4 w-0 md:px-6 text-base font-medium text-gray-900 align-top">${index +1}</td>
            <td class="px-0 py-4 w-2 md:px-6 md:w-1/4 text-base md:text-lg text-gray-900 font-light align-top">${element[0]}</td>
            <td class="px-0 py-4 w-4 md:px-6 md:w-1/2 text-base md:text-lg text-gray-900 font-light align-top">${element[1]}</td>
            <td class="w-1/4 md:w-20 text-center md:text-lg bg-white">
            <button onclick="deleted(${index})" 
                class=" md:w-4/6 py-2.5 w-16 bg-cyan-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg active:text-white  transition duration-150 ease-in-out">Delete
            </button>
            </td>
        </tr>
        `;        
    });
    document.getElementById("tablebody").innerHTML = str;
}




add = document.getElementById("addbtn");
add.addEventListener("click", getAndUpdate);
update();


// delete
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}




// clear storage
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}


// scroll to id
add.addEventListener("click",()=>{
    document.getElementById("footer").scrollIntoView();
})


// add.addEventListener("click",()=>{
//     if (document.getElementById("title").value==""){
//         alert("Title can not be empty");
//     }
// })



