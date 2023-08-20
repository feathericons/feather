#!/bin/bash

npm install --legacy-peer-deps
npm run build
npm run lint
npm run test:coverage
