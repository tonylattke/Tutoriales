from django.db import models


class Post(models.Model):
	nombre = models.CharField(max_length=200)
	autor = models.CharField(max_length=200)
	contenido = models.TextField()
	pub_fecha = models.DateTimeField('fecha')

class Comentario(models.Model):
	autor = models.CharField(max_length=200, default='Tony')
	contenido = models.TextField()
	pub_fecha = models.DateTimeField('fecha')