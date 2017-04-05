import {API} from './';

// 개내식 전부
export const apiFetchMeals = () => {
  return fetch(`${API}/meals`, {
    headers: new Headers({
      'Accept-Language': 'en-US'
    })
  });
};

// 기내식 한개
export const apiFetchMealById = (id) => {
  return fetch(`${API}/meals/${id}`, {
    headers: new Headers({
      'Accept-Language': 'en-US'
    })
  });
};
