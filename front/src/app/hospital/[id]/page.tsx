'use client';
'use client';
// pages/hospital/[id].tsx
import { Layout } from 'antd';
import  HospitalDetail  from './HospitalDetail';
import { useSearchParams } from 'next/navigation';
import { hospitalData } from '@/data';

const { Content } = Layout;

const HospitalDetailPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id) - 1;
  return (
    <Layout>
      <Content>
        <div className="site-layout-content">
          <h1>病院詳細ページ</h1>
          <HospitalDetail hospitalData={hospitalData[id]}  />
        </div>
      </Content>
    </Layout>
  );
};

export default HospitalDetailPage;
