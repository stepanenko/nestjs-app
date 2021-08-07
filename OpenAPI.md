## OpenAPI

The OpenAPI specification is a language-agnostic definition format used to describe RESTful APIs.
Nest provides a dedicated module which allows generating such a specification by leveraging decorators.

`document` (returned by the `SwaggerModule#createDocument()` method) is a serializable object conforming to OpenAPI Document.
Instead of hosting it via HTTP, you could also save it as a JSON/YAML file, and consume it in different ways.

The `DocumentBuilder` helps to structure a base document that conforms to the OpenAPI Specification.
It provides several methods that allow setting such properties as title, description, version, etc.
In order to create a full document (with all HTTP routes defined) we use the `createDocument()` method of the `SwaggerModule` class.
This method takes two arguments, an application instance and a Swagger options object.
Alternatively, we can provide a third argument, which should be of type `SwaggerDocumentOptions`.

More: https://docs.nestjs.com/openapi/introduction
