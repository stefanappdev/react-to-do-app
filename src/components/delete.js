
    function deleteItem(event,arr){
        
        let id=event.target.parentElement.id;
        let ele=document.getElementById(id);
        alert("Task removed")
        ele.remove();
        delete(arr[id]);
    
        }

export default deleteItem;