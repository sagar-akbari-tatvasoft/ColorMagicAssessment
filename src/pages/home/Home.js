import { Select } from "antd";
import React from "react";
import { useQuery } from "react-query";

import { fetchBreedType } from "../../requests/homeRequests";
import { Container, Header } from "./style";

function Home(params) {
  // query object to fetch breed types
  const {
    isLoading: isLoadingBreed,
    isError: isBreedsError,
    data: breedsData,
  } = useQuery(["breed"], () => fetchBreedType(), {
    keepPreviousData: true,
  });

  return (
    <Container>
      <Header>Cat Browser</Header>

      {isBreedsError && "Error"}
      {isLoadingBreed && "loading"}

      <Select
        placeholder="Select type"
        style={{ width: 200 }}
        options={breedsData}
      />
    </Container>
  );
}

export default Home;
