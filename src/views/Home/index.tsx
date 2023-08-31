/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-28 09:50:21
 * @LastEditTime: 2023-08-31 10:53:26
 * @LastEditors: Do not edit
 */
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Button, message } from 'antd'
import './style.scss'
import { isLogin, logout } from '@/api/login'
import { RequestType } from '@/types/api.d';
import { getData, showData } from '@/api/crawler'

interface HomeState {
    isLogin: boolean;
    loading: boolean;
    showTable: boolean;
    isRemoving: boolean;
    dataLists: responseResult.DataLists; // 使用 DataItem 类型的数组
}

class Home extends Component {
    state: HomeState = {
        isLogin: false,
        loading: false,
        showTable: false,
        isRemoving: false,
        dataLists: {}
    }
    componentDidMount() {
        isLogin().then(res => {
            this.setState(
                {
                    isLogin: res.data,
                    loading: true
                }
            )
        })
    }
    handleGetdataClick = () => {
        this.setState({
            isRemoving: true
        })
        getData().then((res: RequestType) => {
            message.success(res.msg)
        })
    }
    handleShowDataClick = () => {
        this.setState({
            showTable: true,
            isRemoving: false
        })
        showData().then((res: RequestType) => {
            if (Object.keys(res.data).length > 0) {
                this.setState({
                    dataLists: res.data
                })
            }
        })
    }
    logout = () => {
        logout().then((res: RequestType) => {
            if (!res.data) {
                this.setState({
                    isLogin: false
                })
                message.success(res.msg)
            }
        })
    }
    render(): React.ReactNode {
        const { isLogin, loading, showTable, isRemoving, dataLists } = this.state;
        if (!loading) {
            return null
        }
        return (
            isLogin ? <div className="home-page">
                <div className="home-page-btn animate__animated animate__backInDown">
                    <Button type="primary" onClick={this.handleGetdataClick}>爬取数据</Button>
                    <Button type="primary" className="margin-l-10" onClick={this.handleShowDataClick}>展示数据</Button>
                    <Button type="primary" className="margin-l-10" onClick={this.logout}>退出</Button>
                </div>
                {showTable && <div className={`home-page-table animate__animated ${isRemoving ? 'animate__bounceOutDown' : 'animate__bounceInUp'}`} onAnimationEnd={() => isRemoving && this.setState({ isRemoving: false, showTable: false })}>
                    {Object.entries(dataLists).map(([date, movies]) => (
                        <div key={date} className="data-box">
                            <div className="data-date">{date}</div>
                            <div className="data-list">
                                {movies.map((movie, index) => (
                                    <div key={index}>
                                        <a href={movie.post} target="_blank" rel="noopener noreferrer" className="movie-item">
                                            <div className="movie-item-img"><img src={movie.img} alt={movie.name} /></div>
                                            <div>{movie.name}</div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>}
            </div> : <Navigate to="/login" />
        )
    }
}

export default Home