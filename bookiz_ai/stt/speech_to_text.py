import speech_recognition as sr

# 마이크
# r = sr.Recognizer()
# with sr.Microphone() as source:
#     print('listening...')
#     audio = r.listen(source)

# 오디오 파일
r = sr.Recognizer()
with sr.AudioFile('testaudio.wav') as source:
    print('listening...')
    audio = r.record(source)

try:
    text = r.recognize_google(audio, language='ko')
    print(text)
except sr.UnknownValueError:
    print('음성 인식 실패')
except sr.RequestError as e:
    print('요청 실패')

