# CloudResearch

## How to start

### Install

```bash
npm install
```

### Development

* `npm run dev`: watch file changes of `/client/src/xxx.we` and automatically build into `/client/build/xxx.js`, 
* `npm run serve`:open a static serve in port 12580, you can change the port in package.json, preview in html5 renderer through `http://localhost:12580/`

*note: the entry file can be configured in `/build/webpack.config.js`, learn more from [weex-loader](https://www.npmjs.com/package/weex-loader)*

Finally the generated code will be found in `/client/build` folder.
