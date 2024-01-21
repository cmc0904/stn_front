import Header from '../../component/header';
import SideBar from '../../component/SideBar.js';

import React, { useState, useEffect  } from 'react';
import axios from 'axios';

import '../../style/admin/askList.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 import


const FAQMagementView = () => {

    const [faq, setFaq] = useState([]);


    useEffect(() => {
        getAllFaq();
    }, []); 

    const getAllFaq = async () => {

        const response = await axios.get('http://localhost:8081/api/faq/getAllFaQ');


        setFaq(response.data);

    };

    return (
        <>
            <Header content="Management" />
            <SideBar content="최문찬" />
            <section id="main">
                <div className="title">자주 묻는 질문 수정</div>
                <div className="container-md">
                    {faq.map((item, index) => (
                        <div className="collapse-box">
                            <div className="information-btn-container">
                                <a data-bs-toggle="collapse" href="#collapseContainer" role="button" aria-expanded="false"
                                    aria-controls="collapseContainer">

                                    <div className="information">
                                        <div className="faq-title">
                                            <span style={{"color" : "red"}}>Q.{index + 1}</span> {item.question}
                                        </div>
                                        <div className='btn-container'>
                                            <button className="btn edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">수정</button>
                                            <button className="btn delete">삭제</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="collapse" id="collapseContainer">
                                <div className="answer">
                                    <span style={{"color" : "red"}}>- </span> {item.answer}
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    ))}

                    <button type="button" class="add-btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        추가하기
                    </button>
                </div>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">자주 묻는 질문 추가</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">질문</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">답변</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                <button type="button" className="btn btn-primary">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQMagementView;
