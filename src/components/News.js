import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 4,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }






    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eead30d4db374e52b797a2546e7a8859&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        console.log(this.state.totalResults)

    }

    prevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country${this.props.country}&category=${this.props.category}&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            loading: false
        })

    }

    nextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    render() {
        return (
            <><h2 className='text-center mt-2'>Top Headlines</h2>
                <div className="container">
                    <div className="row">
                        {this.state.loading && <Spinner />}
                        {!this.state.loading && this.state.articles.map((article) => {
                            return <div className="col d-flex justify-content-center">
                                <NewItem imageUrl={article.urlToImage} title={article.title ? article.title.slice(0, 40) : ""} description={article.description ? article.description.slice(0, 80) : ""} url={article.url} />
                            </div>
                        })}

                        <div className="container d-flex justify-content-around">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}> &larr; Previous</button>
                            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                        </div>
                    </div>
                </div></>
        )
    }
}

export default News