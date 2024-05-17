from graphene_django import DjangoObjectType
from ..models import (
    Course,
    Module,
    Task,
    Achievement
)


# class ToolModuleGroupObject(DjangoObjectType):
#     class Meta:
#         model = ToolModuleGroup
#
#
# class ToolModuleTypeObject(DjangoObjectType):
#     class Meta:
#         model = ToolModuleType
#
#
# class ToolModuleObject(DjangoObjectType):
#     class Meta:
#         model = ToolModule
#
#
# class ToolSensorTypeObject(DjangoObjectType):
#     class Meta:
#         model = ToolSensorType
#
#
# class ToolInstalledSensorObject(DjangoObjectType):
#     class Meta:
#         model = ToolInstalledSensor
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