import { Select, Spin } from "antd";
import React from "react";
import { useQuery } from "react-query";
import ErrorWrapper, { Error } from "../../helper/Error";

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

      {/* Error handing block */}
      <ErrorWrapper>
        {isBreedsError ? (
          <Error
            message={
              "Apologies but we could not load new cats breeds for you at this time! Miau!"
            }
          />
        ) : null}
      </ErrorWrapper>

      {isLoadingBreed && <Spin />}

      <Select
        placeholder="Select type"
        style={{ width: 200 }}
        options={breedsData}
      />
    </Container>
  );
}

export default Home;
