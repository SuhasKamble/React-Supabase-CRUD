import React, { useEffect, useState } from 'react'
import './App.css'
import Nav from './Nav'
import Row from './Row'

const App = () => {
  const [rows, setRows] = useState([]);
  const [isOpenModal, setIsOpenModa] = useState(false);
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Id, setId] = useState("")


  const getData = async()=>{
    const res = await fetch("https://otognfmsxrwlfkfnvoer.supabase.co/rest/v1/crud?select=*",{
      method:"GET",
      headers:{
        "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",

        "Bearer":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo"
      }
    })

    const data = await res.json();
    setRows(data);
  }
  
  useEffect(()=>{
    getData();
  },[])

  const updateRow = (data)=>{
    setIsOpenModa(!isOpenModal);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setPhone(data.phone);
    setId(data.id)
  }

  const submitForm=async(id)=>{
    // e.preventDefault();
    const data = {firstName:firstName, lastName:lastName, email:email, phone:phone};
    alert(data)
    const res = await fetch(`https://otognfmsxrwlfkfnvoer.supabase.co/rest/v1/crud?id=eq.${id}`,{
        method:"PATCH",
        headers:{
            "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",
            "Bearer":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data)
    })
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setIsOpenModa(false)
    alert("Data updated successfully!")
    window.location.reload(false)
  }

  return (
    <>
    <Nav/>
    <div className="container">
    <h2 class="title">Display All Data</h2>
        <table class="table">
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
          {
            rows.map(row=>{
              return <Row data={row} updateRow={updateRow} key={row.id}/>
            })
          }
        </table>
    </div>

    <div class={"update-modal " + (isOpenModal ? "active":"")}>
        <div class="update">
        <button class="del-update" onClick={()=>setIsOpenModa(false)}>
                    <i class="fa fa-times"></i>
                </button>
                <h2 class="title">Insert Data</h2>
                <input type="text" id="insertFname" placeholder="First Name..." value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" id="insertLname" placeholder="Last Name..." value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type="email" id="insertEmail" placeholder="Email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" id="insertPhone" placeholder="Phone Number..." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <div class="btn-container">
                    <button class="updateBtn" id="insertData" onClick={()=>submitForm(Id)}>Submit</button>
                </div>
        </div>
    </div>
    </>
  )
}

export default App
