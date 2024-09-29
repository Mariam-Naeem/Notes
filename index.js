

let box = document.querySelector('.box');
 displayNotes();
 function addNewNote() { 
    let div = document.createElement('div'); 
    // إنشاء div قابل للتحرير 
    let editableDiv = document.createElement('div'); 
    editableDiv.contentEditable = 'true'; 
    // تمكين تحرير النص 
    editableDiv.classList.add('editable'); 
    // إضافة كلاس لتنسيق // إضافة الأيقونة (حذف) 
    let icon = document.createElement('i'); 
    icon.classList.add('fa', 'fa-trash-o'); 
    icon.style.fontSize = '30px'; 
    icon.onclick = function() { 
        div.remove()
        saveNotes(); 
        }; 
        let hr = document.createElement('hr'); 
        div.classList.add('notes'); 
      
        div.appendChild(icon); 
       
        div.appendChild(hr);
         div.appendChild(editableDiv); 
       editableDiv.addEventListener('input', saveNotes); 
       box.appendChild(div); 
       saveNotes(); 
       }
       saveNotes()
        
       
   
    function saveNotes() {
         localStorage.setItem('notesData', box.innerHTML); 

    }
 function displayNotes() {
     if (localStorage.getItem('notesData')) {
         box.innerHTML = localStorage.getItem('notesData');
         
         // بعد عرض الملاحظات، نحتاج إلى إعادة ربط حدث الحذف للأيقونات 
         document.querySelectorAll('.fa-trash-o').forEach((icon) => { icon.onclick = function () { icon.parentElement.remove();
            
             saveNotes();
             }; })
             ; 
             document.querySelectorAll('.editable').forEach((editableDiv) => { editableDiv.addEventListener('input', saveNotes); }); } } 
 