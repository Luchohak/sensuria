docker run \
    -it \
    --rm \
    -p 8080:8080 \
    -v ${PWD}:/app \
    -v /app/node_modules \
    sensuria:ver1.0