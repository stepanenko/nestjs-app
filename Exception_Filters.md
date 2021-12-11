
# Exception filters

Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

Out of the box, this action is performed by a built-in global exception filter, which handles exceptions of type HttpException (and subclasses of it). When an exception is unrecognized (is neither HttpException nor a class that inherits from HttpException), the built-in exception filter generates the following default JSON response:

## Throwing standard exceptions

Nest provides a built-in `HttpException` class, exposed from the `@nestjs/common` package.
For typical HTTP REST/GraphQL API based applications, it's **best practice to send standard HTTP response objects** when certain error conditions occur.

For example. Let's assume that this route handler throws an exception for some reason. To demonstrate this, we'll hard-code it as follows:

```js
cats.controller.ts

@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```

**HINT:** We used the HttpStatus here. This is a helper enum imported from the `@nestjs/common` package.
When the client calls this endpoint, the response looks like this:

```
{
  "statusCode": 403,
  "message": "Forbidden"
}
```

The `HttpException` constructor takes two required arguments which determine the response:

The `response` argument defines the JSON response body. It can be a `string` or an `object` as described below.
The `status` argument defines the HTTP status code.

By default, the JSON response body contains two properties:

`statusCode`: defaults to the HTTP status code provided in the `status` argument
`message`: a short description of the HTTP error based on the `status`

To override just the message portion of the JSON response body, supply a string in the response argument.
To override the entire JSON response body, pass an object in the response argument. Nest will serialize the object and return it as the JSON response body.

The second constructor argument - `status` - should be a valid HTTP status code.
**Best practice is to use the `HttpStatus` enum imported from `@nestjs/common`.**

Here's an example overriding the entire response body:

```js
cats.controller.ts

@Get()
async findAll() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}
```

Using the above, this is how the response would look:

```
{
  "status": 403,
  "error": "This is a custom message"
}
```
