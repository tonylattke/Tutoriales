from django.conf.urls import url

from . import views

urlpatterns = [
	# Post
	url(r'^$'							, views.index, name='posts_index'),			# Listar
	url(r'^(?P<post_id>[0-9]+)?$'		, views.obtener, name='posts_obtener'),		# Obtener
	url(r'^crear$' 						, views.crear, name='posts_crear'),			# Crear
	url(r'^crear_do$' 					, views.crear_do, name='posts_crear_do'),	# Crear do
	url(r'^editar/(?P<post_id>[0-9]+)?$', views.editar, name='posts_editar'),		# Editar
	url(r'^editar_do?$' 				, views.editar_do, name='posts_editar_do'),	# Editar do
	url(r'^eliminar$' 					, views.eliminar, name='posts_eliminar'),	# Eliminar
	url(r'^json$'						, views.posts_json, name='posts_json'),		# Json
]