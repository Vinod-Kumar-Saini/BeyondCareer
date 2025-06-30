# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm install --save react-toastify`
"react-toastify": "^11.0.5",

 import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
  <br>

### `npm install --save @emailjs/browser`

"emailjs-com": "^3.2.0",

<br>

Resources : https://www.pexels.com/search/videos/free%20no%20copyright/   for videos

Project Screenshots

 ![image](https://github.com/user-attachments/assets/b1fb6d33-7cd0-4cb6-a914-4059aba2ac5b)

 ![image](https://github.com/user-attachments/assets/212cd53a-e9d2-4e2d-9d64-0a0d87891416)

![image](https://github.com/user-attachments/assets/176efebb-9d0b-48b7-963e-0ba39c597ec3)





The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
u couldn't customize it when you are ready for it.
ize)


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
