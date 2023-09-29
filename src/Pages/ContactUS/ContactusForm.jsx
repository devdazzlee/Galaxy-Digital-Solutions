import React from 'react'

const ContactusForm = () => {
  return (
    <>
<div class="relative flex items-center justify-center min-h-screen sm:items-center sm:pt-0">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-6 mr-2 sm:rounded-lg shadow-lg">
                    <h1  style={{ color: "#F170B8" }} class="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Get in Touch
                    </h1>
                    <p class="text-normal text-lg sm:text-2xl font-medium text-white dark:text-gray-400 mt-2">
                        Fill in the form to start a conversation
                    </p>

                    <div class="flex items-center mt-8 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            Gulshan Iqbal 13 A Karachi
                        </div>
                    </div>

                    <div class="flex items-center mt-4 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            +92 327 8227842
                        </div>
                    </div>

                    <div class="flex items-center mt-2 text-white dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            GalaxyDigital@gmail.com
                        </div>
                    </div>
                </div>

                <form class="p-6 flex flex-col justify-center sm:rounded-lg shadow-lg">
                    <h1 style={{ color: "#F170B8" }} class="text-4xl sm:text-5xl font-extrabold tracking-tight">Send Us a Message</h1>
                    <div class="flex flex-col mt-4">
                        <label for="name" class="text-sm font-semibold text-white">Your Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" class="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <div class="flex flex-col mt-4">
                        <label for="email" class="text-sm font-semibold text-white">Your Email</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" class="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <div class="flex flex-col mt-4">
                        <label for="tel" class="text-sm font-semibold text-white">Subject</label>
                        <input type="text" name="tel" id="tel" placeholder="Regarding Your Inquiry" class="w-full mt-2 py-3 px-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <div class="flex flex-col mt-4">
                        <label for="message" class="text-sm font-semibold text-white">Message</label>
                        <textarea id="message" rows="4" class="block p-2.5 mt-2 text-sm text-gray-900 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-400 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" style={{ "background": "linear-gradient(20deg, #5A2E7F, #CA669D, #E499C2)" }} className='font-serif my-4 text-center px-12 sm:px-8 py-3 font-bold rounded text-white'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</div> 




    </>
  )
}

export default ContactusForm