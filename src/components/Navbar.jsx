import React from "react";
import styled from "styled-components";
import { defaultPadding } from "../Styled";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNavDiv1>
      {/* Logo */}
      <StyledNavDiv2>
        <Link to="/">
          <h1>ALLIGHT</h1>
        </Link>
      </StyledNavDiv2>
      <StyledNavDiv2>
        <StyledNavDiv3>상담받기</StyledNavDiv3>
        <StyledNavDiv3>
          <Link to="/feed">피드</Link>
        </StyledNavDiv3>

        <StyledNavDiv3>
          <Link to="/mydiary">나의 일기장</Link>
        </StyledNavDiv3>
        <StyledNavDiv3>
          <Link to="/login">로그인</Link>
        </StyledNavDiv3>
        <StyledNavDiv3>
          <Link to="/signup">회원가입</Link>
        </StyledNavDiv3>
      </StyledNavDiv2>
    </StyledNavDiv1>
  );
}

export default Navbar;

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
