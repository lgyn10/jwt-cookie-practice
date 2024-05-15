const express = require('express');
const router = express.Router();
// jwt 관련 설정
const jwt = require('jsonwebtoken');
require('dotenv').config();
// 쿠키 모듇 주입
require('cookie-parser');

router.post('/login', (req, res) => {
  const token = jwt.sign(
    { email: loginInfo.email, password: loginInfo.password },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: '3m', issuer: 'changyunlee' }
  );
  res.cookie('token', token, { httpOnly: true });
});
