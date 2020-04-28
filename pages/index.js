import React from 'react'
import Head from 'next/head'
import {Button} from "antd"
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <Button type="primary">我是antd按钮</Button>
    </div>
 </>
)
export default Home