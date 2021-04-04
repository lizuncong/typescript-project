### typescript项目初始化
- 控制台运行 `tsc --init` 命令初始化typescript项目，ts在根目录下生成 `tsconfig.json` 文件


### 运行
ts代码不能直接运行，需要转换成js代码。
- `npx tsc demo.ts` 运行 `tsc` 命令编译ts文件，生成demo.js文件，再运行 `node demo.js`
- 或者，安装 `ts-node` 插件，然后可以直接运行 `npx ts-node demo.ts`


### tsconfig.json
- 如果是在终端运行 `tsc demo.ts` 时，ts默认不会读取 `tsconfig.json`文件。如果是在终端直接运行
  `tsc`，ts会默认读取 `tsconfig.json` 文件。这个区别要注意下。
