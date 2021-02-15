#!/usr/bin/env node

require('..').run()
  .catch(_error => {
    console.error(_error.message)
    process.exitCode = 1;
  })
