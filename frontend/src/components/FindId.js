import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const FindId = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // 아이디 찾기 처리 로직
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="이메일" onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">아이디 찾기</Button>
    </form>
  );
};

export default FindId;
