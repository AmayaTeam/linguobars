from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.title


class