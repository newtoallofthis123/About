import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(`
 _   _             _    ____       _
| \\ | | ___   ___ | |__/ ___|  ___(_) ___ _ __   ___ ___
|  \\| |/ _ \\ / _ \\| '_ \\___ \\ / __| |/ _ \\ '_ \\ / __/ _ \\
| |\\  | (_) | (_) | |_) |__) | (__| |  __/ | | | (_|  __/
|_| \\_|\\___/ \\___/|_.__/____/ \\___|_|\\___|_| |_|\\___\\___|
`)
console.log("Made with ❤️ and React")
console.log("©️ NoobScience 2023")
console.log("If You are here, you probably know what you are doing. " +
    "I am always looking for opportunities to collaborate and I would love to hear from you. " +
    "You can reach me at: mailto:noobscience@duck.com")
console.log(`
  ____ _ _   _   _       _
 / ___(_) |_| | | |_   _| |__
| |  _| | __| |_| | | | | '_ \\
| |_| | | |_|  _  | |_| | |_) |
 \\____|_|\\__|_| |_|\\__,_|_.__/
`)
console.log("This site is open source. " +
    "You can find the source code at: https://github.com/newtoallofthis123/About. " +
    "HopeFully there are no bugs. If you find any, please let me know by opening an issue.")
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
serviceWorkerRegistration.register();