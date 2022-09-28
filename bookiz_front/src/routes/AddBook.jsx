import React ,{Component}from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import AddBook from "../components/management/AddBook";

function AddBookPage() {

    return (
        <div>
            <Container>
                <Navbar/>
                <AddBookContainer>
                    <AddBook/>
                </AddBookContainer>
            </Container>
        </div>
    );
}

export default AddBookPage;

const Container = styled.div`
  width: 1440px;
  margin: auto;
`;

const AddBookContainer = styled.div`
  margin-top: 100px;
  align-items: center;
  font-weight: bold;
`;