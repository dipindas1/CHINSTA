import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Menu, message, Upload } from "antd";
import { Header } from "antd/es/layout/layout";
import { InstagramFilled, BellOutlined } from "@ant-design/icons";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const ProfilePic = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <div>
        <Header className="header">
          <div className="header-left">
            <div className="logo">
              <InstagramFilled
                style={{
                  fontSize: "20px",
                  color: "lightblue",
                  marginRight: "1vh",
                }}
              />
              <span
                style={{
                  color: "white",
                  fontFamily: "fantasy",
                  fontSize: "20px",
                }}
              >
                App name
              </span>
            </div>
          </div>
          <div className="header-right">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key={"1"}>
                {/* <BellOutlined style={{  color: "lightblue",fontSize: "23px" }} /> */}
              </Menu.Item>
            </Menu>
          </div>
        </Header>
      </div>
      <div
        className="col-12 justify-content-center d-flex align-items-center"
        style={{
          marginTop: "10%",
          height: "100%",
          width: "100%",
          backgroundColor: "",
        }}
      >
        <div className="">
          <Card className="shadow card-shadow" style={{ width: '80vh'}}>
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
              <Form.Item name="profile_picture">
                <Upload
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
              <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {/* <div className="col-12  justify-content-center d-flex align-items-center">
  <span
  onClick={()=>{
    console.log("go to sign up");
    setSignUpStatus(true)
  }}
  >Sign Up?</span>
  </div> */}
          </Card>
        </div>
      </div>
    </>
  );
};
export default ProfilePic;
