import React from 'react'

const Condunt = () => {
  return (
    <div className='container-fluid bgg-warning'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'></div>
            <div className='col-4'></div>

        </div>
        <div className='row'>
            <div className='col-5 mb-5'>
                <h2 className=' text-danger'> KADCO ലേക്ക് സ്വാഗതം</h2>

                <p>സംസ്ഥാനത്തെ കരകൗശല വിദഗ്ധരുടെ
                ലാണ് കേരള ആർട്ടിസാൻസ് ഡെവലപ്‌മെന്റ് കോർപ്പറേഷൻ (കാഡ്‌കോ) രൂപീകരിച്ചത് 
                 നിരവധി നന്നായി വിഭാവനം ചെയ്തതും ചിന്തനീയവുമായ പദ്ധതികളിലൂടെ </p>
            </div>
            <div className='col-2'>
                <div className=' row'>
                    <div className='col-2'>
                    <img src="https://www.keralaartisans.com/images/profile1.png"/>
                    </div>
                    <div className='col-4 ml-5'>
                        <p className='ml-5 image-1 '>ശ്രീ. പിണറായി വിജയൻ</p>
                    </div>
                </div>
                
                <div className='row mt-2'>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <img className= " ml-3"style={{width:"100px", height:"100px", marginLeft:"-44px"}} src="https://www.keralaartisans.com/images/minprofile.jpg"/>
                     </div>
                     <div className='col-9'>
                        <p className='image-2'>ശ്രീ. പിണറായി വിജയൻ</p>
                     </div>
                    </div>
                </div>
            </div>
            <div className='col-5'></div>
        </div>
      

  )
}

export default Condunt
