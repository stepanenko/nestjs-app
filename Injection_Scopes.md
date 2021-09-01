
## Injection scopes

For people coming from different programming language backgrounds, it might be unexpected to learn that in Nest,
almost everything is shared across incoming requests. We have a connection pool to the database, singleton services with global state, etc.
Remember that Node.js doesn't follow the request/response Multi-Threaded Stateless Model in which every request is processed by a separate thread.
Hence, using singleton instances is fully safe for our applications.

However, there are edge-cases when request-based lifetime may be the desired behavior, for instance per-request caching in GraphQL applications,
request tracking, and multi-tenancy. Injection scopes provide a mechanism to obtain the desired provider lifetime behavior.

Using singleton scope is recommended for most use cases. Sharing providers across consumers and across requests means that an instance
can be cached and its initialization occurs only once, during application startup.

### Usage
Specify injection scope by passing the `scope` property to the `@Injectable()` decorator options object:

```
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {}
```

Similarly, for custom providers, set the `scope` property in the long-hand form for a provider registration:

```
{
  provide: 'CACHE_MANAGER',
  useClass: CacheManager,
  scope: Scope.TRANSIENT,
}
```

HINT: Import the `Scope` enum from `@nestjs/common`

NOTICE: Gateways should not use request-scoped providers because they must act as singletons. Each gateway encapsulates a real socket and cannot be instantiated multiple times.

Singleton scope is used by default, and need not be declared. If you do want to declare a provider as singleton scoped, use the `Scope.DEFAULT` value for the `scope` property.
