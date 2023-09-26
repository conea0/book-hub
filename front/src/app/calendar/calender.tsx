// src/Calendar.tsx

import React, { useState } from 'react';
import { Table, Pagination } from 'antd';
import './Calendar.css';

interface CalendarProps {
  year: number;
  month: number;
}

// 1週間の日数
const daysPerWeek = 7;
// 1日の時間枠（30分ごと）
const timeSlotsPerDay = 24 * 2; // 1時間 = 2スロット

const generateWeekData = (year: number, month: number, weekIndex: number): any[] => {
  const data: any[] = [];

  // 日付の初日を取得
  const startDate = new Date(year, month, 1);

  // 1週間ごとにデータを生成
  for (let i = 0; i < daysPerWeek; i++) {
    const rowData: any = {
      key: i,
    };

    // 日付情報を生成
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i + weekIndex * daysPerWeek);

    // 日付を表示形式に変換
    const formattedDate = currentDate.toLocaleDateString();

    // 日付をデータに追加
    rowData.day = formattedDate;

    // 1日の時間枠ごとのデータを生成
    for (let slot = 0; slot < timeSlotsPerDay; slot++) {
      const timeSlotKey = `${formattedDate}-${slot}`;
      rowData[timeSlotKey] = '○';
    }

    data.push(rowData);
  }

  return data;
};

function Calendar({ year, month }: CalendarProps) {
  const [currentWeek, setCurrentWeek] = useState(1);

  // 列の設定（曜日と時間枠）
  const columns = [
    {
      title: '日付',
      dataIndex: 'day',
      key: 'day',
      width: 120,
      fixed: 'left', // 左端に固定
    },
    ...Array.from({ length: timeSlotsPerDay }, (_, index) => ({
      title: `${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`,
      dataIndex: `timeSlot${index}`,
      key: `timeSlot${index}`,
      width: 80,
    })),
  ];

  const handlePageChange = (page: number) => {
    setCurrentWeek(page);
  };

  // 表示データを生成
  const tableData = generateWeekData(year, month, currentWeek - 1);

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        bordered
        pagination={false}
        scroll={{ y: 400, x: '100%' }}
      />
      <Pagination
        current={currentWeek}
        total={5} // 合計の週数
        pageSize={1}
        onChange={handlePageChange}
        style={{ marginTop: '16px', textAlign: 'center' }}
      />
    </>
  );
}

export default Calendar;
