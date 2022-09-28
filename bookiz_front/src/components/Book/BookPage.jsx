import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsQuestionCircle, BsMic } from "react-icons/bs";
import { IoMdExit, IoIosExit } from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import HelpModal from "../Main/HelpModal";
import HelpSwiper from "../Main/HelpSwiper";

function BookPage(props) {
	const [isModal, setIsModal] = useState(false);

	const [outButtonHover, setOutButtonHover] = useState(false);

	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	const ModalHandler = () => {
		console.log("modal");
		setIsModal((prev) => !prev);
	};

	const TtsPlay = () => {
		window.audio.play();
		setIsAudioPlaying(true);
	};

	const TtsPause = () => {
		window.audio.pause();
		setIsAudioPlaying(false);
	}

	const Tts = () => {
		window.audio = new Audio();
		window.audio.src = `https://j7a103.p.ssafy.io/tts?text=${props.content}`;
		window.audio.addEventListener("ended", function() {
			if(props.page !== props.totalpage){
				props.setIsPageChanged(true);
				props.setPage((page) => page + 1);
			} else {
				setIsAudioPlaying(false);
				Tts();
			}
		})
	}

	useEffect(() => {
		if(props.isPageChanged){
			props.setIsPageChanged(false)
			if(window.audio !== undefined){
				TtsPause();
			}
			Tts();
			if(props.type === 0){
				TtsPlay();
			}
		}
	});

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
								<BsMic size={25} />
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
							<FaRegPauseCircle size={50} style={{ cursor: 'pointer' }} onClick={TtsPause} />
							: <FaRegPlayCircle size={50} style={{ cursor: 'pointer' }} onClick={TtsPlay} />
						}
					</SpeakerIconDiv>
				</BookContentContainer>
				<OutButtonDiv onMouseEnter={() => setOutButtonHover(true)} onMouseLeave={() => setOutButtonHover(false)}>
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
          onClick={ModalHandler}
        />
      </Help>
      <HelpModal open={isModal} close={ModalHandler} title="도움 모달">
        <HelpContainer>
          <HelpSwiper />
        </HelpContainer>
      </HelpModal>
		</Container>
	)
	
}

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