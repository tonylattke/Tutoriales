# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=200)),
                ('autor', models.CharField(max_length=200)),
                ('contenido', models.TextField()),
                ('pub_fecha', models.DateTimeField(verbose_name=b'fecha')),
            ],
        ),
    ]
