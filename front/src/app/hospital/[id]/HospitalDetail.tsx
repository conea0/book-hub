'use client';
// components/HospitalDetail.tsx
import React from 'react';
import { Descriptions, Card, Button, Row, Col ,Rate , Input} from 'antd';
import { ReservationButton } from './ReservationButton';
import Calendar from '@/app/calendar/calender';
import './Detail.css';
import { useState } from 'react';
import Column from 'antd/es/table/Column';



interface HospitalData {
  id: number;
  name: string;
  kind: string;
  address: string;
  image: string;
  description: string;
  comments: string[];
  rate: number[];
  phone: string;
}

interface HospitalDetailProps {
  hospitalData: HospitalData;
}

const { TextArea } = Input;


interface Comment {
  rate: number;
  text: string;
}


const CommentAndRate = () => {
  const [comments, setComments] = useState<Comment[]>([]); // コメントのステート
  const [rate, setRate] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>(''); // コメントのテキストのステート

  const AddComment =() =>{
    if (rate>0){
      setComments([...comments, {rate, text: commentText}]);
      setRate(0);
      setCommentText('');
    }
  }

  return (
    <div>
          <Card
            title="コメント投稿"
            style={{ width: '100%', backgroundColor: '#F7F7F7', margin: '0 auto' ,marginTop: '2rem'}}
            className="hospital-card"
          >
            <Rate allowHalf value={rate} onChange={(value) => setRate(value)} />
            <TextArea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="コメントを入力してください"
            />
            <Button type="dashed" style={{ float: 'right' }} onClick={AddComment}>
              投稿
            </Button>
          </Card>
          <div style={{ display: 'flex', gap: '8px',overflowX: 'scroll' }}>
            {comments.map((comment, index) => (
              <Col span={6} key={index} style={{ marginBottom: '5px' }}>
                <Card key={index} style={{ width: 300, margin: '4px' }}>
                  <Rate disabled defaultValue={comment.rate} />
                  <div style={{ overflowY: 'auto', maxHeight: '100px' }}>
                    {comment.text}
                  </div>
                </Card>
              </Col>
            ))}
          </div>
    </div>
  );
}
  


function HospitalDetail({ hospitalData }: HospitalDetailProps) {
  return (
    <div>
      <div className="hospital-header">
        <h1>{hospitalData.name}</h1>
        <h2>{hospitalData.kind}</h2>
        <p>{hospitalData.address}</p>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card
            title="病院情報"
            style={{ width: '100%', backgroundColor: '#F7F7F7'}}
            className="hospital-card"
          >
            <div style={{display:"flex",overflowX:"scroll"}}>
              <img src={hospitalData.image[0]} width={"100%"}/>
              <img src={hospitalData.image[1]} width={"100%"} />
            </div>
            <div className="hospital-description">
              <h3 className="h3">詳細情報</h3>
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
            style={{ width: '100%', backgroundColor: '#F7F7F7' }}
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

      <CommentAndRate/> {/* CommentFormコンポーネントを呼び出し */}
    </div>
  );
};
export default HospitalDetail;
