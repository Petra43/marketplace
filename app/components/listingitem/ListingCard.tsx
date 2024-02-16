import React from 'react';
import Image from 'next/image';
import babyknitted from '/public/babyknitted.jpg';

const ListingCard: React.FC<{}> = () => {
    return (
    
<main className="grid">
  <article>
    <Image src={babyknitted} width= {135} height={135} alt='knitted-baby-beanie' className="listing-img" />
    <div className="card">
    <div className="text">
      <h1>Product Name</h1>
      <p>Description of product 2 lines blah blah blah blahblah blahblah blah.</p>
      <button>ADD TO CART</button>
      </div>
      
    </div>
      </article>
    </main>
    );
  };
  export default ListingCard