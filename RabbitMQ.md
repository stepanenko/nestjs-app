
## RabbitMQ

RabbitMQ is an open-source and lightweight message broker which supports multiple messaging protocols.
It can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.
In addition, it's the most widely deployed message broker, used worldwide at small startups and large enterprises

**Installation**
```
npm i --save amqplib amqp-connection-manager
```

**To use the RabbitMQ transporter**, pass the following options object to the `createMicroservice()` method:
```
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false
    },
  },
});
```

The Transport enum is imported from the @nestjs/microservices package.

**Client**
Like other microservice transporters, you have several options for creating a RabbitMQ ClientProxy instance.

One method for creating an instance is to use the `ClientsModule`. To create a client instance with the `ClientsModule`,
import it and use the `register()` method to pass an options object with the same properties shown above in the `createMicroservice()` method,
as well as a `name` property to be used as the injection token.
```
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ]
  ...
})
```
