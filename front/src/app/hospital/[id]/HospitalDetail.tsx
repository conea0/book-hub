'use client';
// components/HospitalDetail.tsx
import React from 'react';
import { Descriptions } from 'antd';
import { ReservationButton } from './ReservationButton';
import { HostCancellationToken } from 'typescript';


interface HospitalData {
  id: number,
  name: string,
  address: string,
  image: string,
  description: string,
  phone: string,
}

interface HospitalDetailProps {
  hospitalData: HospitalData;
}

const HospitalDetail = ({hospitalData}: HospitalDetailProps) => {
  return (
    <div className="hospital-detail">
      <div className="hospital-header">
        <h2>{hospitalData.name}</h2>
        <p>{hospitalData.address}</p>
      </div>
      <div className="hospital-description">
        <h3>詳細情報</h3>
        <p>{hospitalData.description}</p>
      </div>
      <div className="hospital-contact">
        <h3>お問い合わせ</h3>
        <Descriptions>
          <Descriptions.Item label="電話">{hospitalData.phone}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className="hospital-action">
        <ReservationButton hospitalId={String(hospitalData.id)} />
      </div>
    </div>
  );
};

export default HospitalDetail;
