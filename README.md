Hello from React!👋
========================

The "Hello from React!👋" application is just a starter to show a minimalist React.js app.

Requirements
------------

* [Docker Desktop][1]

Installation
------------

Clone this repository:

```console
https://github.com/abdounikarim/poc-react
```

Go on the project root folder:

```console
cd poc-react/
```

Execute this command to launch docker container in dev:

```console
docker compose -f docker/compose.yaml up -d
```

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Start the application using the vite server:

```console
docker compose -f docker/compose.yaml exec node pnpm run dev
```

Then access the application in your browser at the given URL (<http://localhost:8000> by default).

**Option 2. Run the application in prod mode**

```console
docker compose -f docker/compose.yaml exec node pnpm run build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by opening the [http://localhost:8000/dist/index.html][2] link and navigate on your application.

Tests
-----

Execute this command to run tests:

```console
docker compose -f docker/compose.yaml exec node pnpm exec playwright test
```

[1]: https://www.docker.com/products/docker-desktop/
[2]: http://localhost:8000/dist/index.html
