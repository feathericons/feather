#!/bin/bash

npm install --legacy-peer-deps
npm run build
npm run test:coverage
npm run lint
