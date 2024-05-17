import graphene

from backend.api.graphql.queries import Query
schema = graphene.Schema(query=Query)
