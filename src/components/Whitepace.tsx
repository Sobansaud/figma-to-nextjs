import React from 'react'
import Image from 'next/image'
function Whitepace() {
  return (
    <div>
      <section className='bg-blue-950 text-white'>
        <div className='text-center pt-32'>

        <h1 className='font-bold text-4xl'>Try Whitepace  <br />today</h1>
        <p className='pt-6'>Get started for free. <br />
        Add your whole team as your needs grow.</p>
        <button className='bg-blue-300 px-2 pt-2 pb-2 rounded-md mt-10'>Try taskey free</button>
        <h1 className='pt-10'>On a big team? Contact sales</h1>
        <Image className='m-auto mt-10 pb-10' src="/App-icon.png" alt='app-icon' width={170} height={170}/>
        </div>

      </section>
    </div>
  )
}

export default Whitepace