Plugin for 

https://github.com/HohensteinGroup/ChangeChecker

https://www.npmjs.com/package/change-checker

## Installation 
```sh
npm install change-checker-regexp-plugin
yarn add change-checker-regexp-plugin
```
## Load

### TypeScript
```typescript
import { RegExpPlugin } from 'change-checker-regexp-plugin';
```

## Use

```ts
const compareFlags: boolean = true | false; 
const changeChecker = new ChangeChecker().withPlugin(new RegExpPlugin(compareFlags));
```

## Build
- clone
- yarn
- yarn build
