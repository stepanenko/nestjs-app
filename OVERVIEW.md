## Controllers
Responsible for handling incoming requests and returning responses to the client.
A controller's purpose is to receive specific requests for the application.
The routing mechanism controls which controller receives which requests.
Frequently, each controller has more than one route, and different routes can perform different actions.
In order to create a basic controller, we use classes and decorators.
Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

## Providers
Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on.
The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other.
Controllers should handle HTTP requests and delegate more complex tasks to providers.
Providers are plain JavaScript classes that are declared as providers in a module.

## Modules
A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure
Nest uses to resolve module and provider relationships and dependencies. While very small applications may theoretically have just the root module, this is not the typical case. We want to emphasize that modules are strongly recommended as an effective way to organize your components.
Thus, for most applications, the resulting architecture will employ multiple modules, each encapsulating a closely related set of capabilities.

## Middleware

## Exception filters

## Pipes

## Guards

## Interceptors

## Custom decorators
