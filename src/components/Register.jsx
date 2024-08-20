
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../Firebase/firebaseConfig"
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";

function Register() {
const [name, setName] = useState('')
const [rollno, setRollno] = useState('')
const [email, setEmail] = useState('')
const [image, setImage] = useState('')


const handleRegister = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, rollno);
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        name: name,
        rollno: rollno,
        File: image,
      });
    }
    alert("User Registered Successfully");
    console.log("User Registered Successfully");
  } catch (error) {
    alert(error.message);
  }
};


console.log(name)
  return (
   <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Full name</label>
          <input
            type="text"
            id="username"
            name="username"
          
            onChange={(e)=>{setName(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700">Roll number</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            onChange={(e)=>{setRollno(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            onChange={(e)=>{setEmail(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Upload Photo</label>
          <input
            type="file"
            id="rollno"
            name="rollno"
            onChange={(e)=>{setImage(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleRegister}

        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
