'use client';
import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Card, Button, Row, Col } from 'antd';
import { servicesData } from '@/data';

const HospitalReservationPage = () => {
  return (
    <Layout className="layout">
      {/* ... */}
      <div className="site-layout-content">
        <h1>予約</h1>
        <Row gutter={[16, 16]}>
          {servicesData.map((item, index) => (
            <Col span={8} key={index}>
              <Card className="service-card" cover={<img alt={item.title} src={item.image} />}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* リンクを追加 */}
                <Link href={`/reservation/${index}`}>
                  <Button type="primary">予約する</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
}

export default HospitalReservationPage;
