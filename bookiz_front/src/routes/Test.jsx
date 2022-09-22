import React from "react";
import { useState } from "react";
// import styled from "styled-components";
import BookModal from "../components/Main/BookModal";

function TestPage() {
  const [isModal, setIsModal] = useState(false);

  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <img src="http://image.kyobobook.co.kr/images/book/xlarge/179/x9791186086179.jpg" alt="토끼와거북이" onClick={ModalHandler}/>
      <BookModal open={isModal} close={ModalHandler} title="토끼와 거북이" info="토끼와 거북이는 경주를 해요. 거북이는 느려요. 토끼는 빨라요. 과연 어떻게 될까요?" image="http://image.kyobobook.co.kr/images/book/xlarge/179/x9791186086179.jpg" page="15"></BookModal>
    </div>
  );
}

export default TestPage;