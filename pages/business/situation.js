import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Layout from '../../components/common/Layout'
import Contents from '../../components/situation/Contents'

const Situation = ({ list }) => {
  return (
    <Layout>
      <Head>
        <title>営業状況</title>
      </Head>
      <Contents list={list} />
    </Layout>
  )
}

Situation.getInitialProps = async function (props) {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');

  const { store, isServer } = props.ctx
  store.dispatch({ type: 'LOAD_DATA' })

  // if (!store.getState().placeholderData) {
  //   store.dispatch(loadData())
  // }
  console.log('situation init')

  return { isServer }

  // return {
  //   list: data,
  // }
}

const mapStateToProps = (state) => {
  console.log('### :: ', state)
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, null)(Situation)
