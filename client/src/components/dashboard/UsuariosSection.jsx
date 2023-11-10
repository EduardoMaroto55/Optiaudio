import {React,useState} from 'react'
import {AiFillDelete} from "react-icons/ai";
import  {MdModeEditOutline} from "react-icons/md";
import ModalDialog from '../ModalDialog';
import { AiOutlinePlus } from "react-icons/ai";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";


const UsuariosSection = (props) => {
  const [type,setType]=useState("emailForm")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  function handleClose() {
  setIsModalOpen(false);
}
function handleDeleteOpen(id) {
  setSelectedUser(props.users.find(user => user.id === id))
  setType("delUser")
  setIsModalOpen(true);
}
function handleEditOpen(id) {
  setSelectedUser(props.users.find(user => user.id === id))
  setType("editUser")
  setIsModalOpen(true);

}

function handleAddOpen() {
  setType("addUser")
  setIsModalOpen(true);
}



  return (
  <>
    <Card className='mt-24 max-w-[95%] ml-10'>
    <Title>Lista de Usuarios</Title>
    <ModalDialog open={isModalOpen} handleClose={handleClose} formType={type} data={props.users} selectedUser={selectedUser}/>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Apellido</TableHeaderCell>
          <TableHeaderCell>Correo</TableHeaderCell>
          <TableHeaderCell>Télefono</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.first_name}</TableCell>
            <TableCell>
              <Text>{user.last_name}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.phone_number}</Text>
            </TableCell>
            <TableCell>
            <Badge color="blue">
              
            <button onClick={() =>{ 
              handleEditOpen(user.id)}}><MdModeEditOutline/></button>
              </Badge>
              
            </TableCell>
            <TableCell>
            <Badge color="red">
                <button onClick={
                  () =>{ 
                    handleDeleteOpen(user.id)}}><AiFillDelete/></button>           
              </Badge>
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  <button onClick={handleAddOpen} className='bg-secondary text-center w-20 h-10 font-bold ml-10 rounded-full mt-5 md:text-base text-sm mb-auto flex justify-center items-center'><AiOutlinePlus size={30} /></button>

</>
  )
}

export default UsuariosSection