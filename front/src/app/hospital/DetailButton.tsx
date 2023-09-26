'use client';
// components/ReservationButton.tsx
import Link from 'next/link';
import { Button } from 'antd';

interface DetailButtonProps {
  hospitalId: string;
}

const DetailButton: React.FC<DetailButtonProps> = ({ hospitalId }) => {
  return (
    <Link href={`/hospital/${hospitalId}`}>
      <Button type="primary">詳細</Button>
    </Link>
  );
};

export default DetailButton;
