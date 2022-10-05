import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { BsQuestionCircle, BsMic, BsMicFill } from "react-icons/bs";
import { IoMdExit, IoIosExit } from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import HelpModal from "../Main/HelpModal";
import HelpSwiper from "../Main/HelpSwiper";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import EndModal from "./EndModal";

const BookPage = forwardRef((props, ref) => {
	const [isHelpModal, setIsHelpModal] = useState(false);

	const [outButtonHover, setOutButtonHover] = useState(false);

	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	const [isSpeaking, setIsSpeaking] = useState(false);

	const [isEndModal, setIsEndModal] = useState(false);

	//STT 시작---------------------------------------
	const {
		transcript,
		resetTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();
	SpeechRecognition.startListening({ continuous: true, language: 'ko' });
	function stt() {
		if (props.type !== 1) {
			return;
		}
		let sText = transcript.replaceAll(' ', '');
		let cText = props.content;
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
	
		if(mat[d-1][r.length-1] < r.length/4) {
			resetTranscript(true);
			if(props.page !== props.totalpage){
				props.setPage((page) => page+1);
				props.setIsPageChanged(true);
			} else {
				setIsEndModal(true);
			}
		}
	}
	
	//STT 끝---------------------------------------
	const HelpModalHandler = () => {
		setIsHelpModal((prev) => !prev);
	};

	const audioPlay = () => {
		window.audio.play();
		setIsAudioPlaying(true);
	};

	const audioPause = () => {
		window.audio.pause();
		setIsAudioPlaying(false);
	}

	const setTts = () => {
		window.audio = new Audio();
		window.audio.src = `https://j7a103.p.ssafy.io/tts?text=${props.content}`;
		window.audio.addEventListener("ended", function() {
			if(props.page !== props.totalpage){
				props.setIsPageChanged(true);
				props.setPage((page) => page + 1);
			} else {
				setIsAudioPlaying(false);
				setIsEndModal(true);
			}
		})
	}

	function setAudio(url) {
		window.audio = new Audio();
		window.audio.src = url;
		window.audio.addEventListener("ended", function() {
			if(props.page !== props.totalpage){
				props.setIsPageChanged(true);
				props.setPage((page) => page + 1);
			} else {
				setIsAudioPlaying(false);
				setIsEndModal(true);
			}
		})
	}

	useImperativeHandle(ref, () => ({
		setEndModalFalse
	}))

	function setEndModalFalse() {
		setIsEndModal(false);
	}

	useEffect(() => {
		if (props.isPageChanged) {
			props.setIsPageChanged(false)
			if(window.audio !== undefined){
				audioPause();
			}
			setTts();
			if(props.type === 3){
				audioPlay();
			} else if (props.type === 2) {
				setAudio(props.audio);
				audioPlay();
			}else if((props.type === 1) && (document.getElementById("ckbtn").checked)) {
				audioPlay();
			}
		}
	});

	useEffect(() => {
		setIsSpeaking(true);
		stt();
		setTimeout(() => {
			setIsSpeaking(false)
		}, 1000);
		},
		[transcript]
	);

	function showToast() {
		if(document.getElementById("ckbtn").checked) {
			document.getElementById("toastBoxOn").style.visibility = "visible";
			setTimeout(() => {
				document.getElementById("toastBoxOn").style.visibility = "hidden";
			}, 1000);
		}else {
			document.getElementById("toastBoxOff").style.visibility = "visible";
			setTimeout(() => {
				document.getElementById("toastBoxOff").style.visibility = "hidden";
			}, 1000);
		}
		
	}

	return (
		<Container>
			<BookImageDiv>
				<BookImage src={props.image} />
			</BookImageDiv>
			<BookContentDiv>
				<Empty />
				<BookContentContainer>
					<SpeakerDiv>
						{props.type === 1 &&
							<SpeakerImage>
								{isSpeaking ?
									<BsMicFill size={25} />
									: <BsMic size={25} />
								}
							</SpeakerImage>
						}
					</SpeakerDiv>
					<BookContent>
						<BookContentText>
							{props.content}
						</BookContentText>
					</BookContent>
					<SpeakerIconDiv>
						{isAudioPlaying ?
							<FaRegPauseCircle size={50} style={{ cursor: 'pointer' }} onClick={audioPause} />
							: <FaRegPlayCircle size={50} style={{ cursor: 'pointer' }} onClick={audioPlay} />
						}
					</SpeakerIconDiv>
						<OnOffBtn></OnOffBtn>
						<StyledInput id="ckbtn" type="checkbox" title="전체 재생" onClick={showToast}></StyledInput>
				</BookContentContainer>
				<OutButtonDiv onMouseEnter={() => setOutButtonHover(true)} onMouseLeave={() => setOutButtonHover(false)} onClick={() => audioPause()}>
					<Link to="/" style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{outButtonHover ? 
							<IoIosExit size={25} />
							: <IoMdExit size={25} />
						}
					</Link>
				</OutButtonDiv>
			</BookContentDiv>
			<PageInfo>
				<PageText>
					{props.page}/{props.totalpage}
				</PageText>
			</PageInfo>
			<Help>
        <BsQuestionCircle
          className="helpicon"
          size={50}
          onClick={HelpModalHandler}
        />
      </Help>
      <HelpModal open={isHelpModal} close={HelpModalHandler} title="도움 모달">
        <HelpContainer>
          <HelpSwiper />
        </HelpContainer>
      </HelpModal>
			{
				isEndModal ?
				<EndModal />
				: null
			}
			<ToastMessageOn id="toastBoxOn" visibility="hidden">
				<ToastText>전체 자동 재생 활성화</ToastText>
			</ToastMessageOn>
			<ToastMessageOff id="toastBoxOff" visibility="hidden">
				<ToastText>전체 자동 재생 비활성화</ToastText>
			</ToastMessageOff>
		</Container>
	)
});

export default BookPage;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	background-color: #2D2D2D;
`;

const BookImageDiv = styled.div`
	width: 100%;
	height: 88.8889vh;
	display: flex;
	justify-content: center;
	align-items: end;
`;

const BookImage = styled.img`
	height: 97.5%;
	user-select: none;
`;

const BookContentDiv = styled.div`
	width: 100%;
	height: 11.1111vh;
	display: flex;
	align-items: center;
`;

const Empty = styled.div`
	width: 13.5417vw;
	height: 100%;
`;

const BookContentContainer = styled.div`
	width: 72.9167vw;
	height: 70%;
	display: flex;
	align-items: center;
	background-color: #EEEEEE;
	border-radius: 100px;
`;

const SpeakerDiv = styled.div`
	width: 5.2083vw;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SpeakerImage = styled.div`
	width: 35px;
	height: 35px;
	background-color: #00FF19;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BookContent = styled.div`
	width: 62.5vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BookContentText = styled.p`
	text-align: center;
	margin: 0;
	font-size: 2.7778vh;
`;

const SpeakerIconDiv = styled.div`
	width: 2.6047vw;
	height: 5.5556vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OutButtonDiv = styled.div`
	width: 35px;
	height: 35px;
	background-color: #BE3030;
	margin: 0;
	margin-left: 3.6458vw;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
`;

const PageInfo = styled.div`
	width: 6.0417vw;
	height: 7vh;
	border-radius: 5px;
	background-color: #EEEEEE;
	position: absolute;
	top: 2.7778vh;
	left: 1.3021vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageText = styled.p`
	font-size: 4vh;
	user-select: none;
`;

const Help = styled.div`
  position: absolute;
	top: 2.6667vh;
	right: 1.25vw;
  .helpicon {
    background-color: white;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const HelpContainer = styled.main`
  max-width: 1440px;
  max-height: 600px;
`;

const OnOffBtn = styled.span`
	htmlFor="ckbtn"
	visibility: hidden;       
`

const StyledInput = styled.input`
  margin: 20px;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2.5px solid black;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
  &:hover {
	outline: 3px solid black;
  }
`;

let ToastMessageOn =styled.div`
visibility : hidden;
	position: fixed;
  z-index: 99;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 2.625rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--black-40);
  background-color: green;
`

let ToastMessageOff =styled.div`
visibility : hidden;
	position: fixed;
  z-index: 99;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 2.625rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--black-40);
  background-color: green;
`

const ToastText = styled.div`
	font-weight: bold;
  letter-spacing: 0.29px;
  text-align: center;
  text-font : italic;
  margin-top: 0.6rem;
`