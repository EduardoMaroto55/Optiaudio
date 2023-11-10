import React from 'react'
import EmailForm from '../components/EmailForm'
import AddUserForm from '../components/dashboard/AddUserForm'
import EditUserForm from '../components/dashboard/EditUserForm'
import DeleteUserForm from './dashboard/DeleteUserForm'
import { Dialog } from '@mui/material'

const ModalDialog = (props) => {
  let FormComponent;
  switch (props.formType) {
    case 'addUser':
      FormComponent = AddUserForm;
      break;
    case 'editUser':
      FormComponent = EditUserForm;
      break;
    case 'delUser':
      FormComponent = DeleteUserForm;
      break;
    default:
      FormComponent = EmailForm;
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
    <div className='p-5'>
      
      <FormComponent handleClose={props.handleClose} selectedUser={props.selectedUser}/>
    </div>
  </Dialog>
  )
}

export default ModalDialog