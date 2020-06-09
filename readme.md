# Tetris.ts
Tetris Game written in **Typescript**!

## Build
Run following command to build the project:
```
npm run build
```

If you want to build in **docker**:
```
docker build . --rm -t tetris.ts
```
or
```
npm run build:docker
```

## Run Tetris.ts
Run following command to find **Tetris.ts** on [localhost:8666](http://127.0.0.1:8666/)
```
npm run start:docker
```
or
```
docker run --publish 8666:80 --name tetris -d tetris.ts
```

## Clean Up
```
npm run clean:docker
```