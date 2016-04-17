#!/bin/bash


while [ 1 ]; do

cmd=`nc -l 1234`
case $cmd in
left*)
  # move left
  ;;
right*)
  # move right
  ;;
forward*)
  # move forward
  ;;
*)
  # default or other... do nothing
  echo "got command: $cmd, unimplemented"
  ;;
esac

done

