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

























// end  ************************************** L --3 ( Laying foundation ) ******************************************************************end