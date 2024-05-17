import graphene

from .types import CourseType, ModuleType, TaskType, AchievementType
from ..models import (
    Course,
    Module,
    Task,
    Achievement
)


class Query(graphene.ObjectType):
    courses = graphene.List(CourseType)
    modules = graphene.List(ModuleType)
    tasks = graphene.List(TaskType)
    achievements = graphene.List(AchievementType)

    def resolve_courses(self, info, **kwargs):
        return Course.objects.all()

    def resolve_modules(self, info, **kwargs):
        return Module.objects.all()

    def resolve_tasks(self, info, **kwargs):
        return Task.objects.all()

    def resolve_achievements(self, info, **kwargs):
        return Achievement.objects.all()
