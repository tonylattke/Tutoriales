from django.conf.urls import url

from . import views

urlpatterns = [
	#Log in & out
	url(r'^login$'		, views.login_usr),		#Login
	url(r'^do_login$'	, views.login_usr_do),	#Login do
	url(r'^logout$'		, views.logout_usr),	#Logout
]