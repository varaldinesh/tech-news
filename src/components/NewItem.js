import React, { Component } from 'react'

export class NewItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className="my-5">
                <div className="card" style={{ width: 'auto' }}>
                    <img src={!imageUrl ? "https://www.kaspersky.com/content/en-global/images/repository/isc/2022/what-is-an-nft-2.jpg" : imageUrl} className="card-img-top" alt="..." height={'150px'} />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '1' }}>
                            {source}</span></h5>
                        <p className="card-text">{!description ? " Subscribe to 'The Pune Times' for Fresh Latest News from India. Your own News App" : description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewItem