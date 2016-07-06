#!/bin/bash
watchman-make \
	--make="npm run" \
	-p 'packages/**' -t "build:web" \
	-p 'packages/server/src/**' -t "build:server" \
	-p 'packages/shared/src/**' -t "build:shared" \
