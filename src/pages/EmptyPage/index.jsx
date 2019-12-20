import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import Product from './components/Products';
import Users from './components/Users';
import component from '@/locales/zh-TW/component';
import TimelineColor from './TimelineColor';
export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large"></Spin>
      </div>
      <Users />
      <TimelineColor />
    </PageHeaderWrapper>
  );
};
