import { Select, Spin } from "antd";
import React, { useContext } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import ErrorWrapper, { Error } from "../../helper/Error";

import { fetchBreedType, fetchCatsInfo } from "../../requests/homeRequests";
import { CatContext, RESET_PAGE, SET_BREED } from "./CatContext";
import { Container, DropdownTitle, Header } from "./style";

function Home(params) {
  // Context to utilize context state
  const catContextData = useContext(CatContext);

  // query object to fetch breed types
  const {
    isLoading: isLoadingBreed,
    isError: isBreedsError,
    data: breedsData,
  } = useQuery(["breed"], () => fetchBreedType(), {
    keepPreviousData: true,
  });

  const { data } = useInfiniteQuery(
    ["cats", catContextData?.selectedBreed],
    () => {
      fetchCatsInfo({
        page: catContextData?.page,
        selectedBreed: catContextData?.selectedBreed,
        dispatchEvent: catContextData?.dispatchEvent,
      });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.length < 10 ? undefined : lastPage;
      },
      keepPreviousData: true,
    }
  );

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

      {!isBreedsError && !isLoadingBreed && (
        <>
          <DropdownTitle>Breed</DropdownTitle>
          <Select
            placeholder="Select type"
            style={{ width: 200 }}
            value={catContextData?.selectedBreed}
            onChange={(value) => {
              catContextData?.dispatchEvent(SET_BREED, value);
              catContextData?.dispatchEvent(RESET_PAGE);
            }}
            options={breedsData}
          />
          <br />
        </>
      )}
    </Container>
  );
}

export default Home;
