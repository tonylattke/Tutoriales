from django.contrib import admin

from .models import Post

class PostAdmin(admin.ModelAdmin):
	list_display= ('id', 'nombre', 'pub_fecha', 'autor')

admin.site.register(Post, PostAdmin)