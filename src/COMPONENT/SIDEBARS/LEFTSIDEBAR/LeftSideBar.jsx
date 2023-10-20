import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  BellOutlined,
  InstagramFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import "./LeftSidebar.css";
import { Footer } from "antd/es/layout/layout";

const { Sider } = Layout;


function LeftSideBar() {
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);
  console.log("isMinimized",isSidebarMinimized);

  const toggleSidebar = () => {
    setSidebarMinimized(!isSidebarMinimized);
  };

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

    if(deviceType === 'tablet'){
      setSidebarMinimized(true)
    }

    // Listen for the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [deviceType]);

  return (
    <>
      <Sider
        collapsible
        collapsed={isSidebarMinimized}
        onCollapse={toggleSidebar}
        width={200}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item
            key="logo"
            style={{
              backgroundColor: "lightgray",
              color: "black",
              fontFamily: "fantasy",
              fontSize: "20px",
              marginBottom: "3vh",
            }}
            icon={
              <InstagramFilled
                style={{
                  fontSize: "20px",
                  color: "red",
                  marginTop: "4px",
                  marginRight: "1vh",
                }}
              />
            }
          >
            App name
          </Menu.Item>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            HOME
          </Menu.Item>

          <Menu.Item key="2" icon={<SearchOutlined />}>
            SEARCH
          </Menu.Item>
          <Menu.Item key="3" icon={<CompassOutlined />}>
            EXPLORE
          </Menu.Item>
          <Menu.Item key="4" icon={<BellOutlined />}>
            NOTIFICATION
          </Menu.Item>
          <Menu.Item key="5" icon={<PlusCircleFilled />}>
            POST
          </Menu.Item>
        </Menu>
      </Sider>
{deviceType === 'mobile' &&(
      <Footer className="mobile-footer ">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} className="full-menu">
          
          <Menu.Item key="1" icon={<HomeOutlined />}>
           
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined />}>
          
          </Menu.Item>
          <Menu.Item key="5" icon={<PlusCircleFilled />}>
          </Menu.Item>
          <Menu.Item key="3" icon={<CompassOutlined />}>
            
          </Menu.Item>
          <Menu.Item key="4" icon={<BellOutlined />}>
          </Menu.Item>
          
          
        </Menu>
      </Footer>
      )}


    </>
  );
}

export default LeftSideBar;
