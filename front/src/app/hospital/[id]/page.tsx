'use client';
// pages/hospital/[id].tsx
import { Layout,Menu} from 'antd';
import  HospitalDetail  from './HospitalDetail';
import { hospitalData } from '@/data';

const { Header, Content, Footer } = Layout;

const HospitalDetailPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id) - 1;
  return (
    <Layout style={{minHeight:100}}>
       <Header>
        <div/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">病院予約サイト</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div>
          <HospitalDetail hospitalData={hospitalData[id]}  />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>予約アプリ ©2023 Created by Your Company</Footer>
    </Layout>
  );
};

export default HospitalDetailPage;
