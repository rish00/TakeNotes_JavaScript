console.log("welcome");
showNotes();
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
        `<div class="notecard mx-2 my-2 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let show = document.getElementById("notes");
    if (notesObj.length>0) {
        show.innerHTML=html;
    } else {
        show.innerHTML="Nothing to show";
    }
}

function deleteNote(index) {
    // console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

let search = document.getElementById("searchTxt");

search.addEventListener("input", function() {
    let inputVal = search.value;
    console.log(inputVal);
    let cards = document.getElementsByClassName("notecard");
    Array.from(cards).forEach(function(element) { 
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }


    })
    

});