import React from 'react'
import Head from 'next/head'
import Layout from '../../components/common/Layout'
import Contents from '../../components/employees/Contents'

const Employees = ({ employees }) => {
  return (
    <Layout>
      <Head>
        <title>要員情報</title>
      </Head>
      <Contents employees={employees} />
    </Layout>
  )
}

Employees.getInitialProps = async function () {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = [
    {
      name: 'KDY',
      age: 30,
      nationality: '韓国',
      years: '１年６ヶ月',
      skill: 'HTML,CSS',
      experience: '要件定義、基本設計、詳細設計、製造、テスト…',
    },
    {
      name: 'KDY',
      age: 30,
      nationality: '韓国',
      years: '１年６ヶ月',
      skill: 'HTML,CSS',
      experience: '要件定義、基本設計、詳細設計、製造、テスト…',
    },
    {
      name: 'KDY',
      age: 30,
      nationality: '韓国',
      years: '１年６ヶ月',
      skill: 'HTML,CSS',
      experience: '要件定義、基本設計、詳細設計、製造、テスト…',
    },
    {
      name: 'KDY',
      age: 30,
      nationality: '韓国',
      years: '１年６ヶ月',
      skill: 'HTML,CSS',
      experience: '要件定義、基本設計、詳細設計、製造、テスト…',
    },
  ]
  return {
    employees: data,
  }
}

export default Employees
