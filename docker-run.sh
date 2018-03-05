#!/bin/bash
sh combine.sh
nohup crond -f &
sh /usr/share/nginx/docker-run.sh
