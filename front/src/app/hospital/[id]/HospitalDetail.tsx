'use client';
// components/HospitalDetail.tsx
import React from 'react';
import { Descriptions, Card, Button, Row, Col } from 'antd';
import { ReservationButton } from './ReservationButton';
import Calendar from '@/app/calendar/calender';

interface HospitalData {
  id: number;
  name: string;
  address: string;
  image: string;
  description: string;
  phone: string;
}

interface HospitalDetailProps {
  hospitalData: HospitalData;
}

function HospitalDetail({ hospitalData }: HospitalDetailProps) {
  return (
    <div className="hospital-detail">
      <div className="hospital-header">
        <h1>{hospitalData.name}</h1>
        <p>{hospitalData.address}</p>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card
            title="病院情報"
            style={{ width: '100%' }}
            className="hospital-card"
          >
            <div className="hospital-description">
              <h3>詳細情報</h3>
              <p>{hospitalData.description}</p>
            </div>
            <div className="hospital-contact">
              <h3>お問い合わせ</h3>
              <Descriptions>
                <Descriptions.Item label="住所">{hospitalData.address}</Descriptions.Item>
                <Descriptions.Item label="電話">{hospitalData.phone}</Descriptions.Item>
              </Descriptions>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card
            title="予約"
            style={{ width: '100%' }}
            className="hospital-card"
          >
            <div className="hospital-calendar">
              <Calendar year={2023} month={9} />
            </div>
            <div className="hospital-action">
              <ReservationButton hospitalId={String(hospitalData.id)} />
            </div>
          </Card>
        </Col>
      </Row>
      <style jsx>{`
        .hospital-detail {
          padding: 20px;
          background-color: #f0f2f5;
        }
        .hospital-header {
          background-color: #fff;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .hospital-header h1 {
          font-size: 24px;
          color: #1890ff;
        }
        .hospital-header p {
          font-size: 16px;
          color: #666;
        }
        .hospital-card {
          margin-top: 20px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .hospital-description h3,
        .hospital-contact h3 {
          font-size: 18px;
          color: #1890ff;
        }
        .hospital-action {
          margin-top: 16px;
          text-align: center;
        }
      
      `}</style>
    </div>
  );
}

export default HospitalDetail;
