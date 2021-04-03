import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavDiv1>
      {/* Logo */}
      <StyledNavDiv2>
        <h1>ALLIGHT</h1>
      </StyledNavDiv2>
      <StyledNavDiv2>
        <StyledNavDiv3>상담받기</StyledNavDiv3>
        <StyledNavDiv3>피드</StyledNavDiv3>
        <StyledNavDiv3>나의 일기장</StyledNavDiv3>
        <StyledNavDiv3>로그인</StyledNavDiv3>
        <StyledNavDiv3>회원가입</StyledNavDiv3>
      </StyledNavDiv2>
    </StyledNavDiv1>
  );
}

export default Navbar;

const defaultPadding = "3.5714285714285716vw";

const StyledNavDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${defaultPadding};
`;

const StyledNavDiv2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNavDiv3 = styled.div`
  margin: 0 10px;
`;
