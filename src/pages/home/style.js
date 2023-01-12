import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 3em 5em;
  box-sizing: border-box;
`;

export const Header = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0.75em;
`;

export const DropdownTitle = styled.section`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

export const ViewDetailButtonContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 14px;
`;

export const ViewDetailButton = styled.button`
  width: 100%;
  padding: 0.5em;
  border-width: 0px;
  background-color: #1c9fd4;
  border-radius: 5px;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const CatWrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  box-sizing: border-box;

  overflow-y: auto;
`;

export const CatContainer = styled.section`
  flex-wrap: wrap;

  box-sizing: border-box;
  padding: 1em;
`;

export const CatCard = styled.section`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
