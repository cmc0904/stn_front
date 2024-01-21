import React, { useState } from 'react';
import Header from '../../component/header';
import SideBar from '../../component/SideBar.js';

import '../../style/admin/repaire.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 import


const RepairReception = () => {

    const handleLogin = async () => {


    };

    return (
        <>
            <Header content="Management" />
            <SideBar content="최문찬" />
            <section id="main">
                <div className="title">A/S 접수 처리</div>
                <div className="container-md">
                    <div className="collapse-box">
                        <div className="information-btn-container">
                            <a data-bs-toggle="collapse" href="#collapseContainer" role="button" aria-expanded="false" aria-controls="collapseContainer">
                                <div className="as-information">
                                    <div className="as-title">
                                        <span style={{ color: 'red' }}>[접수대기]</span>
                                        전원이 켜지지 않습니다.
                                    </div>
                                    <div className="as-profile">
                                        <div>성함 : 최문찬</div>
                                        <div>전화번호 : 010-3792-4983</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="collapse" id="collapseContainer">
                            <div className="card card-body">
                                <div className="as-sub-title">[ 접수자 인적 사항 ]</div>
                                <table className="member_table">
                                    <thead>
                                        <tr>
                                            <td>아이디</td>
                                            <td>성명</td>
                                            <td>주소</td>
                                            <td>전화번호</td>
                                            <td>이메일</td>
                                            <td>성별</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>anscks2350</th>
                                            <th>최문찬</th>
                                            <th>경기도 광주시 태전동 태봉로 50</th>
                                            <th>010-3792-4983</th>
                                            <th>anscks2350@naver.com</th>
                                            <th>M</th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="as-sub-title">[ 접수 처리 ]</div>
                                <div className="as-information">
                                    <div className="desc"><span style={{ color: 'red' }}>-</span> 에어콘 리모콘이 고장 난 것 같습니다.</div>
                                </div>

                                <div className="as-process">
                                    <select className="form-select form-select-lg" aria-label="Large select example">
                                        <option selected>담당 기사를 배정해주세요</option>
                                        <option value="1">박준호</option>
                                        <option value="2">최문찬</option>
                                    </select>

                                    <input
                                        type="datetime-local"
                                        id="meeting-time"
                                        className="meeting-time"
                                        name="meeting-time"
                                        value="2023-12-22T19:30"
                                        min="2023-12-22T16:04"
                                    />

                                    <button className="as-p-btn">접수완료</button>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="collapse-box">
                        <div className="information-btn-container">
                            <a data-bs-toggle="collapse" href="#collapseContainer1" role="button" aria-expanded="false" aria-controls="collapseContainer">
                                <div className="as-information">
                                    <div className="as-title">
                                        <span style={{ color: 'green' }}>[접수완료]</span>
                                        전원이 켜지지 않습니다.
                                    </div>
                                    <div className="as-profile">
                                        <div>성함 : 최문찬</div>
                                        <div>전화번호 : 010-3792-4983</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="collapse" id="collapseContainer1">
                            <div className="card card-body">
                                <div className="as-sub-title">[ 접수자 인적 사항 ]</div>
                                <table className="member_table">
                                    <thead>
                                        <tr>
                                            <td>아이디</td>
                                            <td>성명</td>
                                            <td>주소</td>
                                            <td>전화번호</td>
                                            <td>이메일</td>
                                            <td>성별</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>anscks2350</th>
                                            <th>최문찬</th>
                                            <th>경기도 광주시 태전동 태봉로 50</th>
                                            <th>010-3792-4983</th>
                                            <th>anscks2350@naver.com</th>
                                            <th>M</th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="as-sub-title">[ 접수 처리 ]</div>
                                <div className="as-information">
                                    <div className="desc"><span style={{ color: 'red' }}>-</span> 에어콘 리모콘이 고장 난 것 같습니다.</div>
                                </div>

                                <div className="as-process">
                                    <select className="form-select form-select-lg" aria-label="Large select example">
                                        <option selected>담당 기사를 배정해주세요</option>
                                        <option value="1">박준호</option>
                                        <option value="2">최문찬</option>
                                    </select>

                                    <input
                                        type="datetime-local"
                                        id="meeting-time"
                                        className="meeting-time"
                                        name="meeting-time"
                                        value="2023-12-22T19:30"
                                        min="2023-12-22T16:04"
                                    />

                                    <button className="as-p-btn" disabled>접수완료</button>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RepairReception;
