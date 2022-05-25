import React from 'react';

const Portfolio = () => {
    return (
        <div>
            {/* <!-- component -->
            <!-- Creaet Blog Portfolio By Joker Banny --> */}
            <header class="max-h-full bg-white p-6 grid">
                {/* <!-- Navbar Menu --> */}


                {/* <!-- Section Hero  --> */}
                <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                    <div class="grid justify-center items-center order-1 col-span-1">
                        <img class="lg:h-80 md:h-64 h-40 rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQEI8zveUbevvQ/profile-displayphoto-shrink_800_800/0/1646662961493?e=1658966400&v=beta&t=JJNjHk_K609BDSFxqf2QPGPnsRc0kYoFDa7_gGdcZwY" alt="" />
                    </div>
                    <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
                        <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Himel, Aspirant Full Stack Developer</h1>
                        <p class="text-xl text-gray-800 text-center md:text-left">I'm a Student of Sylhet Polytechnic Institute from Sylhet. And I'm Learning Mern Stack Development from PHero with Jankhar Mahbub.</p>
                        <p class="text-xl text-gray-800 text-center md:text-left mt-4">Email: himel7100@gmail.com</p>
                        <a href="https://github.com/himelislam"><button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-primary">Github Link</button></a>
                    </div>
                </div>
            </header>

            {/* <!-- Main --> */}
            <div class="md:gap-4 p-6 bg-blue-50 md:grid">
                <div class="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
                    <h1 class="justify-start md:text-left text-2xl">Professional Skills:</h1>
                </div>
                <div class="md:grid grid-cols-2 gap-6 lg:px-40">
                    <div>
                        <div class="bg-white p-4">
                            <div>
                                <div class="mb-4">
                                    <h1 class="text-2xl font-bold text-gray-700">For Front-End Development</h1>
                                </div>

                                <div class="">
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

                    <div class="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div class="mb-4">
                                <h1 class="text-2xl font-bold text-gray-700">For Back-End Development</h1>
                            </div>

                            <div class="">
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

                <div class="mt-6 p-4 bg-white px-6">
                    <div class="border-b pb-6">
                        <h1 class="mt-2 mb-6 text-center text-xl">Portfolio Websites</h1>
                        <div class="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img class="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/280751375_1374180606359199_8378101774029387074_n.png?stp=dst-png_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGlbEy7ZLh2VsmQliH9ftoI1Q6FfTGmPkbVDoV9MaY-Rinrw1goL7RssVwb-6J8K5HsywazXPNLZPcv86rTnQeV&_nc_ohc=hIj35oAA4JkAX_IBRaS&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVJL8Y0b6zHnsVjkgv4kxdT9AXFcnNWPR2h_XTMJDrK3Zg&oe=62B25079" alt="" />
                            </div>
                            <div>
                                <h1 class="my-6 text-2xl font-bold text-gray-700">The Warehouse</h1>
                                <span class="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://the-warehouse-76732.web.app/"><spnan class="text-xs">Click Here</spnan></a></button>
                                <p class="mt-6 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div class="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img class="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/282804664_756362432206541_393756319981429784_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGxnARKqxknaLPDfAteYYJfc2tYW83py0xza1hbzenLTG_ZZt6qeDcMKiHOIu_SkkdEIwRKzXcZwHPEBQfJMp6k&_nc_ohc=VFTOwFQfH60AX92Cx3o&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVIkex7FsU5H8JJn-Ddc4Ssmv3XkoHJc9x2uS7yCZ1L8hg&oe=62B30E92" alt="" />
                            </div>
                            <div>
                                <h1 class="my-6 text-2xl font-bold text-gray-700">To Do App</h1>
                                <span class="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://todo-app-f3cd8.web.app/"><spnan class="text-xs">Click Here</spnan></a></button>
                                <p class="mt-6 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div class="md:grid grid-cols-2 gap-6 mb-10 border border-gray-500 p-2 rounded">
                            <div>
                                <img class="md:h-full object-cover" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.15752-9/282298443_1037613030449190_2692265283542797939_n.png?stp=dst-png_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF5CaZF5QZZF-NThdkRsYLT_VXsPodfcqn9Vew-h19yqXzrbjGlI24n8ZHGuN41N5jxCV-qjQcCb9zsaRfejrrq&_nc_ohc=BY0FPHAutqsAX81w10C&tn=hUqbf-Wix04AAe2O&_nc_ht=scontent.fzyl1-1.fna&oh=03_AVI9X4EsE-eWLSvz_vGffnDAs3r3e4YIQK6I43ggWMJxcg&oe=62B4D89D" alt="" />
                            </div>
                            <div>
                                <h1 class="my-6 text-2xl font-bold text-gray-700">Jody Michael Associates</h1>
                                <span class="text-lg mr-4 py-1 px-4 rounded bg-gray-800 text-white">For Live Site :</span>
                                <button className='btn rounded-full btn-sm font-xm bg-secondary text-black'><a href="https://jody-michael.web.app/"><spnan class="text-xs">Click Here</spnan></a></button>
                                <p class="mt-6 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white">
                <div class="flex mt-20 px-10 items-center justify-around max-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 textgray-800e w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </div>
                <p class="text-center my-10 text-lg">Copyright ©2020 All rights reserved</p>
            </footer>
        </div>
    );
};

export default Portfolio;