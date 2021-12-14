
# Dynamic Modules

## Intro

Modules define groups of components like providers and controllers that fit together as a modular part of an overall application.
They provide an execution context, or scope, for these components. For example, providers defined in a module are visible to other
members of the module without the need to export them. When a provider needs to be visible outside of a module, it is first exported
from its host module, and then imported into its consuming module.

Continue: https://docs.nestjs.com/fundamentals/dynamic-modules#introduction
