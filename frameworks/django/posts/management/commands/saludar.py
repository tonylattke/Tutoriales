#!/usr/bin/env python
# -*- coding: utf-8 -*- 

from django.core.management.base import BaseCommand, CommandError

from posts.models import *

class Command(BaseCommand):
	args = ''
	help = 'Tarea que saluda'
	
	def handle(self, *args, **options):
		print 'Hola hola!'