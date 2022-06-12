import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginnow,logoutnow } from '../Redux/Auth/action'
const Navbar = () => {
    const auth=useSelector(store=>store.auth)
    const dispatch = useDispatch()
  console.log(auth.login,typeof auth.login)
  console.log(auth.logout,typeof auth.logout)
  return (
    <div style={{background:"purple",padding:"10px",display:"flex",justifyContent:"space-around"}}>
        <span>Todo's App</span>
        <div>

        <button disabled={auth.login} onClick={()=>dispatch(loginnow())}>Login</button>
        <button disabled={auth.logout} onClick={()=>dispatch(logoutnow())}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar