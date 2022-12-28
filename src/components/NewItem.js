import React, { Component } from 'react'

export class NewItem extends Component {
    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div className="my-5">
                <div className="card" style={{ width: '19rem' }}>
                    <img src={!imageUrl ? "https://www.kaspersky.com/content/en-global/images/repository/isc/2022/what-is-an-nft-2.jpg" : imageUrl} className="card-img-top" alt="..." height={'150px'} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem