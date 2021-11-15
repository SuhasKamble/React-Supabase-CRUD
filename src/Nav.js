import React, { useState } from 'react'

const Nav = () => {
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const openModal =()=>{
        setIsOpenModal(!isOpenModal);  
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        const data = {firstName:firstName, lastName:lastName, email:email, phone:phone};
        alert(data)
        const res = await fetch('https://otognfmsxrwlfkfnvoer.supabase.co/rest/v1/crud',{
            method:"POST",
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
        setIsOpenModal(false);
        alert("Data added successfully!")
        window.location.reload(false)
    }
    
    return (
        <>
        <nav>
            <div className="logo">Supabase CRUD</div>
            <button className="updateBtn" id="openInsertModal" onClick={openModal}>Insert Data</button>
        </nav>

        {/* <!-- ! Insert Modal --> */}
        <div class={"insert-modal "+ (isOpenModal ? "active":"")}>
            <div class="insert">
                <button class="del-insert" onClick={openModal}>
                    <i class="fa fa-times"></i>
                </button>
                <h2 class="title">Insert Data</h2>
                <input type="text" id="insertFname" placeholder="First Name..." value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" id="insertLname" placeholder="Last Name..." value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type="email" id="insertEmail" placeholder="Email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" id="insertPhone" placeholder="Phone Number..." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <div class="btn-container">
                    <button class="updateBtn" id="insertData" onClick={submitForm}>Submit</button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Nav
