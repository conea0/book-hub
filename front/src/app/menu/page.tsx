'use client';
import React from 'react';
import { Layout, Menu, Breadcrumb, Card, Button, Row, Col } from 'antd';
import './menu.css';
import { servicesData } from '@/data';

const { Header, Content, Footer } = Layout;

const HospitalReservationPage = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">ホーム</Menu.Item>
          <Menu.Item key="2">予約</Menu.Item>
          <Menu.Item key="3">診療所</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>ホーム</Breadcrumb.Item>
          <Breadcrumb.Item>予約</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>予約</h1>
          <Row gutter={[16, 16]}>
            {servicesData.map((item, index) => (
              <Col span={8} key={index}>
                <Card
                  className="service-card"
                  cover={<img alt={item.title} src={item.image} />}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button type="primary">予約する</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>予約アプリ ©2023 Created by Your Company</Footer>
    </Layout>
  );
}

export default HospitalReservationPage;
