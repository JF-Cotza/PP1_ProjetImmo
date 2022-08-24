import React from 'react';
import './Banner.scss'

const source = (img)=>{
    console.log('source',img)
    return 'images/'+img.image
}

const Banner = (image,class_banner) => {
    console.log('banner',image, class_banner)
    return (
        <div className={`Banner Banner_${image.class_banner}` }>
            <img src={source(image)} alt={`fichier : +${image.image}`} />
        </div>
    );
};

export default Banner;