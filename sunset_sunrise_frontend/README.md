```
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app \
    -p 3001:3000 \
    sunrisesunsetfrontend
```

To get frontend working in k8's, remove nginx.conf and remove step in Dockerfile. Need to figure out how to get flask and react talking.
