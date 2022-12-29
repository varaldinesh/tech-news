import React, { Component } from 'react'
import NewItem from './NewItem'
// import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }






    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `The Pune Time - ${this.capitalizeFirstL(this.props.category)}`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false })
    }

    capitalizeFirstL = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <><h2 className='text-center mt-2'>Top Headlines</h2>
                <InfiniteScroll dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((article) => {
                                return <div className="col-sm-4 d-flex justify-content-center">
                                    <NewItem imageUrl={article.urlToImage} title={article.title ? article.title.slice(0, 40) : ""} description={article.description ? article.description.slice(0, 80) : ""} url={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News