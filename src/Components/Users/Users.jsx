import React from 'react'
import UsersArray from './UsersArray'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';


function Users() {
  return (
    <div id='testimonial'>
        <div className='bg-secondary py-11' >
        <div className='mx-24 sm:mx-3'>
        <h1 className='pt-10 uppercase text-center text-5xl font-light text-primary sm:text-3xl'> happy <b className=' text-primary'>users</b> </h1>
        <hr className=' border-primary mt-6 mb-7 mx-auto max-w-[50px] text-center border-y-2'/>
    </div>
        <p className='text-center text-primary sm:px-2'> What our Users speak about our app. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ullamco. </p>

        <div className='px-24 pt-10 grid grid-cols-3 space-x-10 sm:grid-cols-1 sm:space-x-0 sm:p-5'>
            {UsersArray.map(Person => (
                <div className='sm:mt-5 bg-substitute px-8 py-4 rounded hover:scale-105 transform duration-300' key={Person.id}> 
                    <div className='flex flex-col items-center space-x-2 mt-5'>
                        <img src={Person.image} alt='' className='rounded-full h-[85px] w-[85px]'/>
                        <h1 className=' text-secondary'> {Person.name} </h1>
                        <div className='flex text-yellow-400'>
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                        </div>
                    </div>
                    <p className='text-secondary text-center'> {Person.text} </p>
                   </div>
            ))}
        </div>

    </div>
    </div>
  )
}

export default Users