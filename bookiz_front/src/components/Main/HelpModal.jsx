import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

function HelpModal(props) {
  const { open, close, title } = props;
  return (
    <div>
      {open ? (
        <Background onClick={close}>
          <section onClick={(e) => e.stopPropagation()}>
            <header>
              <p>{title}</p>
              <IoClose
                className="closeicon"
                size={20}
                color="#ffffff"
                onClick={close}
              ></IoClose>
            </header>
            <main>{props.children}</main>
          </section>
        </Background>
      ) : null}
    </div>
  );
}

export default HelpModal;

const Background = styled.div`
  background-color: rgba(13, 12, 15, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  & section {
    width: 90%;
    max-width: 1440px;
    background-color: ${(props) => props.theme.colors.subBlack};
    & header {
      display: flex;
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
      align-items: center;
      color: ${(props) => props.theme.colors.white};
      & p {
        font-size: 24px;
        font-weight: 700;
      }
      & .closeicon {
        cursor: pointer;
      }
    }
    & main {
      padding: 0 20px 20px;
    }
  }
`;
