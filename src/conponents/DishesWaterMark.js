import React from 'react'

const DishesWaterMark = () => {
    const dishes = [
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f'
        },
        {
            url : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce'
        }
    ]
  return (
    <div className='flex justify-around mt-12'>
       <div>
       <div className='flex justify-around text-3xl font-bold text-gray-500 border-b-2 border-gray-500 pb-2 '>Popular Cusines</div>
        <div className='flex '>
        {
            dishes.map((img , index)=>(
                <img className='w-[100px]' key={index} src={img.url}/>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default DishesWaterMark