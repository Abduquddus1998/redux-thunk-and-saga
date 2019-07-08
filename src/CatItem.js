import React from 'react'
import Image from './proxy/Image'

const CatItem = (props) =>{

    return (
        <div>
            <ul>
                <li className="cat-item">
                    <div>
                        <Image {...props}/>
                    </div>
                </li>
            </ul>
        </div>


    )
}

export default CatItem