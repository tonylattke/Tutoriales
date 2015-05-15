from django.contrib import admin
from django import forms

from .models import Post

''' ******************************* Ayudas ******************************* '''
#Formato Form
class Text_Form(forms.ModelForm):
	text = forms.CharField( widget=forms.Textarea )

''' ********************************* Post ******************************** '''
class PostAdmin(admin.ModelAdmin):
	list_display= ('id', 'nombre', 'pub_fecha','publicado_recientemente', 'autor')
	form = Text_Form
	search_fields = ['nombre','contenido']
	fieldsets 	= [
		('Nombre Post'	,	{'fields': ['nombre']}),
		('Fecha'		,	{'fields': ['pub_fecha']}),
		('Autor'		,	{'fields': ['autor']}),
		('Contenido'	,	{'fields': ['contenido']}),
	]

admin.site.register(Post, PostAdmin)