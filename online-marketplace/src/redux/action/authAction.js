import ACTIONS from './index'
import axios from 'axios'
import { AUTH } from './index'
import * as api from '../../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
      alert('Login success, Welcome!');
      router.push('/product');
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  };


 