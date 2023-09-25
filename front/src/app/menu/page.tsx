'use client';
import React from 'react';
import { Layout, Menu, Breadcrumb, Card, Button, Row, Col } from 'antd';
import './menu.css';

const { Header, Content, Footer } = Layout;

const servicesData = [
  {
    title: '一般診療',
    description: '一般的な健康問題の診療',
    image: '/images/general_practice.jpg',
  },
  {
    title: '歯科治療',
    description: '歯科検診と治療',
    image: '/images/dental.jpg',
  },
  {
    title: '眼科診療',
    description: '視力検査と眼の健康管理',
    image: '/images/ophthalmology.jpg',
  },
  {
    title: '内科診療',
    description: '内部の健康問題の診療',
    image: '/images/internal_medicine.jpg',
  },
];

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
