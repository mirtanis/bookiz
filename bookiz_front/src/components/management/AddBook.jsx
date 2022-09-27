import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bookApis, fetchData } from "../../utils/apis/api";

function AddBook() {
    const [ taleText, setTaleText] = useState("동화내용");
    const [ table, setTable] = useState(<div></div>);
    const result = [];
    let str = [];
    let cnt = 0;
    async function loadFile() {
        if (document.getElementById("inputText").files.length > 0) {
            let tempText = await document.getElementById("inputText").files[0].text();
            str =  tempText.split('\n');
            cnt = str.length;
            for(let i = 0; i < str.length; i++) {
                let strId = "str" + i;
                let imageId = "image" + i;
                let audioId = "audio" + i;
                result.push(
                <tr key={i}>
                    <AlignCenterTD id="num">{i}</AlignCenterTD>
                    <StyleTD id={strId} name={i}>{str[i]}</StyleTD>
                    <StyleTD><input type="file" accept="image/*" id={imageId} name={i}/></StyleTD>
                    <StyleTD><input type="file" accept="audio/*" id={audioId} name={i}/></StyleTD>
                </tr>);
            }
            setTable(makeTable(result));
        }

        return;
    }

    function makeTable(tr) {
        return (
            <StyleTable id="textTable">
                <StyleTH>번호</StyleTH>
                <StyleTH>텍스트</StyleTH>
                <StyleTH>이미지</StyleTH>
                <StyleTH>오디오</StyleTH>
                {tr}
            </StyleTable>
        );
    }

    const changeImage = (e) => {
        let result = table;
        let cnt = document.getElementById("textTable").rows.length;
        console.log(document.getElementById("image"+[e.target.name]).value);
        let t = loadImage([e.target.name]);
        console.log(t);
    }

    async function loadImage(name) {
        if(await document.getElementById("image"+name).files.length > 0){
            return document.getElementById("image"+name).files.length;
        }
    }

    async function insertDB() {
        let pageNum = document.getElementById("textTable").rows.length;
        const book = {
            cnt: 0,
            image: document.getElementById("inputImage").files[0].name,
            page: pageNum,
            info: document.getElementById("inputInfo").value,
            title: document.getElementById("inputText").files[0].name.slice(0, -4)
        };
        let contents = [];
        let content;
        let imageName = document.getElementById("inputImage").files[0].name;
        for (let i = 0; i < pageNum; i++) {
            content = { audio: '', content: '', image: '', page: '', type: ''};
            content.content = document.getElementById("str" + i).textContent;
            console.log(content.content[0]);
            content.page = i;
            if (content.content[0] !== `"`) {
                content.type = 1;
            } else if (document.getElementById("audio" + i).files.length > 0) {
                content.type = 2;
                content.audio = document.getElementById("audio" + i).files[0].name;
            } else {
                content.type = 3;
            }
            if (document.getElementById("image" + i).files.length > 0) {
                imageName = document.getElementById("image" + i).files[0].name;
            }
            content.image = imageName;
            contents.push(content);
        }//end of for contents
        
        const req = {
            bookInput: book,
            contents: contents,
        };
        const res = addBook(bookApis.BOOK_ADDBOOK, req);
        
        res.then((data) => {
            console.log(data.data);
        });

        // res1.then((data) => {
        //     console.log(data.data);
        //     tempbook = data.data;
        //     console.log(contents);
        //     console.log("굿");
        //     const res2 = addContents(bookApis.BOOK_ADDCONTENTS, contents);
        //     res2.then((data) => {
        //         console.log(data);
        //     });
        // });

    }

    const addBook = async (url, body) => {
        return await fetchData.post(url, body);
    };

    const addContents = async (url, body) => {
        return await fetchData.post(url, body);
    };
    
    return (
        <Container>
            <Box>
                <label>동화책 텍스트 파일 : </label>
                <InputBtn type="file" name="inputText" id="inputText" accept="text/*"/>
                <label>동화책 표지 이미지 : </label>
                <InputBtn type="file" name="inputImage" id="inputImage" accept="image/*" />
                <Box>
                    <div>
                        동화책 설명
                    </div>
                    <TextBox id="inputInfo" name="inputInfo"/>
                </Box>
            </Box>
            <Box>
                <StyleBtn onClick={loadFile}>적용하기</StyleBtn>
                <StyleBtn onClick={insertDB}>저장하기</StyleBtn>
            </Box>
            {table}
        </Container>
    );
}

export default AddBook;

const Container = styled.div`
  max-width: 100%;
  font-size: 25px;
`;

const Box = styled.div`
    margin: auto;
`;

const TextBox = styled.textarea`
    margin: auto;
    width: 600px;
    height: 60px;
    font-size: 20px;
`;

const StyleBtn = styled.button`
    font-size: 20px;
    margin : 10px;
    color: black;
`;

const InputBtn = styled.input`
    font-size: 20px
`;

const StyleTable = styled.table`
    width: 100%;
    border: solid;
    border-collapse: collapse;
    font-size: 20px;
`;

const StyleTH = styled.th`
    border: solid;
`;

const StyleTD = styled.td`
    border: solid;
`;

const AlignCenterTD = styled.td`
    border: solid;
    text-align: center;
`;
