import React from 'react';
import style from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'; 
import { Input } from '../common/FormElements/FormElements';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.inputGroup}>
                <label htmlFor="">login</label>
                <Field type={"text"} placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div className={style.inputGroup}>
                <label htmlFor="">Password</label>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div className={style.rememberMe}>
                <Field type="checkbox" name={"rememberMe"} component={"input"} />
                <label htmlFor="rememberMe">Remember Me</label>
            </div>
            {
                props.error && <span className="error">{props.error}</span>
            }
            <div>
                {
                    props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>
                }
                {
                    props.captchaUrl && <Field type={"text"} name={"captcha"} component={Input} validate={[required]} />
                }
            </div>
            <button className={`${style.submit} btn`}>Login</button>
        </form>
    );
}

const LoginFormRedux = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    };

    return (
        <div className={style.wrapper}>
            <h1 className={style.heading}>
                Login
            </h1>
            <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {
    login,
})(Login);