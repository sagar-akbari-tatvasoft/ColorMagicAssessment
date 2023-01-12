import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: auto;
  border: 1px solid #f2f8fa;
  //   border: 1px solid #f6f8fa;

  margin: 0px auto 10px auto;
  max-width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const Back = styled.button`
  margin: 0.75em;
  border-width: 0px;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
  background-color: #1c9fd4;
  a {
    color: white;
    text-decoration: none;
  }
`;

export const Header = styled.div`
  background-color: #f6f8fa;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Details = styled.section`
  width: 100%;
  height: 100%;
  padding: 1em;
`;
export const Name = styled.section`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0.125em;
`;
export const Origin = styled.section`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 0.125em;
`;
export const Temprament = styled.section`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0.25em;
`;
export const Desc = styled.section`
  font-weight: 400;
  font-size: 12px;
`;
