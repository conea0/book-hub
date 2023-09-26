// src/Calendar.tsx

import React from 'react';
import { Table } from 'antd';
import { AppointmentData } from '@/types';
import './Calendar.css';

const columns = [
    {
        title: '',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '日曜日',
        dataIndex: 'sunday',
        key: 'sunday',
      },
      {
        title: '月曜日',
        dataIndex: 'monday',
        key: 'monday',
      },
      {
        title: '火曜日',
        dataIndex: 'tuesday',
        key: 'tuesday',
      },
      {
        title: '水曜日',
        dataIndex: 'wednesday',
        key: 'wednesday',
      },
      {
        title: '木曜日',
        dataIndex: 'thursday',
        key: 'thursday',
      },
      {
        title: '金曜日',
        dataIndex: 'friday',
        key: 'friday',
      },
      {
        title: '土曜日',
        dataIndex: 'saturday',
        key: 'saturday',
      },
];

const data: AppointmentData[] = [];
// サンプルデータを生成
for (let i = 0; i < 48; i++) {
  data.push({
    key: i,
    time: i % 2 === 0 ? `${Math.floor(i / 2)}:00` : `${Math.floor(i / 2)}:30`,
    sunday: '○',
    monday: '×',
    tuesday: '○',
    wednesday: '×',
    thursday: '○',
    friday: '×',
    saturday: '○',
  });
}

const Calendar: React.FC = () => {
  return <Table columns={columns} dataSource={data} bordered pagination={false} />;
};

export default Calendar;

