import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 추가
import { Link } from 'react-router-dom';


import '../style/component/adminSideBar.css';


class SideBar extends Component {
    
    render() {
        const { content } = this.props; // 변경

        return (
        <nav id="side-bar">
            <div class="welcome">
                {content}님, 환영합니다!
            </div>
    
            <div class="nav-bar">
                <div class="select-item">
                    <div class="category-name">회원 관리</div>
                    <div class="items">
                        <Link to="/admin/members" className='menu'>사용자</Link>
                        <Link to="/admin/admins" className='menu'>관리자</Link>
                    </div>
                </div>
    
                <div class="select-item">
                    <div class="category-name">고객 센터</div>
                    <div class="items">
                        <Link to="/admin/repaireprocess" className='menu'>A/S접수</Link>
                        <Link to="/admin/members" className='menu'>게시판</Link>
                        <Link to="/admin/members" className='menu'>상담</Link>
                    </div>
                </div>
    
                <div class="select-item">
                    <div class="category-name">콘텐츠 관리</div>
                    <div class="items">
                        <Link to="/admin/asklist" className='menu'>자주 묻는 질문</Link>
                    </div>
                </div>
            </div>
    
            <div class="bottom-nav"><a href="https://naver.com">로그아웃 하기</a></div>
        </nav>
        );
    }
}

SideBar.propTypes = {
    content: PropTypes.node.isRequired, // 변경
};

export default SideBar;
