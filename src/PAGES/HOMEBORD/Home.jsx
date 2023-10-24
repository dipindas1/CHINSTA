import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  InstagramFilled,
  BellOutlined,

} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import NotificationBar from '../../COMPONENT/SIDEBARS/RIGHTSIDEBAR/NotificationBar';
import LeftSideBar from '../../COMPONENT/SIDEBARS/LEFTSIDEBAR/LeftSideBar';
import './Home.css'
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Home = () => {
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);

  const [deviceType, setDeviceType] = useState(getDeviceType());

  console.log("size",deviceType);

  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) {
      return 'mobile'; // You can customize this value
    } else if (width < 1024) {
      return 'tablet'; // You can customize this value
    } else {
      return 'desktop'; // You can customize this value
    }
  }

  useEffect(() => {
    function handleResize() {
      const newDeviceType = getDeviceType();
      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType);
      }
    }

    // Listen for the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceType]);


  const toggleSidebar = () => {
    setSidebarMinimized(!isSidebarMinimized);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Layout hasSider>
        <LeftSideBar/>

      <Layout
        className="site-layout"
        style={{
          marginLeft:'auto', // Adjust the width as needed
        }}
      >
        {/* <Header
        // className='mobile-footer '
          style={{
            padding: 0,
            background: colorBgContainer,
            // position:'fixed',
          }}
        /> */}
  <Header className="header">
      <div className="header-left">
        <div className="logo">
          <InstagramFilled style={{ fontSize: "20px", color: "lightblue", marginRight: "1vh" }} />
          <span style={{ color: "white", fontFamily: "fantasy", fontSize: "20px" }}>App name</span>
        </div>
      </div>
      <div className="header-right">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key={'1'}> <BellOutlined style={{  color: "lightblue",fontSize: "23px" }} />
            </Menu.Item>
        </Menu>
      </div>
    </Header>


        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
         
          <div
          className='content'
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ),
              )
            }
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>

      {/* <NotificationBar/> */}

      {/* <Sider
        width={300} // Adjust the width as needed
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
        }}
      > */}
        {/* Add your notification content here */}
      {/* </Sider> */}
    </Layout>
  );
};

export default Home;
