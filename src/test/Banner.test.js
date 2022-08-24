import {source_img, text_alt_img, banner_class_list } from '../components/Banner/Banner.jsx'

it('Should be an image from public/image',()=>{
    const expectedState='images/a.png';
        
        expect(source_img('a.png')).toEqual(expectedState)  
})

it('should be an alternative text',()=>{
    const expectedState='fichier : a.png';
    //console.log(text_alt_img({image:'a.png'}))
        expect(text_alt_img('a.png')).toEqual(expectedState)
})

it('should return a class list - single test',()=>{
    //console.log('bcl',banner_class_list(['min']));
    const expectedState='Banner Banner_min';
    expect(banner_class_list(['min'])).toEqual(expectedState);
}) 

it('should return a class list - array test',()=>{
    //console.log('bcl',banner_class_list(['min','right']));
    const expectedState='Banner Banner_min Banner_right';
    expect(banner_class_list(['min','right'])).toEqual(expectedState);
}) 