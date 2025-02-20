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




const parent = React.createElement( 
    'div',
    {
        id:"parent",
    },
    React.createElement(
        'div',
        {
            className:"children",
        },
        // when silbing elements are there, we can pass them as an array of elements
        [
            React.createElement(
                'h1',
                {},
                'This is a h1 tag'
            ),
            React.createElement(
                'p',
                {},
                'This is a paragraph'
            )
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root')); //creates a root object
console.log(parent);

root.render(parent); //renders the parent element to the root element.
