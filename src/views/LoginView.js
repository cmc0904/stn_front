import React, { useState } from 'react';
import '../style/auth/LoginRegister.css';
import Header from '../component/header';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [NOTFOUND, setNOTFOUNT] = useState(false);
    const navigate = useNavigate();

    const [jwt, setJWT] = useState('');

    const handleLogin = async () => {
        // const response = await axios.post('http://localhost:8081/api/user/login', {
        //     "userId": username,
        //     "password": password
        // });
    
        // console.log(response.data.token);
    
        // if (response.data.token == "CAN_NOT_FOUND_USER") {
        //     setNOTFOUNT(true);
        //     return;
        // } else {
        //     window.localStorage.setItem("jwt_token", response.data.token);
        //     console.log(window.localStorage.getItem("jwt_token"))
        // }
        navigate('/admin/members');
        // if (res.data.result === "Admin") {
        //     navigate('/admin/members');
        // } else {
        //     navigate('/customer/asas');
        // }
    };
    



    return (
        <>
            <Header content="Login"></Header>
            <div className="my-login-page">
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="brand">
                                </div>
                                <div className="card fat">
                                    <div className="card-body">
                                        <div className="my-login-validation">
                                            <div className="form-group">
                                                <label for="userId">아이디</label>
                                                <input id="userId" type="text" className="form-control" name="userId" value={username} onChange={(e) => setUsername(e.target.value)}required autofocus></input>
                                                {NOTFOUND && (
                                                    <div className="invalid-feedback show">
                                                        아이디를 확인해주세요.
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label for="password">비밀번호</label>
                                                <input id="password" type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required data-eye></input>
                                                {NOTFOUND && (
                                                    <div className="invalid-feedback show">
                                                        비밀번호를 확인해주세요.
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-checkbox custom-control">
                                                    <input type="checkbox" name="remember" id="remember" className="custom-control-input"></input>
                                                    <label for="remember" className="custom-control-label">로그인 저장</label>
                                                </div>
                                            </div>

                                            <div className="form-group m-0">
                                                <button className="btn btn-primary btn-block" onClick={handleLogin}>
                                                    로그인
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <Link to="/register">회원가입 하기</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>    

    );
};

export default Login;
