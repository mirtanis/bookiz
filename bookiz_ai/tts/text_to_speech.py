
from gtts import gTTS

# TTS할 텍스트
text = "안녕하세요. 토끼와 거북이입니다."
file_name = "sample.mp3"

tts_ko = gTTS(text=text, lang='ko')
tts_ko.save(file_name)
print(tts_ko)
tts_ko.speed = 10
print(tts_ko.speed)
tts_ko.save(file_name)