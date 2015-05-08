from django.http 					import HttpResponse
from django.shortcuts 				import render, get_object_or_404, redirect
from django.core.urlresolvers   	import reverse

from datetime	import datetime
import json

from .models 	import Post

##################################### POST ####################################

def index(request):

	posts = Post.objects.all()
	context = {'posts': posts}
	return render(request, 'index.html', context)

def obtener(request,post_id):
	post_id = int(post_id)
	post = get_object_or_404(Post, pk=post_id)
	context = {'post': post}
	return render(request, 'post.html', context)

def crear(request):
	posts = Post.objects.all()
	context = {'posts': posts}
	return render(request, 'crear.html', context)

def crear_do(request):
	post = Post(
		nombre		=	request.POST['nombre'],
		contenido	=	request.POST['contenido'],
		autor		=	request.POST['autor'],
		pub_fecha	=	datetime.now()
	)
	try:
		post.save()
	except Exception, e:
		pass
	return redirect(reverse(index))

def editar(request,post_id):
	post_id = int(post_id)
	post = get_object_or_404(Post, pk=post_id)
	context = {'post': post}
	return render(request, 'editar.html', context)

def editar_do(request):
	post_id = int(request.POST['id'])
	post = get_object_or_404(Post, pk=post_id)
	try:
		post.nombre		=	request.POST['nombre']
		post.contenido	=	request.POST['contenido']
		post.autor		=	request.POST['autor']
		post.save()
	except Exception, e:
		pass
	return obtener(request, post_id)

def eliminar(request):
	post_id = int(request.POST['id'])
	post = get_object_or_404(Post, pk=post_id)
	try:
		post.delete()
	except Exception, e:
		pass
	return redirect(reverse(index))

def posts_json(request):
	datos_salida = []
	for aux in Post.objects.all():
		post = {
			'nombre' 	: aux.nombre,
			'contenido'	: aux.contenido,
			'autor'		: aux.autor,
			'fecha'		: aux.pub_fecha.isoformat()
		}
		datos_salida.append(post)
	return HttpResponse(json.dumps(datos_salida), content_type="application/json")