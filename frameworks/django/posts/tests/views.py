from django.core.urlresolvers import reverse
from django.test import TestCase

from posts.models import Post

class PostsViewsTestCase(TestCase):
    fixtures = ['posts__testdata.json']
    
    def test_index(self):
        resp = self.client.get(reverse('posts_index'))
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('posts' in resp.context)