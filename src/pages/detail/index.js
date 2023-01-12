import React from "react";
import { Link, useParams } from "react-router-dom";
import { Spin } from "antd";
import { useQuery } from "react-query";

import { Error } from "../../helper/Error";
import { fetchCatDetail } from "../../requests/detailRequests";
import {
  Back,
  Container,
  Desc,
  Details,
  Header,
  Image,
  Name,
  Origin,
  Temprament,
} from "./style";

function Detail(params) {
  // Get id from url
  let { id } = useParams();

  // Fetch cat detail
  const {
    isLoading,
    isError,
    data: CatDatail,
  } = useQuery(["CatDetail", id], () => fetchCatDetail(id));

  return (
    <Container>
      <Header>
        <Back>
          <Link to="/">Back</Link>
        </Back>
      </Header>
      {isLoading ? (
        <Spin />
      ) : isError ? (
        <Error message="Apologies but we could not load cat details for you at this time! Miau!"></Error>
      ) : (
        <>
          <Image src={CatDatail?.url} />
          <Details>
            <Name>{CatDatail?.breeds?.[0]?.name || "No Data Found"}</Name>
            <Origin>Origin : {CatDatail?.breeds?.[0]?.origin}</Origin>
            <Temprament>{CatDatail?.breeds?.[0]?.temperament}</Temprament>
            <Desc>{CatDatail?.breeds?.[0]?.description}</Desc>
          </Details>
        </>
      )}
    </Container>
  );
}

export default Detail;
