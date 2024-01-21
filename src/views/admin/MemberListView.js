import React, { useState, useEffect  } from 'react';
import Header from '../../component/header';
import SideBar from '../../component/SideBar.js';
import axios from 'axios';

import '../../style/admin/adminMemberList.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 import


const MemberList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 페이지가 마운트될 때 handleLogin 함수를 호출합니다.
        // 두 번째 매개변수로 빈 배열을 전달하면 컴포넌트가 마운트될 때 한 번만 실행됩니다.
        getAllUser();
    }, []); 

    const getAllUser = async () => {

        const response = await axios.get('http://localhost:8081/api/user/getAllMembers');


        setUsers(response.data);

    };

    return (
        <>
            <Header content="Management"></Header>
            <SideBar content="최문찬"></SideBar>
            <section id="main">
                <div class="title">회원 관리</div>
                <div className='container'>
                    <table class="member_table">
                        <thead>
                            <tr>
                                <td>IDX</td>
                                <td>아이디</td>
                                <td>비밀번호</td>
                                <td>성명</td>
                                <td>주소</td>
                                <td>전화번호</td>
                                <td>이메일</td>
                                <td>성별</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{item.userId}</th>
                                    <th>{item.password}</th>
                                    <th>{item.userName}</th>
                                    <th>{item.userAddress}</th>
                                    <th>{item.userPhone}</th>
                                    <th>{item.userEmail}</th>
                                    <th>{item.userGender}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div class="page_selector">
                        <a class="active">1</a>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a>5</a>
                    </div>
                </div>
            </section>
        </>    

    );
};

export default MemberList;
