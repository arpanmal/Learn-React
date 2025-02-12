import React from 'react'

const Card = () => {
    
const data = [
    {images:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww', name:'Amazon', text:'Online shopping and cloud computing company.'},
    {images:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:'Flipkart', text:'Flipkart offers a diverse range of products with excellent delivery service'},
    {images:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:'myntra', text:'accessories, and lifestyle products with style'}
  ]



    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className="w-64 left-1/2 bg-zinc-300 rounded-md shadow-lg">
                <div className='w-full h-40 rounded-t-md overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww" alt="amazon" className='w-full h-full object-cover' />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Amazon</h2>
                    <p className="text-gray-700 text-base mb-4">
                        Online shopping and cloud computing company.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card