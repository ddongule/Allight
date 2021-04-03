import React from "react";
import styled from "styled-components";
import { defaultPadding } from "../Styled";

function Filter() {
  return (
    <StyledFilterDiv1>
      <StyledFilterDiv2>
        <h1>필터</h1>
      </StyledFilterDiv2>
      <StyledFilterDiv2>
        <StyledFilterDiv3>
          월<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          화<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          수<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          목<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          금<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          토<input type="checkbox" />
        </StyledFilterDiv3>
        <StyledFilterDiv3>
          일<input type="checkbox" />
        </StyledFilterDiv3>
      </StyledFilterDiv2>
      <StyledFilterDiv2>
        <StyledFilterDiv4>검색</StyledFilterDiv4>
      </StyledFilterDiv2>
    </StyledFilterDiv1>
  );
}

export default Filter;

const StyledFilterDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${defaultPadding};
`;

const StyledFilterDiv2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFilterDiv3 = styled.div`
  margin: 0 10px;
`;

const StyledFilterDiv4 = styled.div`
  width: 23.80952380952381vw;
  border: 1px solid red;
`;
