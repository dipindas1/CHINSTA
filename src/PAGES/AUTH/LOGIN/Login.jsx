import { Card, InputNumber, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import {
  InstagramFilled,
  BellOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './Login.css'


function Login() {

  const [signUpStatus, setSignUpStatus] = useState(false);

  // const layout = {
  //   labelCol: {
  //     span: 8,
  //   },
  //   wrapperCol: {
  //     span: 16,
  //   },
  // };
  
  /* eslint-disable no-template-curly-in-string */
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
    <div className="full-screen-background" style={{ backgroundColor: '', height: '' }}>
      <div>
        <Header className="header">
          <div className="header-left">
            <div className="logo">
              <InstagramFilled style={{ fontSize: "20px", color: "lightblue", marginRight: "1vh" }} />
              <span style={{ color: "white", fontFamily: "fantasy", fontSize: "20px" }}>App name</span>
            </div>
          </div>
          <div className="header-right">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key={'1'}>
                {/* <BellOutlined style={{  color: "lightblue",fontSize: "23px" }} /> */}
              </Menu.Item>
            </Menu>
          </div>
        </Header>
      </div>
      <div className="col-12 justify-content-center d-flex align-items-center" style={{ marginTop: '10%', height: '100%', width: '100%', backgroundColor: '' }}>

        {signUpStatus === false&&(
        <div className="">
          <Card className='shadow card-shadow' >
            <div className="col-12 justify-content-center d-flex align-items-center">
              <h2>LOG IN</h2>
            </div>

          <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      // wrapperCol={{
      //   offset: 8,
      //   span: 16,
      // }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      // wrapperCol={{
      //   offset: 8,
      //   span: 16,
      // }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  <div className="col-12  justify-content-center d-flex align-items-center">
  <span
  onClick={()=>{
    console.log("go to sign up");
    setSignUpStatus(true)
  }}
  >Sign Up?</span>
  </div>
          </Card>
        </div>

)}

{signUpStatus &&(

<div className="">
<Card className='shadow card-shadow' >
  <div className="col-12 justify-content-center d-flex align-items-center">
    <h2>SIGN UP</h2>
  </div>
  <Form
    // {...layout}
    name="nest-messages"
    // onFinish={onFinish}
    // style={{
    //   maxWidth: 600,
    // }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['user', 'name']}
      label="Username"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Bio">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        // ...layout.wrapperCol,
        // offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
<div className="col-12  justify-content-center d-flex align-items-center">
<span
onClick={()=>{
console.log("go to sign up");
setSignUpStatus(false)
}}
>Sign In?</span>
</div>
</Card>
</div>
)} 


       
        
      </div>
    </div>
  );
}

export default Login;
