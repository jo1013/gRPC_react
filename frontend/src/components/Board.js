import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

const Board = () => {
  // 게시판 데이터 상태와 로직 추가
  const posts = []; // 예시 데이터

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell align="right">작성자</TableCell>
            <TableCell align="right">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button color="primary">글쓰기</Button>
    </TableContainer>
  );
}

export default Board;
