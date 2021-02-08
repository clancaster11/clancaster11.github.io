docker run -d \
    -v $(pwd)/dist:/web \
    -p 8080:8080 \
    halverneus/static-file-server:latest