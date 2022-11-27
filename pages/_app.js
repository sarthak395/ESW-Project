import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import BIRDS from "vanta/dist/vanta.birds.min"
import * as THREE from "three"
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { data } from 'autoprefixer'

function MyApp({ Component, pageProps }) {

  const [user, setuser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("datauser")) {
      setuser(JSON.parse(localStorage.getItem("datauser")))
    }
  }, [router.query]) // runs after every router change

  const logout = () => {
    localStorage.removeItem('datauser')
    setuser(null)
  }

  const saveuser = (uemail,uname) =>{
    const datauser = { uname , uemail }
    setuser(datauser)
    localStorage.setItem("datauser", JSON.stringify(datauser))
  }

  return (<div>
  <Navbar logout={logout} user={user} saveuser={saveuser}/>
  <Component user={user} saveuser={saveuser} {...pageProps} />
  </div>)
}

export default MyApp
