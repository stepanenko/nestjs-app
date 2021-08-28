
## Circular dependency

A circular dependency occurs when two classes depend on each other. For example, class A needs class B, and class B also needs class A.
Circular dependencies can arise in Nest between modules and between providers.

While circular dependencies should be avoided where possible, you can't always do so. In such cases, Nest enables resolving circular
dependencies between providers in two ways. In this chapter, we describe using **forward referencing** as one technique,
and using the **ModuleRef** class to retrieve a provider instance from the DI container as another.

We also describe resolving circular dependencies between modules.

**WARNING**  
A circular dependency might also be caused when using "barrel files"/index.ts files to group imports.
Barrel files should be omitted when it comes to module/provider classes. For example, barrel files should not be used when importing
files within the same directory as the barrel file.
