import React, { useEffect, useState } from 'react'

export default function login() {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const handlechange = (e) => {
    if (e.target.name == "fullname") {
        setname(e.target.value)
    }
    if (e.target.name == "email") {
        setemail(e.target.value)
    }
    if (e.target.name == "password") {
        setpassword(e.target.value)
    }
}

const reset = () => {
  setname("");
  setemail("");
  setpassword("");
}

const handlesubmit = async (e) => {
  e.preventDefault()
  const datatosend = { name, email, password }
  
  let res = await fetch('http://localhost:3000/api/handlesignup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application / json'
      }, 
      body: JSON.stringify(datatosend),
  })

  let response = await res.json()
  if (response.error)
      console.log("Error")
  else
      console.log("Your Account has been successfully created")

  reset();
}

  return (
    <>
      <form class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500" onSubmit={handlesubmit} >
        <h1 class="text-2xl font-bold dark:text-gray-50">Signup</h1>

        <label for="fullname" class="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span class="text-red-500 dark:text-gray-50">*</span></label>
        <input type="text" name="fullname" onChange={handlechange} value={name} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

        <label for="email" class="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span class="text-red-500">*</span></label>
        <input type="email" onChange={handlechange} value={email} name="email" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

        <label for="subject" class="text-gray-500 font-light mt-4 dark:text-gray-50">Password<span class="text-red-500">*</span></label>
        <input type="text" onChange={handlechange} value={password} name="password" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />


        <div class="flex flex-row items-center justify-start">
          <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
            Submit
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}