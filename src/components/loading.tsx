/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-30 14:08:04
 * @LastEditTime: 2023-08-30 15:38:46
 * @LastEditors: Do not edit
 */
import React, { Component } from 'react';
import { Spin, Space } from 'antd';

class App extends Component {
    render(): React.ReactNode {
        return (
            <Space direction="vertical" style={{ width: '100%' }}>
                <Spin tip="Loading">
                    {/* 只需要在内部加一层div即可解决Warning: [antd: Spin] `tip` only work in nest pattern. */}
                    <div className="content" />
                </Spin>
            </Space>
        )
    }
}

export default App;