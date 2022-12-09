
    function deleteItem(event,arr){
        
        let id=event.target.parentElement.id;
        let ele=document.getElementById(id);
        alert("an item was removed")
        ele.remove();
        delete(arr[id]);
    
        }

export default deleteItem;