## Lifecycle Events

A Nest application, as well as every application element, has a lifecycle managed by Nest.
Nest provides **lifecycle hooks** that give visibility into key lifecycle events, and the ability to act
(run registered code on your `module`, `injectable` or `controller`) when they occur.

### Lifecycle sequence

We can divide the overall lifecycle into three phases: **initializing, running** and **terminating**.
Using this lifecycle, you can plan for appropriate initialization of modules and services,
manage active connections, and gracefully shutdown your application when it receives a termination signal.

Lifecycle events happen during application bootstrapping and shutdown. Nest calls registered lifecycle hook methods on modules,
injectables and controllers at each of the following lifecycle events (shutdown hooks need to be enabled first).
Nest also calls the appropriate underlying methods to begin listening for connections, and to stop listening for connections.
