import React from "react";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBook />
      </BookContextProvider>
    </div>
  );
};

export default App;
