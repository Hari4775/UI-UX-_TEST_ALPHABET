import React from 'react'

const Programes = () => {
  return (
    <div className='container-fluid  pragrams mb-5 mt-5'>
        <h2 className='text-white bg- info'>ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ</h2>
        <div className='row h-5'>
            
            <div className='col-3 item-1 ml-2'>
                <p className='text-white'>പുതിയ ടെക്നോളജി ഇന്റർവെൻഷൻ പ്രോഗ്രാം</p>
                <div className='mt-5 '>
                <p className='bg-danger mb-5 text-white'> വിശദാംശങ്ങൾ കാണുക  </p>
                </div>
            </div>

            <div className='col-3 item-2 ml-2 '>
                <p className='text-white'>ഗുരുകുലം</p>
                <div className='mt-5 '>
                <p className='bg-danger mb-5 text-white'> വിശദാംശങ്ങൾ കാണുക  </p>
                </div>
            </div>
            <div className='col-3 item-3 ml-2'>
                <p className='text-white'>ലേബർ ഡാറ്റ ബാങ്ക്</p>
                <div className='mt-5 '>
                <p className='bg-danger mb-5 text-white'> വിശദാംശങ്ങൾ കാണുക  </p>
                </div>
            </div>

            <div className='col-3 item-4 ml-2'>
                <p className='text-white'>വിപണി വികസന സംരംഭം</p>
                <div className='mt-5 '>
                <p className='bg-danger mb-5 text-white'> വിശദാംശങ്ങൾ കാണുക  </p>
                </div>
            </div>

        </div>
        <div className='row mt-5'>
            <div className='col-6 mt-4'>
              <p>News of the Month </p>
            </div>
            <div className='col-6 mt-4'>
                <p>Tenders</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programes
