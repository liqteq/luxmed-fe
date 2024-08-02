'use client'
import { Checkbox, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { CustomTableProps } from './types';

const CustomTable: React.FC<CustomTableProps> = (props) => {

  const { heading, data, onChange } = props

  const [checkboxState, setCheckboxState] = useState(data);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => event => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[rowIndex][columnKey] = event.target.checked;
    setCheckboxState(newCheckboxState);
  };

  const handlePriceUpdate = (rowIndex: number, value: string) => {
    setCheckboxState(prev => {
      return prev.map((it, index) => {
        return index === rowIndex ? { ...it, price: value } : it
      })
    })
  }

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
      render: (value, record, rowIndex) => (
        <p className='text-[#999999]'>{value}</p>
      )
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
      render: (value, record, rowIndex) => (
        <p className='text-[#999999]'>{value}</p>
      )
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: 'center',

      render: (value: any, _record: any, rowIndex: number) => (
        <input value={value} onChange={e => {
          handlePriceUpdate(rowIndex, e.target.value)
        }}
          style={{ backgroundColor: 'transparent', color: '#666666', outlineWidth: 0, textAlign: 'center' }}
          placeholder="$ 0.00"
        />
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

  useEffect(() => {
    onChange(checkboxState)
  }, [checkboxState, onChange])


  return (
    <div>
      <h4 className='font-bold my-3 custom-table'>{heading}</h4>
      <Table
        columns={columns}
        dataSource={checkboxState}
        className='mb-4'
        pagination={false}
        size='small'
      />
    </div>
  )
}

export default CustomTable