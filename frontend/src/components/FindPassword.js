import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const FindPassword = () => {
  const [info, setInfo] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    // 비밀번호 찾기 처리 로직
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="아이디" name="username" onChange={handleChange} />
      <TextField label="이메일" name="email" onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary">비밀번호 찾기</Button>
    </form>
  );
};

export default FindPassword;
