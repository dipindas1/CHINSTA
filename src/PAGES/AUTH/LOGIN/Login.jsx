import { Card, InputNumber, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import {
  InstagramFilled,
  BellOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Path from '../../../Route_Path/Route_Path';

function Login() {
  const navigate = useNavigate();
  const [signUpStatus, setSignUpStatus] = useState(false);

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <div className="full-screen-background container-fluid p-0 log-background m-0 " style={{ backgroundColor: '', height: '100vh' }}>
      <div className="center-container col-sm-12">
        <div className="container  log-inner" style={{ backgroundColor: 'white',width:'30%',height:'70%' }}>
          {/* Your content goes here */}helloooo
        </div>
      </div>
    </div>
  );
}

export default Login;
