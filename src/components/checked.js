import React from "react";



const Checked=()=>{

    const[ischecked,setState]=React.useState(false);

    function handleChecked(){

        setState(prev=>!prev)

    }

    return(<>
    
    <input 
                type="checkbox"
                onChange={handleChecked}
                checked={ischecked}
                class="checkbox"
        />

        <label htmlFor="checkbox"></label>
    </>)




} 


export default Checked;