import {Banner} from './Banner'

it('Should be an image from public/image',()=>{
    const expectedState=''

        expect(Banner('a.png','max')).toEqual(expectedState)
    
})