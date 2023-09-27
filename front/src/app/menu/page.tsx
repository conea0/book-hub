'use client';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, Input } from 'antd';
import './menu.css';
import { hospitalData } from '@/data';
import DetailButton from '../hospital/DetailButton';
import {hospital} from '@/types'

const { Header, Content, Footer } = Layout;


const HospitalDetailPage = () => {
  const [searchValue, setSearchValue] = useState<string>(''); // 検索バーの値を管理するステート

  // 検索バーの値が変更されたときのハンドラ
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // フィルタリングされた病院データ
  const filteredHospitals = hospitalData.filter((item: hospital) => {
    const lowercaseSearchValue = searchValue.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowercaseSearchValue) ||
      item.kind.toLowerCase().includes(lowercaseSearchValue)
    );
  });

  // 種別ごとに病院データをグループ化
  const groupedHospitals: { [kind: string]: hospital[] } = {};
  filteredHospitals.forEach((hospital) => {
    if (!groupedHospitals[hospital.kind]) {
      groupedHospitals[hospital.kind] = [];
    }
    groupedHospitals[hospital.kind].push(hospital);
  });

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">病院予約サイト</Menu.Item>
        </Menu>
        <Input
          placeholder="病院名または種別を検索"
          style={{ width: 300, float: 'right', marginTop: 15 }}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '30px 0' }}>
        </Breadcrumb>
        <div className="site-layout-content">
          {Object.keys(groupedHospitals).map((kind, index) => (
            <div key={index}>
              <h1 className='h1'>{kind}</h1>
              <div style={{display:"flex",overflowX:"scroll"}}>
                {groupedHospitals[kind].map((item, index) => (
                  <Col span={8} key={index} style={{ marginBottom: '20px' }}>
                    <Card
                      className="service-card"
                      cover={<img src={item.image} alt={item.name}/>}
                    >
                      <h3>{item.name}</h3>
                      <p>{item.address}</p>
                      <DetailButton hospitalId={String(item.id)} />
                    </Card>
                  </Col>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>予約アプリ ©2023 Created by Your Company</Footer>
    </Layout>
  );
};

export default HospitalDetailPage;
