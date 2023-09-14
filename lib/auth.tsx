import Cookies from 'js-cookie';

export const setToken = (data: any) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.username);
  Cookies.set('jwt', data.jwt);
};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');

  window.location.reload();
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};
