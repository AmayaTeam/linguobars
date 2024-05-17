from django.contrib import admin
from .models import (
    Course,
    Module,
    Task,
    Achievement
)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "description",)
    search_fields = ("title", "description",)
    list_display_links = ("title",)


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ("name", "content",)
    search_fields = ("name", "content",)
    list_display_links = ("name",)


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ("type", "content", "status",)
    search_fields = ("type", "content", "status",)
    list_display_links = ("type",)


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ("description",)
    search_fields = ("description",)
    list_display_links = ("description",)
