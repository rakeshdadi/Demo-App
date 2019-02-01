import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Layout, Icon } from 'antd';
import '../App.css';

const { Header, Footer, Content } = Layout;

class AppLayout extends React.Component {

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    const { className, children, } = this.props;

    return (
      <Layout id="AppWrapper" className={className}>
        <Header>
          {this.props.pageHeaderText !== 'Welcome' && <Link className="header-icon" to="/"><Icon type="left" /></Link>}
          <span className="header-text">{this.props.pageHeaderText}</span>
        </Header>
        <Content className="app-content">
          {children}
        </Content>
        <Footer />
      </Layout>
    );
  }
}

const StyledAppLayout = styled(AppLayout)`
  .module-body {
    background-color: #f8f9f9;
  }
  .ant-layout-content {
    overflow: initial;
    margin: 24px 24px 0;
    height: 85vh;
  }
  .ant-layout-header {
    padding:0px 25px;
    text-align: center;
    background-color: #2373ef;
    color: #fff;
    font-size: xx-large;
  }
  .ant-layout-header .header-icon {
    float: left;
    color: #FFFFFF;
  }
`;

export default StyledAppLayout;
