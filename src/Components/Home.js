import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";



export default function Home() {
    const navigate = useNavigate();

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

    <button  type="button" onClick={() => navigate("/login")}>
                  Login
                </button>
    </div>
  )
}
