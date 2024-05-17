from graphene_django import DjangoObjectType
from ..models import (
    Course,
    Module,
    Task,
    Achievement
)

class CourseType(DjangoObjectType):
    class Meta:
        model = Course

class ModuleType(DjangoObjectType):
    class Meta:
        model = Module

class TaskType(DjangoObjectType):
    class Meta:
        model = Task

class AchievementType(DjangoObjectType):
    class Meta:
        model = Achievement
