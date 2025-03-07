import React from "react";    // after removing react CDN links, without this  import statement, the code will not work.
import ReactDOM from "react-dom/client"; // after removing react CDN links, without this  import statement, the code will not work.


// start **************************************L   1 , 2 ******************************************************************start 
//  lecture 1 and 2 
// const heading = React.createElement(
//     'h1',
//      {
//         id:"heading",
//         class:"heading-class",
//      }, 
//      'Hello World from React !'); 

//      console.log(heading); // returns object

// const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root object

// root.render(heading); //converts object to html and renders it to the root element. 



// ********************************************************************************************************************

// converting below HTML to React code

/* <div id="parent">
    <div class="children">    //children 
        <h1> This is a h1 tag </h1>  // Here both h1 and p are children of div and h1 is sibling of p
        <p> This is a paragraph </p>
    </div>
</div> */


//React.createElement does not support sibling elements. So, we need to pass them as an array of elements.

// const parent = React.createElement( 
//     'div',
//     {
//         id:"parent",
//     },
//     React.createElement(
//         'div',
//         {
//             className:"children",
//         },
//         // when silbing elements are there, we can pass them as an array of elements
//         [
//             React.createElement(
//                 'h1',
//                 {},
//                 'This is a h1 tag'
//             ),
//             React.createElement(
//                 'p',
//                 {},
//                 'This is a paragraph sibling of h1 tag'
//             ),
//             React.createElement(
//                 'p',
//                 {},
//                 'This is a paragraph sibling of h1 tag'
//             )
//         ]
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root object
// console.log(parent);

// root.render(parent); //renders the parent element to the root element.

// end  **************************************L   1 , 2 ******************************************************************end  



// ############################################################################################################################################################################
// start ************************************** L --3 ( Laying foundation ) ******************************************************************start 

//  using React.createElement ( ) method to create a React element and rendering it to the root element.
// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//         class: "heading-class",
//     },
//     "Hello World from React !"
// );

// const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root object
// console.log(heading); // returns object 
// root.render(heading); //converts object to html and renders it to the root element.


// The above syntax is complex and not easy to understand. So, we use JSX to write the above code in a more readable way.


// to solve the above issue we use JSX. 
// JSX is a syntax extension for JavaScript recommended by React. It is not necessary to use JSX,
//  but it is recommended for better readability and writing code in a more readable way.
//JSX and React both are diffent things. JSX is a syntax extension for JavaScript recommended by React.


// creating react tag using JSX
//Here h1 is a react tag and not an HTML tag.  ( HTML like syntax in JS ) 
// it is just JSX not HTML tag.. it is converted to React.createElement() method internally by babel.


const heading  = <h1 id="heading" className="heading-class">Hello World from React   !</h1>;
console.log(heading); // returns object that is converted to React.createElement() method internally by babel. 
//so both of thema re same .. this JSX code react.createElement() method internally by babel.. 

const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root object
root.render(heading); //renders the heading element to the root element. 



/* { <h1 id="heading" className="heading-class">Hello World from React   !</h1>;
=> the above is not understood by the JS engine , as JS engine only understands Ecma Script Syntax
=> then how does it understand the above code ? 
=> the above code is converted to below code by babel before it reaches JS   and then understood by JS engine.  
=> ( babel is a JS compiler this is managed by the parcel bundler. converts here JSX to React code internally ) 
=> JSX => React.createElement() => ReactElement - JS Object => ReactDOM.render() => HTML Element 
=> Babel ( JSX to React.createElement() ) => JS Engine ( ReactElement ) => ReactDOM.render() => HTML Element
=> 


React.createElement("h1", { id: "heading", className: "heading-class" }, "Hello World from React   !"); } */
// so the above code is understood by the JS engine.        



// React Component :
// A React component is a reusable piece of code that returns a React element. OR JSX code. 
// A React component can be a class component or a functional component.
// A class component is a JavaScript class that extends React.Component class.
// A functional component is a JavaScript function that returns a React element.
// A React component can be created using JSX or React.createElement() method.
// A React component can be rendered using ReactDOM.render() method.
// A React component can be nested inside another React component.
// A React component can be passed props and state.
// A React component can be updated using props and state.
// A React component can be unmounted using ReactDOM.unmountComponentAtNode() method.
// A React component can be updated using ReactDOM.render() method.
// A React component can be updated using ReactDOM.hydrate() method.
// A React component can be updated using ReactDOM.createPortal() method.
// 2 types of components in React : 1. Class Component  ( Old way ) 2. Functional Component ( used now )

// Main difference between below Functional components is that
// first one returns implicit return and second one returns explicit return. 
// implicit return using Arrow functions are wrapped inside ( ......) and for explicit return we use { return ( ......) }
// both are same but explicit return is more readable.

// const Heading1Component = () => (
//   <h1 id="heading" className="heading-class">Hello World from React  using functional Component  !</h1>
// )

// const Heading2Component = () => {
//     return <h1 id="heading" className="heading-class">Hello World from React  using functional Component  !</h1>;
// };


// React Component using Functional Component : 

// const HeadingComponent = () => {
//     return <h1 id="heading" className="heading-class">Hello World from React  using functional Component  !</h1>;
// };

// // React Element
// const headingElement = (
//     <h1 id="heading" className="heading-class">Hello World from React using heading Element    !</h1>
// );

// root.render(headingElement); //renders the heading element to the root element.
// root.render(<HeadingComponent />); //renders the HeadingComponent to the root element.  overrided the previous element.

const Title = function (){
    return (
      <div className="title">
        <h1> This is a title </h1>
        <h1> This is a title </h1>;
      </div>
    );
       
};

// Here the point is reactTitle is just a normal JS variable and it is taking a React Element as a value. 
// so it can used inside string interpolation also as normal variable in JS.
const reactEle = (
    <h1>This is a React elemetn and reactEle is just a JS variable .. that can be rendered using {} </h1>
);

const HeadingComponent = () => {
    // This functional component returns a React element. 
    return (
        <div>
             {/* nested component  --- also called component composition, including one component into another
             complete code of Title functional component will be replaced Here . */}
            <Title />
            <h1> This is a heading </h1>
            <JSInsideJSX />
        </div>
    );
};
const number = 0 ;
const name = "hello";
const JSInsideJSX = () => (
    // using this syntax  any JS expression  code can be written inside JSX
    // { }  is used to write JS code inside JSX
    // string interpolation is also possible inside JSX using { }
    <div  className="js-inside-jsx">
        <p> {number} {20+ 40}
        {console.log("Hello World")}
        </p>
        <p> {name} </p>
        {/* Here reactEle is a normal JS variable and it is taking a React Element as a value. */}
        {reactEle}
    </div>
);

root.render(<HeadingComponent/>); //renders the HeadingComponent to the root element. 
// overrided the previous element.


















// end  ************************************** L --3 ( Laying foundation ) ******************************************************************end