
## Microservices Overview

In addition to traditional (sometimes called monolithic) application architectures, Nest natively supports the microservice architectural style of development.
Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards and interceptors,
apply equally to microservices. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets,
and Microservices. This section covers the aspects of Nest that are specific to microservices.

In Nest, a microservice is fundamentally an application that uses a different transport layer than HTTP.

Nest supports several built-in transport layer implementations, called transporters, which are responsible for transmitting messages between different microservice instances.
Most transporters natively support both request-response and event-based message styles. Nest abstracts the implementation details of each transporter behind a
canonical interface for both request-response and event-based messaging. This makes it easy to switch from one transport layer to another -- for example to leverage the
specific reliability or performance features of a particular transport layer -- without impacting your application code.
