import { Select, Spin } from "antd";
import React, { useContext } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { Link } from "react-router-dom";
import ErrorWrapper, { Error } from "../../helper/Error";
import { fetchBreedType, fetchCatsInfo } from "../../requests/homeRequests";
import { CatContext, RESET_PAGE, SET_BREED } from "./CatContext";
import {
  Container,
  DropdownTitle,
  Header,
  CatCard,
  CatContainer,
  CatWrapper,
  LoadMoreButton,
  ViewDetailButton,
  ViewDetailButtonContainer,
} from "./style";

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

  // infiniteQuery object to fetch cats info
  const {
    isLoading: isLoadingCats,
    data: catsData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage: isFetchingNextPageCats,
    isError: isErrorCats,
  } = useInfiniteQuery(
    ["Cats", catContextData?.selectedBreed],
    () =>
      fetchCatsInfo({
        page: catContextData?.page,
        selectedBreed: catContextData?.selectedBreed,
        dispatchEvent: catContextData?.dispatchEvent,
      }),
    {
      // Check for availble next page
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
        ) : isErrorCats && !isLoadingBreed ? (
          <Error
            type={catContextData?.selectedBreed ? "error" : "info"}
            message={
              catContextData?.selectedBreed
                ? "Apologies but we could not load new cats for you at this time! Miau!"
                : "No Breed Selected."
            }
          />
        ) : null}
      </ErrorWrapper>

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

      {(isLoadingCats || isLoadingBreed || isFetching) && <Spin />}

      <CatWrapper>
        {catsData?.pages?.flat(1)?.map((cat, index) => {
          return (
            <CatContainer key={index}>
              <CatCard>
                <img src={cat?.url} alt="Cat" />
                <ViewDetailButtonContainer>
                  <ViewDetailButton>
                    <Link to={`/${cat?.id}`}>View Details</Link>
                  </ViewDetailButton>
                </ViewDetailButtonContainer>
              </CatCard>
            </CatContainer>
          );
        })}
      </CatWrapper>
      {isFetchingNextPageCats && <Spin />}

      {hasNextPage && !isFetchingNextPageCats && (
        <LoadMoreButton
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPageCats}
        >
          Load More
        </LoadMoreButton>
      )}
    </Container>
  );
}

export default Home;
