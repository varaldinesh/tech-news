import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div> let {title, description, imageUrl, url, author, date, source} = this.props;
                <div>
                    <div className="slider">
                        <div className="slide">
                            <figure>
                                <img src={!imageUrl ? "https://www.kaspersky.com/content/en-global/images/repository/isc/2022/what-is-an-nft-2.jpg" : imageUrl} alt="" />
                            </figure>
                            <div className="text">
                                <div className="category">{source}</div>
                                <h1 className="title">{title}</h1>
                                <p className="summary">{description} </p>
                            </div>
                        </div>
                        <div className="slide">
                            <figure>
                                <img src="https://loremflickr.com/860/640?random=2" alt="" />
                            </figure>
                            <div className="text">
                                <div className="category">Lorem ipsum 2</div>
                                <h1 className="title">Curabitur id dapibus velit.</h1>
                                <p className="summary">Nunc commodo vestibulum elit in pretium. Aenean in ex
                                    gravida,
                                    imperdiet lacus sed, condimentum tellus. Donec ullamcorper congue auctor. </p>
                            </div>

                        </div>
                        <div className="slide">
                            <figure>
                                <img src="https://loremflickr.com/860/640?random=3" alt="" />
                            </figure>
                            <div className="text">
                                <div className="category">Lorem ipsum 3</div>
                                <h1 className="title">Curabitur id dapibus velit.</h1>
                                <p className="summary">Nunc commodo vestibulum elit in pretium. Aenean in ex
                                    gravida,
                                    imperdiet lacus sed, condimentum tellus. Donec ullamcorper congue auctor. </p>
                            </div>

                        </div>
                        <div className="slide">
                            <figure>
                                <img src="https://loremflickr.com/860/640?random=4" alt="" />
                            </figure>
                            <div className="text">
                                <div className="category">Lorem ipsum 4</div>
                                <h1 className="title">Curabitur id dapibus velit.</h1>
                                <p className="summary">Nunc commodo vestibulum elit in pretium. Aenean in ex
                                    gravida,
                                    imperdiet lacus sed, condimentum tellus. Donec ullamcorper congue auctor. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
