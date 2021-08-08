
## Lazy-loading

By default, modules are eagerly loaded, which means that as soon as the application loads, so do all the modules,
whether or not they are immediately necessary. While this is fine for most applications, it may become a bottleneck
for apps/workers running in the serverless environment, where the startup latency ("cold start") is crucial.

Lazy loading can help decrease bootstrap time by loading only modules required by the specific serverless function invocation.
In addition, you could also load other modules asynchronously once the serverless function is "warm" to speed-up the bootstrap
time for subsequent calls even further (deferred modules registration).


More at: https://docs.nestjs.com/fundamentals/lazy-loading-modules
