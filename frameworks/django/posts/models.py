from django.db    import models
from django.utils import timezone

from datetime import timedelta

class Post(models.Model):
	nombre = models.CharField(max_length=200)
	autor = models.CharField(max_length=200)
	contenido = models.TextField()
	pub_fecha = models.DateTimeField('fecha')

	def publicado_recientemente(self):
		return self.pub_fecha >= (timezone.now() - timedelta(days=1))
	publicado_recientemente.admin_order_field = 'pub_fecha'
	publicado_recientemente.boolean = True
	publicado_recientemente.short_description = 'Publicado recientemente?'

class Comentario(models.Model):
	autor = models.CharField(max_length=200, default='Tony')
	contenido = models.TextField()
	pub_fecha = models.DateTimeField('fecha')