import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://j7a103.p.ssafy.io",
  // baseURL: "http://localhost:8081",
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
    return `/api/books/search?word=${word}`;
  },
  BOOK_RANK_LIST : '/api/books/rank',
  BOOK_NEW_LIST : '/api/books/new',
  BOOK_CATEGORY_LIST: (id) => {
    return `/api/books/category?id=${id}`; 
  },
  BOOK_ALL_LIST: '/api/books/all',
}

export const bookApis = {
  BOOK_START : (id) => {
    return `/api/books?id=${id}`
  },
  BOOK_CNTUP : (id) => {
    return `/api/books/cnt/${id}`
  },
  BOOK_ADDBOOK: `/api/books/addBook`,
  BOOK_ADDCONTENTS: `/api/books/addContents`,
  BOOK_FILEUPLOAD: `/api/books/uploadFile`,
  BOOK_DISPLAY: (image, id) => {
    return `/api/books/display?image=${image}&id=${id}`;
  }
}

