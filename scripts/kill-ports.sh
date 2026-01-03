#!/bin/bash

# Kill processes running on ports 4000 and 4200

echo "Killing processes on ports 4000 and 4200..."

for port in 4000 4200; do
  pid=$(lsof -ti :$port)
  if [ -n "$pid" ]; then
    echo "Killing process $pid on port $port"
    kill -9 $pid
  else
    echo "No process found on port $port"
  fi
done

echo "Done!"
