#! /usr/bin/env node
const fs = require("fs")

const files = [
  "./src/App.css",
  "./src/App.js",
  "./src/App.test.js",
  "./src/index.css",
  "./src/index.js",
  "./src/logo.svg",
  "./src/reportWebVitals.js",
  "./src/setupTests.js",
  "./public/favicon.ico",
  "./public/logo192.png",
  "./public/logo512.png",
]
try {
  files.forEach((file) => {
    if (!fs.existsSync(file)) return
    fs.unlinkSync(file, (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`${file} was deleted`)
    })
  })
} catch (error) {
  console.log(error)
}

try {
  fs.writeFileSync(
    "./src/App.js",
    `
function App() {
    return <h1>Cleaner CRA</h1>;
}
      
export default App;`
  )
  fs.writeFileSync(
    "./src/index.js",
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);`
  )
  if (!fs.existsSync("./src/components")) {
    fs.mkdirSync("./src/components")
  }
} catch (error) {
  console.log("error", error)
}

console.log("Cleaner CRA is done")
