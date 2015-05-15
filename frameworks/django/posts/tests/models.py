from django.utils import timezone
from django.test import TestCase

from posts.models import Post

class PostTestCase(TestCase):
	fixtures = ['posts__testdata.json']
	
	def setUp(self):
		super(PostTestCase, self).setUp()
		self.post_1 = Post.objects.get(pk=1)
		self.post_2 = Post.objects.get(pk=2)
	
	def test_publicado_recientemente(self):
		self.assertFalse(self.post_1.publicado_recientemente())
		self.assertFalse(self.post_2.publicado_recientemente())

		now = timezone.now()
		self.post_1.pub_fecha = now
		self.post_1.save()
		self.assertTrue(self.post_1.publicado_recientemente())