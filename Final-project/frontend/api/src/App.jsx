import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [city, setCity] = useState('')

  const [record, setRecord] = useState('')
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    await axios.get("http://localhost:1008/getData").then((res) => {
      setRecord(res.data.data);
    })
  }

  const addData = async () => {
    if (editId) {
      await axios.put(`http://localhost:1008/updateData?id=${editId}`, { name, subject, city }).then((res) => {
        alert(res.data.msg);
      })
      fetchData();
    } else {
      await axios.post("http://localhost:1008/addData", { name, subject, city }).then((res) => {
        alert(res.data.msg);
      })
    }
    setName("");
    setSubject("")
    setCity("");
    setEditId(null)
  }

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:1008/deleteData?id=${id}`).then((res) => {
      alert(res.data.msg);
    })
    fetchData();
  }

  const editData = (id) => {
    setEditId(id);

    let found = record.find((el) => el._id == id)
    setName(found.name)
    setSubject(found.subject)
    setCity(found.city)
  }
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Enter your subject' />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter your city' />

      <button onClick={addData}>{editId ? "Update Data" : "Edit Data"}</button>

      {
        record && record.map((e, i) => {
          return <ul key={i}>
            <li>{e._id}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <li>{e.city}</li>
            <button onClick={() => deleteData(e._id)}>Delete</button>
            <button onClick={() => editData(e._id)}>Edit</button>
          </ul>
        })
      }
    </div>
  )
}