## Starter for simple js project

Includes:

+ webpack setup for css
+ postcss
+ tailwind css

How to run?

first: `npm install`

then `npm run build` or `npm run dev`

and visit /dist/index.html

If you want to use postcss to remove unused style classes please create `.env` file in root of the project containing mode selector `NODE_ENV=production`

### Important notes:

contains `CleanWebpackPlugin` which deletes content of /dist folder

### Author

Michal Msatbsx

## License

MIT