npm install --save-dev vitest @vitejs/plugin-react
vitest.config.js

```
// vitest.config.js || vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // for testing React components
  },
});
```

npm i -D js-dom
npm i --save-dev @types/jest
npm i -D "@testing-library/react"
adding up my package.json
"moduleResolution": "nodenext"
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @vitest/coverage-v8

## install package.json file

"script" : {
"test": "vitest",
"coverage": "vitest run --coverage"
}
