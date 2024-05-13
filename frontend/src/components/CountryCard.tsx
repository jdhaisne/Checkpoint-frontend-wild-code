import { Card } from 'antd';
import Link from 'next/link';

export default function CountryCard({country}) {
  return (
    <Card title={country.name} bordered={false} style={{ width: 300 }}>
    <p>{country.emoji}</p>
  </Card>
    
  );
}
