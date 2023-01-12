import React from "react";
import { useParams } from "react-router-dom";

function Detail(params) {
  const { id } = useParams();
  return <>Detail page {id}</>;
}

export default Detail;
