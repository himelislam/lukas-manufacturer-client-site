import React, { useState } from 'react';

const Blogs = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);
    const [box6, setBox6] = useState(false);

    return (
        <div className='min-h-[1000px]'>
            <>
                <title>FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </>
            <div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" className="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
                    <div className="md:py-36 py-20">
                        <h1 role="heading" className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                            Blogs Section
                        </h1>
                    </div>
                    <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        <div className="bg-white shadow rounded p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">How will you improve the performance of a React Application?</h2>
                                </div>
                                <button onClick={() => setBox1(!box1)} className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box1 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {box1 && (
                                <ul className="">
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* By Keeping All component states local and  where necessary</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* By not using excessive CSS animations</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* Code-splitting in React using dynamic import()</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* Lazy loading images in React</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* By Using useMemo() Hook to optimize the technique of Memoization</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* By making sure that components receive only necessary props</li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800"> What are the different ways to manage a state in a React application?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox2(!box2);
                                    }}
                                    data-menu
                                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box2 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box2 && (
                                <ul>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* By using useReducer Hook for complex state. It doesn’t require third-party dependencies. And cad reduce the amount of data recreated with each render.</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* Using Custom Hook. On custom React hooks we can encompass complex logic into a single accessible hook</li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* Using Global State Management.On a large application that are dealing with complex states will help to reduce the complexity by using extarnal library to manage it. There are Context API, Recoil, Redux that can help to manage global state. </li>
                                    <li className="text-base leading-normal text-gray-600 mt-4 lg:w-96">* Using Data Fectching Library. We can use React Query or Apollo Client to fetch data smoothly and can also catch in datas from API. And also help to updating the UI automatically in a predictable, declarative, and readable way. </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">How does prototypical inheritance work?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox3(!box3);
                                    }}
                                    data-menu
                                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box3 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box3 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">In Javascript, The Prototypal Inheritance is a feature that used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. In javascript we can access a object that are on in another object by using javascript prototypical inheritance.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                                </div>
                                <button onClick={() => setBox4(!box4)} data-menu className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box4 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box4 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">If we use setProducts[...] the mutable way. then on first time set products it will set the new products value. but when we will try to set new products on products by using setProducts[...] it will not replace the previous products. it will have the value or previous products plus current products. So thats why we should not use [...] mutable way to set State. in mutable way it will just replace all the value we'll put.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                                </div>
                                <button onClick={() => setBox5(!box5)} data-menu className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box5 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box5 && (
                                <ul>
                                    <>
                                        <>
                                            <pre>
                                                <code>
                                                {/* const [results, setResults] = useState([])
                                                const products = [
                                                    {
                                                        name: 'car',
                                                        price: 123
                                                    },
                                                    {
                                                        name: 'bike',
                                                        price: 123
                                                    },
                                                    {
                                                        name: 'boat',
                                                        price: 123
                                                    },
                                                    {
                                                        name: 'train',
                                                        price: 123
                                                    },
                                                    ]
                                                


                                                    const handleSearch = event => {
                                                        const search = event.target.value;
                                                        if(search){
                                                        const namedObject = products.filter(product => product.name.includes(search))
                                                        setResults(namedObject)
                                                        }
                                                        else{
                                                        setResults([])
                                                        }
                                                    }
                                                    
                                                    // ------------------------
                                                    // This part is for return
                                                    // -----------------------

                                                    <input onChange={handleSearch} type="text" name='search' />
                                                    {
                                                    results.map(result => <li className='text-white'>{result.name}</li>)
                                                    } */}
                                                </code>
                                            </pre>
                                        </>

                                    </>
                                        <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">Sir, The Solution is Commented on the Blogs.js page. code line 167-207. I've tried to visualise the code using |code| and |pre| tag bt its not working. please check the Blogs.js page </p>
                                </ul>
                            )}
                        </div>
                        <div className="bg-white shadow rounded p-8 mt-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold leading-none text-gray-800">What is a unit test? Why should write unit tests?</h2>
                                </div>
                                <button onClick={() => setBox6(!box6)} data-menu className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box6 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box6 && (
                                <ul>
                                    <li>
                                        <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">Unit testing is a process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. It allows software developers to actually think about the design of the software and that has to be done before they start writing the code. It helps them to stay focused and also create much better designs</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;