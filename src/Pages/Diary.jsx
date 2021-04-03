import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Post from "../components/Post";
import { defaultPadding } from "../Styled";

function Diary() {
  let length = 20;
  const numberOfDiaries = [];

  for (let i = 0; i < length; i++) {
    numberOfDiaries.push(i);
  }

  return (
    <StyledDiaryDiv1>
      <Filter />
      {numberOfDiaries.map((diary, i) => (
        <div key={i}>
          <Post />
        </div>
      ))}
    </StyledDiaryDiv1>
  );
}

export default Diary;

const StyledDiaryDiv1 = styled.div`
  padding: 0 ${defaultPadding};
`;
