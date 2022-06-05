// import React from "react";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import Header from "./Header";
// import Product from "./Product";
// import Home from "./Home";
// import About from "./About";
// import { Route, Routes } from "react-router-dom";

// const AllRoutes = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Product />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/" element={<Contact />} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default AllRoutes

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from "./About"

const AllR = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='' element={<About/>}></Route>
        </Routes>
    </div>
  )
}

export default AllR
