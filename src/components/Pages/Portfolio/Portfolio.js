import React from 'react';

const Portfolio = () => {
    return (
        <div>
            {/* <!-- component -->
            <!-- Creaet Blog Portfolio By Joker Banny --> */}
            <header className="max-h-full bg-white p-6 grid">
                {/* <!-- Navbar Menu --> */}


                {/* <!-- Section Hero  --> */}
                <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                    <div className="grid justify-center items-center order-1 col-span-1">
                        <img className="lg:h-80 md:h-64 h-40 rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQEI8zveUbevvQ/profile-displayphoto-shrink_800_800/0/1646662961493?e=1658966400&v=beta&t=JJNjHk_K609BDSFxqf2QPGPnsRc0kYoFDa7_gGdcZwY" alt="" />
                    </div>
                    <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                        <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Himel, Aspirant Full Stack Developer</h1>
                        <p className="text-xl text-gray-800 text-center md:text-left">I'm a Student of Sylhet Polytechnic Institute from Sylhet. And I'm Learning Mern Stack Development from PHero with Jankhar Mahbub.</p>
                        <p className="text-xl text-gray-800 text-center md:text-left mt-4">Email: himel7100@gmail.com</p>
                        <a href="https://github.com/himelislam"><button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-primary">Github Link</button></a>
                    </div>
                </div>
            </header>

            {/* <!-- Main --> */}
            <div className="md:gap-4 p-6 bg-blue-50 md:grid">
                <div className="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
                    <h1 className="justify-start md:text-left text-4xl">PROFESSIONAL SKILLS:</h1>
                </div>
                <div className="md:grid grid-cols-2 gap-6 lg:px-40">
                    <div>
                        <div className="bg-white p-4">
                            <div>
                                <div className="mb-4">
                                    <h1 className="text-2xl font-bold text-gray-700">For Front-End Development</h1>
                                </div>

                                <div className="">
                                    <ul>
                                        <li className='text-xl'>HTML 5</li>
                                        <li className='text-xl'>CSS 3</li>
                                        <li className='text-xl'>Bootstrap</li>
                                        <li className='text-xl'>Tailwind</li>
                                        <li className='text-xl'>Javascript</li>
                                        <li className='text-xl'>React</li>
                                        <li className='text-xl'>Firebase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold text-gray-700">For Back-End Development</h1>
                            </div>

                            <div className="">
                                <ul>
                                    <li className='text-xl'>Node js</li>
                                    <li className='text-xl'>MongoDB</li>
                                    <li className='text-xl'>Express Js</li>
                                    <li className='text-xl'>JWT</li>
                                    <li className='text-xl'>Node Mailer</li>
                                    <li className='text-xl'>Stripe Payment</li>
                                    <li className='text-xl'>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-white px-6">
                    <div className="border-b pb-6">
                        <h1 className="mt-2 mb-6 text-center text-4xl">PORTFOLIO WEBSITES</h1>
                        <div className="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img className="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/280751375_1374180606359199_8378101774029387074_n.png?stp=dst-png_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGlbEy7ZLh2VsmQliH9ftoI1Q6FfTGmPkbVDoV9MaY-Rinrw1goL7RssVwb-6J8K5HsywazXPNLZPcv86rTnQeV&_nc_ohc=hIj35oAA4JkAX_IBRaS&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVJL8Y0b6zHnsVjkgv4kxdT9AXFcnNWPR2h_XTMJDrK3Zg&oe=62B25079" alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">The Warehouse</h1>
                                <span className="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://the-warehouse-76732.web.app/"><spnan className="text-xs">Click Here</spnan></a></button>
                                <p className="mt-6 text-lg text-gray-700">The Warehouse is an Inventory Management website based web application. It manage inventory by 6 different routes called Home, Blogs, Manage Item, Add Item, Update Item, My Items. On Home page it has a Carousel Banner, Inventory Products section, Testimonials section, Our Partners secion and a Footer for all Pages. On Manage Item page user can see all products, and can delete, update, and select the product for my item page. On Add Item page user can add a new item to the inventory by fill up a form. On Update Item page user can see products datails like sold amount, supplier etc and can delever a item by clicking delevered button, and can restock the product amount by using restock form. On My Item page user can see all his added and selected items. and he can delete any product by clicking delete button. User have to login or signup to use Manage Item, Add Item, Update Item and My Item page.User can login by Google sign In option, or Creating a new user by Sign up method</p>
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img className="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/282804664_756362432206541_393756319981429784_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGxnARKqxknaLPDfAteYYJfc2tYW83py0xza1hbzenLTG_ZZt6qeDcMKiHOIu_SkkdEIwRKzXcZwHPEBQfJMp6k&_nc_ohc=VFTOwFQfH60AX92Cx3o&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVIkex7FsU5H8JJn-Ddc4Ssmv3XkoHJc9x2uS7yCZ1L8hg&oe=62B30E92" alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">To Do App</h1>
                                <span className="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://todo-app-f3cd8.web.app/"><spnan className="text-xs">Click Here</spnan></a></button>
                                <p className="mt-6 text-lg text-gray-700">To Do App is a Task Managment based Web application. User can Add There Task On There My Task Route. and They can also cancel add mark as a completed there Task on there Daily basis. Its a Proteceted web app. User has to SignUp or Login via Google Sign in to get access.</p>
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img className="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/282298443_1037613030449190_2692265283542797939_n.png?stp=dst-png_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF5CaZF5QZZF-NThdkRsYLT_VXsPodfcqn9Vew-h19yqXzrbjGlI24n8ZHGuN41N5jxCV-qjQcCb9zsaRfejrrq&_nc_ohc=BY0FPHAutqsAX81w10C&tn=hUqbf-Wix04AAe2O&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVI9X4EsE-eWLSvz_vGffnDAs3r3e4YIQK6I43ggWMJxcg&oe=62B4D89D" alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">Jody Michael Associates</h1>
                                <span className="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://jody-michael.web.app/"><spnan className="text-xs">Click Here</spnan></a></button>
                                <p className="mt-6 text-lg text-gray-700">Jay Michael is a career based web application. It has 6 Routes regarding Login and Signup page. Jay Michael provides career orianted coaching services. It also has blog section named as Helpful Resources. User have to Login or Signup for Book her services. They can Create a new Account or Sign In with Google, Facebook or Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;