// import { Suspense } from 'react';
import './App.css';
// import Website from "./pages/Website";
import React from "react";
import Header from "../src/Components/Header/Header";
import Hero from "../src/Components/Hero/Hero";
import Companies from "../src/Components/Companies/Companies";
import Recidencies from "../src/Components/Recidencies/Recidencies";
import Value from "../src/Components/Value/Value";
import Contacts from "../src/Components/Contacts/Contacts";
import GetStarted from "../src/Components/GetStarted/GetStarted";
import Footer from "../src/Components/Footer/Footer";

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from './Components/Layout/Layout';
// import Properties from './pages/Properties';
// import { QueryClient, QueryClientProvider } from 'react-query'
// import {ReactQueryDevtools} from "react-query/devtools"
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

function App() {

  // const queryClient = new QueryClient()
  return (
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Routes>
    //         <Route element={<Layout />}>
    //           <Route path="/" element={<Website />} />
    //           <Route path="/properties" element={<Properties  />}></Route>
    //         </Route>
    //       </Routes>
    //     </Suspense>
    //   </BrowserRouter>
    //   <ToastContainer/>
    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>

    <div className="app">

      <div>
        {/* <div className="white-gradient"> */}
          <Header />
          <Hero />
        {/* </div> */}
        <Companies />
        <Recidencies />
        <Value />
        <Contacts />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
