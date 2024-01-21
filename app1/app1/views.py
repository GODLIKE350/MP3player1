from django.http import HttpResponse, HttpResponseNotFound, Http404, HttpResponseRedirect, HttpResponsePermanentRedirect
from django.shortcuts import render, redirect
from .script import YouTubeSearcher

def main(request):
    if request.method == 'POST':
        my_input = request.POST.get('my_input')
        if my_input:
            searcher = YouTubeSearcher(my_input)
            results = searcher.search()
            return render(request, 'main.html', {'results': results})
    return render(request, 'main.html')