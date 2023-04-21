import React, { useState } from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({ inputs, title}) => {

  const [file, setfile] = useState("")

    console.log("file", file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                file
                  ? URL.createObjectURL(file)
                :"https://i.pinimg.com/236x/f9/58/18/f95818f914844d2b1cf7a45b232061d1.jpg"
            
              } 
              alt="" 
              
              />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className='icon'/></label>
                <input 
                type="file" 
                  id='file'
                   onChange={e=> setfile(e.target.files[0])} 
                   style={{ display: "none"}}/>
              </div>
              
              {/* <div className="formInput">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder='John Doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john_doe@gmail.com'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="number" placeholder='088 455 6545'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='BBU Way'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='Cambodia'/>
              </div> */}
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New