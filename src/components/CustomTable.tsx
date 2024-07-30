'use client'
import { Checkbox, Table } from 'antd';
import React, { useState } from 'react';
import { CustomTableProps } from './types';
import { aestheticsProducts } from '@/constants/aestheticsProduct.json'

const CustomTable: React.FC<CustomTableProps> = (props) => {

  const { heading, data } = props

  const [checkboxState, setCheckboxState] = useState(data);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => event => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[rowIndex][columnKey] = event.target.checked;
    setCheckboxState(newCheckboxState);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: 'center',

      render: (value, record, rowIndex) => (
        <p className='text-[#999999]'>{value}</p>
      )
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
      align: 'center',
      render: (value, record, rowIndex) => (
        <Checkbox
          checked={value}
          onChange={handleCheckboxChangeFactory(rowIndex, "available")}
          
        />
      )
    },
    {
      title: "In Stock",
      dataIndex: "instock",
      key: "instock",
      align: 'center',
      render: (value, record, rowIndex) => (
        <Checkbox
          checked={value}
          onChange={handleCheckboxChangeFactory(rowIndex, "instock")}
        />
      )
    }
  ];


  return (
    <div>
      <h4 className='font-bold'>{heading}</h4>
      <Table
        columns={columns}
        dataSource={checkboxState}
        className='w-2/3'
        pagination={false}
        bordered
        size='small'
      />
    </div>
  )
}

export default CustomTable