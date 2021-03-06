import { Stack, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingCount, lastPage)
        )
      : [];
  return (
    <Stack
      direction='row'
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>2</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {currentPage > 1 + siblingCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingCount && (
              <Text
                color='gray.300'
                width='8'
                textAlign='center'
                verticalAlign='middle'
              >
                ...
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />
        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        {currentPage + siblingCount < lastPage && (
          <>
            {currentPage + 1 + siblingCount < lastPage && (
              <Text
                color='gray.300'
                width='8'
                textAlign='center'
                verticalAlign='middle'
              >
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
