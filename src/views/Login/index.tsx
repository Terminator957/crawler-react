/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-24 16:30:41
 * @LastEditTime: 2023-08-30 11:07:37
 * @LastEditors: Do not edit
 */
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Navigate } from 'react-router-dom';
import { login } from '@/api/login'
import { RequestType } from '@/types/api.d';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

class Login extends React.Component {
    state = {
        isLogin: false
    }
    onFinish = (values: any) => {
        login(values).then((res: RequestType) => {
            if (res.data) {
                message.success(res.msg)
                this.setState({
                    isLogin: res.data,
                    loaded: true
                })
            } else {
                message.error(res.msg)
            }
        })
    }
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    render(): React.ReactNode {
        const { isLogin } = this.state
        return (
            isLogin ? <Navigate to="/" /> : <div className='login_form'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input autoComplete="off" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password autoComplete="off" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>)
    }
}

export default Login;