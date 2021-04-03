import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";

function Diary() {
  return (
    <StyledDiaryDiv1>
      <Navbar />
      <Filter />
    </StyledDiaryDiv1>
  );
}

export default Diary;

const defaultPadding = "3.5714285714285716vw";

const StyledDiaryDiv1 = styled.div`
  padding: 0 ${defaultPadding};
`;
