import ACTIONS from './index'
import axios from 'axios'
import { AUTH } from './index'
import * as api from '../../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
      alert('Login success, Welcome!');
      window.open('/product','_top');
    } catch (error) {
      console.log(error);
      alert('Wrong email or password ,please fill in again');
    }
  };


 
