import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import { Storage } from "aws-amplify";
import config from "./aws-exports";
Storage.configure({
    region: config.aws_user_files_s3_bucket_region,
    bucket: config.aws_user_files_s3_bucket,
    identityPoolId: config.aws_user_pools_id,
    level: "protected",
});

Amplify.configure(config);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
