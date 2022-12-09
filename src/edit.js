
 function editItem(event){
    let id=event.target.parentElement.id;
    let div=document.getElementById(id);
    let item=document.querySelector(`#${event.target.parentElement.id}>.item--info`)
 
    let editbox=document.createElement("input");
    div.appendChild(editbox);
    let okbtn=document.createElement("button");
    div.appendChild(okbtn);
    okbtn.textContent="OK";
    editbox.setAttribute("value",item.textContent)
    editbox.setAttribute("name","editbox")
    editbox.setAttribute("class","form--edit")
    okbtn.addEventListener("click",()=>{
               
     
               okbtn.remove()
               item.textContent=editbox.value
               editbox.remove()
               alert("An item was updated")    
           });
   


 }


 export default editItem;