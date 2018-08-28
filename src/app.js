import React from "react";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}  

const Index = () => {
  return <div>Hello React Trainings!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));