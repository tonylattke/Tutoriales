from django.conf.urls import url

from . import views

urlpatterns = [
	# Post
	url(r'^$'							, views.index),		# Listar
	url(r'^(?P<post_id>[0-9]+)?$'		, views.obtener),	# Obtener
	url(r'^crear$' 						, views.crear),		# Crear
	url(r'^crear_do$' 					, views.crear_do),	# Crear do
	url(r'^editar/(?P<post_id>[0-9]+)?$', views.editar),	# Editar
	url(r'^editar_do?$' 				, views.editar_do),	# Editar do
	url(r'^eliminar$' 					, views.eliminar),	# Eliminar
	url(r'^json$'						, views.posts_json),# Json
]