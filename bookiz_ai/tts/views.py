import os.path
import random
import string

from django.shortcuts import render
from django.http import HttpResponse
from gtts import gTTS
import datetime

def tts(request):
    if request.method == 'GET':
        text = request.GET.get('text')
        print("text : " + text)

        dir_name = "audio/"
        try:
            if not os.path.exists(dir_name):
                os.makedirs(dir_name)
        except OSError:
            print("Error : Failed to create the directory.")

        prefix = ''.join(random.choices(string.ascii_lowercase, k=12))
        now = datetime.datetime.now().strftime("%y%m%d_%H%M%S")
        suffix = '.mp3'
        file_name = prefix + '_' + now + suffix
        file_path = dir_name + file_name

        tts_ko = gTTS(text=text, lang='ko')
        tts_ko.save(file_path)
        file = open(file_path, "rb").read()
        response = HttpResponse()
        response.write(file)
        response['Content-Type'] = 'audio/mp3'
        response['Content-Length'] = os.path.getsize(file_path)

        os.remove(file_path)

        return response