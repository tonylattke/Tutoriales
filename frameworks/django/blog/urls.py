from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
	url(r'^$', 'posts.views.index', name='home'),
	
	url(r'^posts/', include('posts.urls')),

	url(r'^admin/', include(admin.site.urls)),
)