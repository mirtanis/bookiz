import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

// Route
import MainPage from "./routes/Main";
import BookPage from "./routes/Book";
import NotFoundPage from "./routes/NotFound";
import BookListPage from "./routes/BookList";
import BookAllPage from "./routes/BookAll";
import BookSearchPage from "./routes/BookSearch";

function App() {
  return (
    <BrowserRouter>    
      <Routes>
          <Route path="" element={<MainPage/>}/>
          <Route path="/book" element={<BookPage/>}/>
          <Route path="/booklist/all" element={<BookAllPage/>}/>      
          <Route path="/booklist/:id" element={<BookListPage/>}/>
          <Route path="/search" element={<BookSearchPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;