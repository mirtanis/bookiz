import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://j7a103.p.ssafy.io",
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = {
  get: async (url, option) => await instance.get(url, option),
  post: async (url, body, option) => await instance.post(url, body, option),
  put: async (url, body, option) => await instance.put(url, body, option),
  patch: async (url, body, option) => await instance.patch(url, body, option),
  delete: async (url, body, option) => await instance.delete(url, body, option),
};

export const bookListApis = {
  BOOK_SEARCH_LIST : (word) => {
    return (page) => `/api/books/search?word=${word}`;
  },
  BOOK_RANK_LIST : '/api/books/rank',
  BOOK_NEW_LIST : '/api/books/new',
  BOOK_CATEGORY_LIST: (id) => {
    return (page) => `/api/books/category?id=${id}`; 
  },
  BOOK_ALL_LIST : '/api/books/all',
}

export const bookApis = {
  BOOK_START : (id) => {
    return (page) => `/api/books?book-id${id}`
  },
  BOOK_CNTUP : (id) => {
    return (page) => `/api/books?book-id${id}`
  },
}

