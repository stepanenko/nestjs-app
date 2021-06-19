## Lifecycle Events

A Nest application, as well as every application element, has a lifecycle managed by Nest.
Nest provides **lifecycle hooks** that give visibility into key lifecycle events, and the ability to act
(run registered code on your `module`, `injectable` or `controller`) when they occur.

### Lifecycle sequence

The following diagram depicts the sequence of key application lifecycle events,
from the time the application is bootstrapped until the node process exits.
We can divide the overall lifecycle into three phases: **initializing, running and terminating**.
Using this lifecycle, you can plan for appropriate initialization of modules and services,
manage active connections, and gracefully shutdown your application when it receives a termination signal.
