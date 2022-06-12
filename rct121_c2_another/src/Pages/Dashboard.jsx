
import React,{ useContext } from 'react'
import {RegistrationContext} from "./Context/RegistrationContextProvider"
function Dashboard() {
    const [state,dispatch] = useContext(RegistrationContext);
    console.log(state);
  return (<>
         <div>User detail</div>
        <div>
            name:{state.number}
        </div>
        <div>
            email:{state.email}
        </div>
        <div>
            phone:{state.phone}
        </div>
        <div>
            address:{state.address}
        </div>
  </>
   
    
  )
}

export default Dashboard

