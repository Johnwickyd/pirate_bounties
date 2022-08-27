import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, money, image } = props;
    return (
        <div className='tc bg-light-green dib br2 pa3 card ma2 grow bw2 shadow-5 ' id='card'>
            <h1 className='head f1'>WANTED</h1>
            <img className='pics' src={image} alt='pirates' />
            <div>
                <h2 className='f2 status fonted'>DEAD OR ALIVE</h2>
                <h2 className=' f2 fonted name'>{name}</h2>
                <p className='f3 money fonted'>{money}</p>
                <div class='lowersection'>
                 <p className='lorem'>Lorem ipsum dolor sit eligendi aspernatur beatae fugit quia, animi rerum vero deserunt odio accusamus architecto magnam consequuntur temporibus excepturi alias doloribus. Soluta, nam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae sunt beatae, voluptate tempore voluptatibus </p> 
                <h1 className='tr greenish f4'>MARINE</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;