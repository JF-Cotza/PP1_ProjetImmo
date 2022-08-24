import React from 'react';
import './Banner.scss'

export function source_img(img){
        return 'images/'+img
    }    

export function text_alt_img(img){
    return `fichier : ${img}`
}

export function banner_class_list(class_parametre){
    let classToReturn='Banner';
    for (let i=0;i<class_parametre.length;i++){
        classToReturn+=' Banner_'+class_parametre[i];
    }
    /*
    console.log('param',class_parametre)
    return `Banner Banner_${class_parametre}`
    */
    return classToReturn;
}

//className={`${banner_class_list(props.class_banner)}`}

const Banner = (props) => {
    console.log('banner',props)
    let image=props.image
    let class_banner=props.class_banner
    console.log('image',class_banner)

    return (
        <div className={`${banner_class_list(class_banner)}`}>
            <img src={source_img(image)} alt={text_alt_img(image)} />
        </div>
    );
};

export default Banner;

