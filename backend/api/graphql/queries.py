import graphene

from ..models import (
    Course,
    Module,
    Task,
    Achievement
)

class Query(graphene.ObjectType):
    courses = graphene.List(Course)
    modules = graphene.List(Module)
    tasks = graphene.List(Task)
    achievements = graphene.List(Achievement)

    def resolve_courses(self, info, **kwargs):
        return Course.objects.all()

    def resolve_modules(self, info, **kwargs):
        return Module.objects.all()

    def resolve_tasks(self, info, **kwargs):
        return Task.objects.all()

    def resolve_achievements(self, info, **kwargs):
        return Achievement.objects.all()
