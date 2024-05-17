import graphene

# from .types import (
#     ToolModuleGroupObject,
#     ToolModuleTypeObject,
#     ToolModuleObject,
#     ToolSensorTypeObject,
#     ToolInstalledSensorObject,
# )
from ..models import (
    Course,
    Module,
    Task,
    Achievement
)


class Query(graphene.ObjectType):
    pass
