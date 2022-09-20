import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

// Route
import MainPage from "./routes/Main";
import BookPage from "./routes/Book";
import NotFoundPage from "./routes/NotFound";
import BookListPage from "./routes/BookList";
import TestPage from "./routes/Test";


function App() {
  return (
    <BrowserRouter>    
      <Routes>
          <Route path="" element={<MainPage/>}/>
          <Route path="/book" element={<BookPage/>}/>          
          <Route path="/booklist" element={<BookListPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;