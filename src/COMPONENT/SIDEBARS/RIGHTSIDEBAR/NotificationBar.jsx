import React from 'react'
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function NotificationBar() {
  return (
  <>
   <Sider
        width={400} // Adjust the width as needed
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* Add your notification content here */}
      </Sider>
  </>
  )
}

export default NotificationBar
