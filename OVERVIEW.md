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

## Middleware

## Exception filters

## Pipes

## Guards

## Interceptors

## Custom decorators
