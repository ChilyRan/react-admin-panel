import React, { useEffect, useState } from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import ListTable from '../../components/table/Table'
import { Skeleton } from '@mui/material'
const Single = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() =>{
          setLoading(false)
      }, 1000)
  }, [])
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {
                loading ? (
                  <Skeleton
                        variant='circular'
                        width={100}
                        height={100}
                        animation='wave'
                    />
                ): (
                  <img src="https://i.pinimg.com/originals/0c/15/64/0c1564e7848ca4ede939587fb6bc0900.gif" alt="" 
                  className="itemImg" />
                )
              }
              
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">0856 456 456</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue"> BBU Way</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Garden: </span>
                  <span className="itemValue">PhnomPenh</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Cambodia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/ 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>
          <ListTable/>
        </div>
      </div>
    </div>
  );
}

export default Single