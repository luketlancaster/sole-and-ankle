import React from "react";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard";
import styled from "styled-components/macro";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
`;

export default ShoeGrid;
