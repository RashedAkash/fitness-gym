import React from 'react';

const GalleryImg = ({ item }) => {
  console.log(item);
  return (
    <div >
      <img src={item?.img} alt="" />
    </div>
  );
};

export default GalleryImg;