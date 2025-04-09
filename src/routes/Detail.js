import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Detail.css";

const Detail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/"); //데이터 없을 시 home으로 리디렉트
    }
  });

  if (location.state) {
    return <span>{location.state.title}</span>;
  }

  return null;
};

export default Detail;
