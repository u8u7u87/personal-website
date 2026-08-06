# Chapter 2: Monorepos & Workspace Hoisting

As web applications scale, organizing code becomes a major engineering challenge. A monorepos structure, paired with package workspaces and dependency hoisting, provides a solid framework for managing multi-package and multi-app codebases.

## Monorepos: The Multi-Package Workspace

A **monorepo** (monolithic repository) is a software development strategy where code for multiple projects, libraries, or applications is stored in a single version control repository. 

In the Node.js ecosystem, monorepos are typically implemented using package manager workspaces (e.g., npm Workspaces, Yarn Workspaces, or pnpm Workspaces).

### Key Features
- **Shared Code**: Easily share utilities, types, and UI components across apps (e.g., sharing a `/shared` module with both `blog` and `landing` apps).
- **Single Source of Truth**: One git repository simplifies global refactoring, atomic commits, and centralized configurations (eslint, tsconfig, etc.).
- **Dependency Management**: Centralized dependency versions reduce duplicate packages and resolve version conflicts across applications.

---

## Workspace Configuration

Workspaces are configured in the root-level `package.json` file. Here is an example configuration:

```json
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

This tells the package manager to look inside `apps/` and `packages/` for individual packages containing their own `package.json` files and treat them as symlinked local dependencies.

---

## Dependency Hoisting

When you run `install` in a monorepo workspace, the package manager resolves and downloads all dependencies. By default, it uses a technique called **dependency hoisting**.

### What is Hoisting?
Hoisting is the process of pulling dependencies from individual package `node_modules` folders up to the root-level `node_modules` folder.

```
Monorepo Structure (Before Hoisting):
├── package.json (root)
├── packages/
│   ├── app-a/
│   │   ├── package.json (depends on lodash@4.0.0)
│   │   └── node_modules/lodash/
│   └── app-b/
│       ├── package.json (depends on lodash@4.0.0)
│       └── node_modules/lodash/

Monorepo Structure (After Hoisting):
├── package.json (root)
├── node_modules/
│   └── lodash/  <-- Hoisted to the root
└── packages/
    ├── app-a/
    └── app-b/
```

### Benefits of Hoisting
- **Storage Saving**: Avoids downloading and duplicating multiple identical instances of the same package.
- **Faster Install Times**: Speeds up build and bootstrap pipelines by optimizing disk writes.

### Challenges of Hoisting (Phantom Dependencies)
- **Phantom Dependencies**: Occur when a package imports a module that it does not declare in its own `package.json`, but can resolve it because the package was hoisted to the root by another package's dependency list. This can cause runtime crashes if the dependency structure changes.
- **Version Mismatches**: If `app-a` depends on `lodash@4.0.0` and `app-b` depends on `lodash@3.0.0`, hoisting cannot satisfy both at the root level. One will remain nested in its local folder, which might lead to build inconsistencies.
- **Solving with pnpm**: Frameworks like `pnpm` use content-addressable hard links and non-hoisted layouts (via symlinks) to solve both duplication and phantom dependencies.
