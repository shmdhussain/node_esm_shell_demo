#!/bin/sh
':' // ; cat "$0" | node --input-type=module - $@ ; exit $?

import * as os from 'node:os';

const {username} = os.userInfo();
console.log(`Hello ${username}!`);
