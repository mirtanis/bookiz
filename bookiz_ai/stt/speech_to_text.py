import speech_recognition as sr
r = sr.Recognizer()

with sr.Microphone() as source:
    print('listening...')
    audio = r.listen(source)

try:
    text = r.recognize_google(audio, language='ko')
    print(text)
except sr.UnknownValueError:
    print('음성 인식 실패')
except sr.RequestError as e:
    print('요청 실패')

