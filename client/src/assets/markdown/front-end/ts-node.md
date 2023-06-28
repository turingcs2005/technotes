# Configure ts-node in tsconfig.json

Often a developer will use ts-node package (installed globally) to execute typescript source code for testing purpose. To configure ts-node, add the following to tsconfig.json file:
```json
// ts-node configuration in tsconfig.json
"ts-node": {
  "transpileOnly": true, // Specify ts-node options here
  "compilerOptions": {
    "module": "commonjs" // Override compilerOptions. Only ts-node will use these overrides
  }
}
```