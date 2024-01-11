import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // 회원가입 처리 로직
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="이름" name="name" onChange={handleChange} />
      <TextField label="이메일" name="email" onChange={handleChange} />
      <TextField label="비밀번호" name="password" type="password" onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary">회원가입</Button>
    </form>
  );
};

export default SignUp;
