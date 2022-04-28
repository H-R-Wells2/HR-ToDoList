// Code for mobile menu
let temp1j = document.getElementById('temp1');
let temp2j = document.getElementById('temp2');
let mobmenuj = document.getElementById('mobmenu');
temp1.addEventListener('click', function () {
    mobmenuj.classList.remove('hidden');
    temp1j.classList.remove('block');
    temp1j.classList.add('hidden');
    temp2j.classList.add('block');
    temp2j.classList.remove('hidden');
});

temp2.addEventListener('click', function () {
    mobmenuj.classList.add('hidden');
    temp1j.classList.add('block');
    temp1j.classList.remove('hidden');
    temp2j.classList.remove('block');
    temp2j.classList.add('hidden');
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
    else if (tit == ""){
        alert("Title cannot be empty!!!");
        console.log("List is updated");

    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        console.log("List is updated");

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
            <td id="tit${index}" class="px-1 py-4 w-0 md:px-6 text-base font-medium text-gray-900 align-top">${index + 1}</td>
            <td class="max-w-0 px-0 py-4 w-2 md:px-6 md:w-1/4 text-base md:text-lg text-gray-900 font-normal align-top break-words">${element[0]}</td>
            <td class="max-w-0 px-0 py-4 w-4 md:px-6 md:w-1/2 text-base md:text-lg text-gray-900 font-light align-top break-words">${element[1]}</td>
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


// Nothing To-Do
function nothing() {
    if (itemJsonArrayStr == "[]") {
        console.log("Nothing in To-Do list");
        document.getElementById("nothingtodo").classList.remove("hidden");
    }
    else{
        document.getElementById("nothingtodo").classList.add("hidden");
    }
}



add = document.getElementById("addbtn");
add.addEventListener("click", getAndUpdate);
update();
nothing();



// delete list content
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
    nothing();
}




// clear list
function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the list');
        localStorage.clear();
        update();
        document.getElementById("nothingtodo").classList.remove("hidden");
        console.log('List is cleared');
    }
    else {
        document.getElementById("nothingtodo").classList.add("hidden");
    }
}



let descriptionj = document.getElementById("description");
let titlej = document.getElementById("title");
// Clear inputs
add.addEventListener("click", () => {
    descriptionj.setAttribute("placeholder", "Description");
    descriptionj.value = null;
    titlej.value = null;
    titlej.setAttribute("placeholder", "Title Name");
    nothing();
})








// add.addEventListener("click",()=>{
//     if (document.getElementById("title").value==""){
//         alert("Title can not be empty");
//     }
// })



