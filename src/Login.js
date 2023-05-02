import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css"; 
import "./Login.css"
function  Login(){
const [name,SetName] = useState("");
const [password,SetPassword] = useState("");

function submit(e){
    
}

return(
 <>
 <div style={{
    marginTop:"30%",
    
 }}>
 <InputText type="text" placeholder="הכנס שם" onChange={(e) => SetName(e.target.value)} ></InputText><br/>
    <InputText type="text" className="p-password p-component p-inputwrapper p-input-icon-right" placeholder="הכנס סיסמא" onChange={(e) => SetPassword(e.target.value)} >
        </InputText><br/>
 <Button label="לכניסה" className="p-button-secondary" onClick={(e)=>submit(e)} />

 </div>
 </>
)
}
export default Login;