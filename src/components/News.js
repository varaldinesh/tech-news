import React, { Component } from 'react'
import NewItem from './NewItem'


export class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eead30d4db374e52b797a2546e7a8859&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        console.log(this.state.totalResults)

    }

    prevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
        })

    }

    nextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eead30d4db374e52b797a2546e7a8859&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

    }

    render() {
        return (
            <div className='m-5'>
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return <div className="col-sm-3 p-5 ">
                            <NewItem imageUrl={article.urlToImage} title={article.title ? article.title.slice(0, 40) : ""} description={article.description ? article.description.slice(0, 80) : ""} url={article.url} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}> &larr; Previous</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News