from django.shortcuts import render
from django.http import HttpResponse
from gtts import gTTS

def tts(request):
    if request.method == 'GET':
        text = request.GET.get('text')
        print(text)
        file_name = "sample.mp3"
        tts_ko = gTTS(text=text, lang='ko')
        tts_ko.save(file_name)
        return HttpResponse("Hello, tts")