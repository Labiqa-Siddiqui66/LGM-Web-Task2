import React from 'react'
import propTypes from 'prop-types';
const Usercard = (props) => {
    let { title, id, imageurl, reposurl} = props;
    return (
        <div classNamw="my-4" >
            <div className={id? 'show-card':'hide-card'}>
                <div className={id? 'show-card-body': 'hide-card-body'}>
                    <div>
                        <img src={imageurl} className='card-img-top'  />
                        <h5 className={id? 'show':'hide'}>This is my github login id: {id}</h5>
                        <h5 className={title? 'showtitle': 'hidetitle'}>I am {title} & i am very sincere about my github account</h5>
                        <a href={reposurl} target="_blank" className={id? "ml-5 btn btn-sm btn-dark": "none"}>Read more</a>
                        
                    </div>
                </div>

            </div>

        </div>
    )

}
//


export default Usercard