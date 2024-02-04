const noteContainer = document.querySelector('.notes-container');
const button = document.querySelector('#button');
let note = document.querySelectorAll('#input-box');

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem('notes')
}

showNotes();

function updateNotes(){
    localStorage.setItem('notes', noteContainer.innerHTML)
}

button.addEventListener('click', (e) => {
    const input = document.createElement('p');
    const img = document.createElement('img');
    img.src = "images/delete.png";
    input.setAttribute('contenteditable', 'true');
    input.setAttribute('id', 'input-box');

    noteContainer.appendChild(input).appendChild(img);
})

noteContainer.addEventListener('click', (e) => {
    if(e.target.nodeName == "IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }else if(e.target.nodeName === "P"){
        note = document.querySelectorAll('#input-box');
        note.forEach(nt => {
            nt.onkeyup = function(){
                updateNotes()
            }
        })
    }
})

// document.addEventListener('keydown', event => {
//     if(event.key = "ENTER"){
//         document.execCommand('insertLineBreak');
//         event.preventDefault();
//     }
// })
