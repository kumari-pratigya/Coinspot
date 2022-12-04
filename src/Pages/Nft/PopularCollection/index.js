import React from 'react'
import style from './PopularCollection.module.css'
const index = () => {
  return (
    <div className={style.section}>
      <div className='container'>
      <h2 className={`${style.heading} text-start`}>Popular Collections</h2>
        <div className='row'>
            <div className='col-lg-4'>
            <div className={`mx-auto ${style.cardCollection}`}>
            <a href="/nft/dennisrodmansbarbershop">
            <div className={style.cardCollectionImg} ></div>
            </a>
<div className={style.cardCollectionBody}>
<div className={style.title}>Dennis Rodman's Barbershop</div>
<div className={style.description}>
Dennis Rodman's Barbershop is the first official NFT collection from NBA Hall-of ...
</div>
<a href="/nft/dennisrodmansbarbershop" className="btn btn-outline-primary rounded-0  w-100 mt-3">View Collection</a>
</div>
            </div>
            </div>
            <div className='col-lg-4'>
            <div className={`mx-auto ${style.cardCollection}`}>
            <a href="/nft/dennisrodmansbarbershop">
            <div className={style.cardCollectionImg1} ></div>
            </a>
<div className={style.cardCollectionBody}>
<div className={style.title}>Hashmasks</div>
<div className={style.description}>
Inspired by the work of renowned artist Jean-Michel Basquiat, Hashmasks is a col ...
</div>
<a href="/nft/dennisrodmansbarbershop" className="btn btn-outline-primary rounded-0  w-100 mt-3">View Collection</a>
</div>
            </div>
            </div>
            <div className='col-lg-4'>
            <div className={`mx-auto ${style.cardCollection}`}>
            <a href="/nft/dennisrodmansbarbershop">
            <div className={style.cardCollectionImg2} ></div>
            </a>
<div className={style.cardCollectionBody}>
<div className={style.title}>The Doggies (Snoop Dogg)</div>
<div className={style.description}>

The Doggies is a collection of 10,000 metaverse-ready avatars, playable in The S ...

</div>
<a href="/nft/dennisrodmansbarbershop" className="btn btn-outline-primary rounded-0  w-100 mt-3">View Collection</a>
</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index
