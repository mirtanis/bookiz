import React, {useState} from "react";
import styled from "styled-components";
import { bookApis, fetchData } from "../../utils/apis/api";

function AddBook() {
    const [ table, setTable] = useState(<div></div>);
    const result = [];
    let str = [];
    async function loadFile() {
        if (document.getElementById("inputText").files.length > 0) {
            let tempText = await document.getElementById("inputText").files[0].text();
            str =  tempText.split('\n');
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

    async function insertDB() {
        let pageNum = document.getElementById("textTable").rows.length;
        const book = {
            cnt: 0,
            image: document.getElementById("inputImage").files[0].name,
            page: pageNum,
            info: document.getElementById("inputInfo").value,
            title: document.getElementById("inputText").files[0].name.slice(0, -4)
        };
        let fileName = document.getElementById("inputImage").files[0].name;
        
        const req1 = addBook(bookApis.BOOK_ADDBOOK, book);
        let id = -1;
        req1.then((res) => {
            console.log(res.data.id);
            id = res.data.id;
            let formData = makeForm(document.getElementById("inputImage").files[0], fileName, id);
            let req3 = upload(bookApis.BOOK_FILEUPLOAD, formData);
            req3.then((res) => {
                console.log("표지 업로드 완료");
            });
            let contents = [];
            let content;
            for (let i = 0; i < pageNum; i++) {
                content = { audio: '', content: '', image: '', page: '', type: '', book_id: id};
                content.content = document.getElementById("str" + i).textContent;
                content.page = i+1;
                if (content.content[0] !== `"`) {
                    content.type = 1;
                } else if (document.getElementById("audio" + i).files.length > 0) {
                    content.type = 2;
                    let audioName = document.getElementById("audio" + i).files[0].name;
                    content.audio = mkAudioURL(audioName, id);
                    let audioData = makeForm(document.getElementById("audio"+i).files[0], audioName, id);
                    req3 = upload(bookApis.BOOK_FILEUPLOAD, audioData);
                    req3.then((res) => {
                        console.log("오디오 업로드 완료");
                    });
                } else {
                    content.type = 3;
                }
                if (document.getElementById("image" + i).files.length > 0) {
                    fileName = document.getElementById("image" + i).files[0].name;
                    formData = makeForm(document.getElementById("image"+i).files[0], fileName, id);
                    req3 = upload(bookApis.BOOK_FILEUPLOAD, formData);
                    req3.then((res) => {
                        console.log("이미지 업로드 완료");
                    });
                }
                content.image = mkImageURL(fileName, id);
                contents.push(content);
            }// end of for
            const req2 = addContents(bookApis.BOOK_ADDCONTENTS, contents)
            req2.then((res) => {
                console.log("컨텐츠 업로드 완료");
            });
        });//end of for contents
    }

    function mkImageURL(name, id) {
        return "https://j7a103.p.ssafy.io/api/books/display?image=" + name + "&id=" + id;
    }

    function mkAudioURL(name, id) {
        return "https://j7a103.p.ssafy.io/api/books/audiofile?audio=" + name + "&id=" + id;
    }

    function makeForm(file, name, book_id) {
        let formData = new FormData();
        formData.append("file", file, name);
        formData.append("book_id", book_id);
        return formData;
    }

    const addBook = async (url, body) => {
        return await fetchData.post(url, body);
    };

    const addContents = async (url, body) => {
        return await fetchData.post(url, body);
    };

    const upload = async (url, body) => {
        return await fetchData.post(url, body, {headers: {"Content-Type": "multipart/form-data"}});
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
