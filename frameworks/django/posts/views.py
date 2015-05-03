from django.shortcuts import render
from django.http import HttpResponse

from .models import Post

def index(request):
	all_posts = Post.objects.all()
	context = {'post_list': all_posts}
	return render(request, 'index.html', context)