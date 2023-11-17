import React from 'react'
import axios from 'axios';
function DeleteUserForm(props) {
  function handleSubmit(event){
    const userId = props.selectedUser.id;
    event.preventDefault();
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 1000,
    });
    axiosInstance.delete('/deluser', { data: { id: userId } })
      .then(response => {
       
        window.location.reload(); // reload the page
      })
      .catch(error => {
        console.error('Error:', error);
  
      });

  }

  function handleCancelClick() {
    event.preventDefault();
    
    props.handleClose(); // Close the form when the button is clicked
  }

  return (
  <form onSubmit={handleSubmit} className={`flex flex-col gap-3 p-5 rounded-full p-${props.padding}`}>
    <h1 className='font-bold text-lg mb-5'>¿Desea Eliminar el usuario?</h1>        
    <div className='flex justify-center'>
    <button className='max-w-[70%] mx-auto rounded-full border border-secondary p-1 px-3 hover:bg-secondary hover:text-white' type='submit'>Si</button>
    <button onClick={handleCancelClick} className='max-w-[70%] mx-auto rounded-full border border-secondary p-1 px-3 hover:bg-secondary hover:text-white'>No</button>
    </div>
</form>
  )
}

export default DeleteUserForm