import React, { Component } from 'react'
import CatItem from './CatItem'

class CatList extends Component {
    render() {
        const { cats } = this.props
        return (
            <ul className="cat-list">
                <li>
                    <CatItem
                    key={cats.id}
                    src={cats.url}
                    className="cat-item"
                    />
                </li>
            </ul>
        )
    }
}
export default CatList;

/*
*  cats.map( (cat, index) =>{
                        return <CatItem key={cat.id + index}
                                        src={cat.url}
                                        className="cat-item"/>
                    })
*
* */
