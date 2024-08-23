import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './Dashboard.scss'

function Dashboard(props) {
    const { profile } = props;
    const navigate = useNavigate();

    
    
  return (
    <div>
      <div>

      </div>
      <div>
      <Navbar></Navbar>
      </div>
    </div>
  )
}

export default Dashboard
