import React from 'react';
 
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Json com a resposta.");
 
    return (
      <div onChange={notify}>
        <ToastContainer />
      </div>
    );
  }