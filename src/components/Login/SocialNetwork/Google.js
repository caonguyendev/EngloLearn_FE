import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import accountApi from 'apis/accountApi';
import { UX } from 'constant';
import { setMessage } from 'redux/slices/message.slice';

function LoginGoogle() {
  
  const dispatch = useDispatch();

  const onLoginSuccess = () => {
    try {
      dispatch(
        setMessage({
          type: 'success',
          message: 'Đăng nhập thành công',
          duration: UX.DELAY_TIME,
        }),
      );

      setTimeout(() => {
        location.href = '/';
      }, UX.DELAY_TIME);
    } catch (error) {}
  };

  const onLoginWithGoogle = async (credentialResponse) => {
    try {
      const response = await accountApi.postLoginWithGoogle(credentialResponse?.credential);
      const { status, data } = response;

      if (status === 200) {
        onLoginSuccess();
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Đăng nhập thất bại, thử lại !';
      dispatch(setMessage({ type: 'error', message }));
    }
  };

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        onLoginWithGoogle(credentialResponse)
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

export default LoginGoogle

