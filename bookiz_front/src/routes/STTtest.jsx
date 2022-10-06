import React ,{useEffect}from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

let cer = 0;
let n = 0;
let allText = ""
function STTtestPage() {

    const contents = [
        "신데렐라는 어려서 부모님을 잃고요",
        "계모와 언니들에게 구박을 받었더래요",
        "샤바샤바 아이샤바 얼마나 울었을까 샤바샤바 아이샤바"
    ];
    const {
        transcript,
		resetTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();
	SpeechRecognition.startListening({ continuous: true, language: 'ko' });
	function stt() {
        let cText = contents[n];
		let sText = transcript.replaceAll(' ', '');
		let ss = [' ', '.', '!', '?', ','];
		for (let i = 0; i < ss.length; i++) {
			cText = cText.replaceAll(ss[i], '');
		}
		let r = ' ' + cText.split('').reverse().join('');
		let h = ' ' + sText.split('').reverse().join('');
		let d = h.length < r.length ? h.length : r.length;
	
		let mat = new Array(d);
		for (let i = 0; i < d; i++) {
			mat[i] = new Array(r.length);
			mat[i][0] = i;
		}
		for (let i = 1; i < r.length; i++) {
			mat[0][i] = i;
		}
		for (let i = 1; i < d; i++) {
			for (let j = 1; j < r.length; j++) {
				mat[i][j] = Math.min(mat[i - 1][j] + 1, mat[i][j - 1] + 1, mat[i - 1][j - 1] + (h[i] == r[j] ? 0 : 1));
			}
		}
	
		if(mat[d-1][r.length-1] < r.length/5.5) {
            resetTranscript(true);
            allText = transcript + "\n"
            n = (n + 1) % 3;
            cer = 0;
        }
        cer = calccer(cText.length, mat[d - 1][r.length - 1]);
	}
    
    function calccer(cT, dp) {
        return (((cT - dp) / cT) * 100).toFixed(2);
    }

    useEffect(() => {
		stt();
		},
        [transcript]
	);

    return (
        <div>
            <Container>
                <Navbar />
                <Text>
                    <div>
                        <span>정답률 : </span>
                        <Text3>{cer}%</Text3>
                    </div>
                    <span>정답 문장 : </span>
                    <Text2>{contents[n]}</Text2>
                    <div>------------------------------------------------------</div>
                    {transcript}
                </Text>
                <Text>
                    {allText}
                </Text>
            </Container>
        </div>
    );
}

export default STTtestPage;

const Container = styled.div`
  width: 1440px;
  margin: auto;
`;

const Text = styled.div`
    margin : 100px;
    font-size : 40px
`

const Text2 = styled.span`
    color: blue;
`

const Text3 = styled.span`
    color: red;
`