# Migrating To Version 10.0.0


**1.** In `angular.json` file, update following configurations in `projects > {electron-app-name} > architect`:
```json
    "package": {
        "builder": "nx-electron:package",
        "options": {
            ...
            "outputPath": "dist/packages",      // previously was "out"
            "prepackageOnly": true              // **NOTE**
        }
    },
    "make": {
        "builder": "nx-electron:make",
        "options": {
            ...
            "outputPath": "dist/executables"    // previously was "out"
        }
    },
```

> **💡  The steps below are only necessary if you are using [Context Isolation](https://www.electronjs.org/docs/tutorial/context-isolation).**

**2.** Add folder and file `.\apps\<electron-app-name>\src\app\api\preload.ts` with the following contents:

```typescript
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    platform: process.platform
});
```

**3.** Update file `.\apps\<electron-app-name>\src\app\app.ts` to include preload entry and use contextIsolation:

```typescript
...
webPreferences: {
    contextIsolation: true,
    backgroundThrottling: false,
    preload: join(__dirname, 'preload.js')
}
...
```
