import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { validateLoginForm } from '../../shared/utils/validators';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({mail, password}));
    },[mail, password, setIsFormValid]);

    const handleLogin = () => {
        console.log("login...")
    }

    return (
        <div>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInputs 
                    mail={mail}
                    setMail={setMail}
                    password={password}
                    setPassword={setPassword}
                />
                <LoginPageFooter
                    isFormValid={isFormValid}
                    handleLogin={handleLogin}
                />
            </AuthBox>
        </div>
    );
};

export default LoginPage;