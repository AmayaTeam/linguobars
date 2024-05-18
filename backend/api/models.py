from django.contrib.auth.models import User
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/courses/')
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


class Module(models.Model):
    name = models.CharField(max_length=100)
    content = RichTextUploadingField()  # визивик потом филд будет
    courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Task(models.Model):
    type = models.CharField(max_length=100)
    content = RichTextUploadingField(models.Model)
    status = models.CharField(max_length=100)
    modules = models.ManyToManyField(Module)

    def __str__(self):
        return self.type

    class Meta:
        ordering = ['type']


class Achievement(models.Model):
    description = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/achievements/')
    modules = models.OneToOneField(Module, on_delete=models.CASCADE)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.description

    class Meta:
        ordering = ['description']
