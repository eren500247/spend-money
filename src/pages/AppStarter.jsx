import React, { useEffect } from "react";
import { Outlet, json } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addData } from "../store/allSlice";

const AppStarter = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const onStartUp = async()=>{
      const response = await fetch("/config/data.json")
      const data = await response.json();
      dispatch(addData(data.datas))
    }
    onStartUp()
  },[])
  return (
    <div>
      <Header />
      <div className="p-2 mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default AppStarter;
