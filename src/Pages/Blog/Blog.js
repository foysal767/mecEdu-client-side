import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-gray-100 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-semibold'>1. What is CORS?</h1>
                <h2 className='text-xl'>Ans: Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</h2>
            </div>
            <div className='bg-gray-100 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-semibold'>2. Why you are using Firebase? What other options do you have to implement authentication?</h1>
                <h2 className='text-xl'>Ans: Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web. <br />
                    We used to store users data like chat messages, users details and other metadata, user-generated content like the profile picture, multimedia messages, etc. <br />
                    Alternatives to Firebase authentication: <br />
                    a. Auth0 <br />
                    b. MongoDB <br />
                    c. Password <br />
                    d. Okta <br />
                    e. JSON web token <br />
                    f. Keycloak etc.
                </h2>
            </div>
            <div className='bg-gray-100 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-semibold'>3. How does the private route work?</h1>
                <h2 className='text-xl'>Ans: The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h2>
            </div>
            <div className='bg-gray-100 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-semibold'>4. What is Node? How does Node work?</h1>
                <h2 className='text-xl'>Ans: Node: Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. <br />

                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />

                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                    Node.js basically works on two concept <br />

                    1. Asynchronous <br />
                    2. Non-blocking I/O
                </h2>
            </div>
        </div>
    );
};

export default Blog;