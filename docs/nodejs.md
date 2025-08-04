---
id: nodejs
title: Node.js
sidebar_position: 1
---

## Overview

Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling JavaScript to run on the server side.

## Key Features

- Asynchronous & Event-driven
- Fast execution (V8 Engine)
- NPM ecosystem
- File system & network APIs

## Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
