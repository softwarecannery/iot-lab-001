#!/bin/bash
sudo killall nodejs
sudo nodejs ./speakers.js > speaker.log 2>&1 &
sleep 1;
sudo nodejs ./cheeky.js > cheeky.log 2>&1 &
sleep 1
sudo nodejs ./bb8.js > bb8.log 2>&1 &
