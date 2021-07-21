import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../Helpers/urls';
import { getFormBody } from '../Helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

('/login?email=a@a.con&password=13213');
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
