import reactDom from "react-dom";

function BookModalPortal({ children }) {
  const el = document.getElementById("modal");
  return reactDom.createPortal(children, el);
};

export default BookModalPortal;