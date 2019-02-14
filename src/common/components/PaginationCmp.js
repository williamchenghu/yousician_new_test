// @ flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  onChangeCurrentPage: Function,
  listLength: number,
  currentPageNum: number
};

const StyledPagination = styled.div`
  display: block;
  text-align: center;
  margin: 1em 0em;
`;

const StyledNumber = styled.div`
  margin: 0em 0.2em;
  display: inline-block;
  vertical-align: middle;
  border: 0.1em ${props => props.theme.color.border.primary} solid;
  padding: 0.5em;
  cursor: pointer;
  color: ${props => (props.highlight ? props.theme.color.background.primary : 'inherit')};
`;

const PaginationCmp = ({ currentPageNum, listLength, onChangeCurrentPage }: Props) => {
  //show five items in each page
  const totalPageNumber = Math.ceil(listLength / 5);
  return (
    listLength !== 0 && (
      <StyledPagination>
        {/* if it is not first page show next page button */}
        {currentPageNum !== 1 && (
          <StyledNumber
            onClick={() => {
              onChangeCurrentPage(currentPageNum - 1);
            }}
          >
            &lt;
          </StyledNumber>
        )}

        {Array.from(Array(totalPageNumber).keys(), number => number + 1).map((page, index) => {
          return (
            <StyledNumber
              key={index}
              highlight={currentPageNum === page}
              onClick={() => {
                onChangeCurrentPage(page);
              }}
            >
              {page}
            </StyledNumber>
          );
        })}
        {/* if it is not last page show pre page button */}
        {currentPageNum !== totalPageNumber && (
          <StyledNumber
            onClick={() => {
              onChangeCurrentPage(currentPageNum + 1);
            }}
          >
            &gt;
          </StyledNumber>
        )}
      </StyledPagination>
    )
  );
};

export default PaginationCmp;
