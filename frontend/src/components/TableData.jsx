import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const TableData = () => {

    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/table'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setTableData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    const columns = [
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
      { title: 'Price', dataIndex: 'price', key: 'price' },
    ];

  return (
    <div>
     <Table
      dataSource={tableData}
      columns={columns}
      loading={loading}
      pagination={{ pageSize: 3 }}
    />
    </div>
  )
}

export default TableData
