import React from 'react'

const Row = ({data, updateRow}) => {

    const deleteRow = async(id)=>{
        const res = await fetch(`https://otognfmsxrwlfkfnvoer.supabase.co/rest/v1/crud?id=eq.${id}`,{
            method:"DELETE",
            headers:{
                "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",
                "Bearer":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo"
              }
        })

        alert('Data deleted...')
        window.location.reload(false)
    }

    return (
        <>
        <tr>
            <td>{data.id}</td>   
            <td>{data.firstName}</td>   
            <td>{data.lastName}</td>   
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td><button className="delBtn" onClick={()=>deleteRow(data.id)}>Delete</button></td>   
            <td><button className="updateBtn" onClick={()=>updateRow(data)}>Update</button></td>   
        </tr>

        </>
    )
}

export default Row
