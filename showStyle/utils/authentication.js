export const isLogin = () => {
  const cookie = document.cookie;
  const isLogin = 'isLogin=';

  if (cookie.indexOf(isLogin) === -1) {
    return false;
  }

  return true;
};

export const getSeatNo = () => {
  const cookie = document.cookie;
  const seatNo = 'seatNo=';

  if (cookie.indexOf(seatNo) === -1) {
    return;
  }

  const startIndex = cookie.indexOf(seatNo);
  const endIndex = cookie.indexOf(';', startIndex);

  if (endIndex !== -1) {
    return cookie.substring(startIndex + seatNo.length, endIndex);
  }

  return cookie.substring(startIndex + seatNo.length, cookie.length);
};

export const getName = () => {
  const cookie = document.cookie;
  const name = 'name=';

  if (cookie.indexOf(name) === -1) {
    return;
  }

  const startIndex = cookie.indexOf(name);
  const endIndex = cookie.indexOf(';', startIndex);

  if (endIndex !== -1) {
    return cookie.substring(startIndex + name.length, endIndex);
  }

  return cookie.substring(startIndex + name.length, cookie.length);
};

export const clearCookie = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let pos = cookie.indexOf('=');
    let name = cookie.substr(0, pos);
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
};
