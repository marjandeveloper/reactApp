import React, { Component } from 'react';


import classes from './css/BlogCard.module.css';

class BlogCard extends Component {

    componentWillUnmount() {
        console.log('Unmounting Blog Cards');
    }

    render() {
        console.log('BlogCard render');
        return (
            <div className={classes.NewBlogCard}>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>

                <p>Like Count: <span className={classes.LikeCount}>{this.props.likeBtn}</span></p>
                <button onClick={this.props.onLikeBtnClick}>Like</button>
            </div>
        )
    }
    
}

/* class BlogCard extends Component {
    state = {
        likeCount: 0
    }

    onLikeBtnClick = () => {
        this.setState((prevState) => {
            return {likeCount: prevState.likeCount + 1}
        });
    }

    render() {
        dumpLogs(this.props)
        return (
            <div className={classes.NewBlogCard}>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>

                <p>Like Count: <span className={classes.LikeCount}>{this.state.likeCount}</span></p>
                <button onClick={this.onLikeBtnClick}>Like</button>
            </div>
        )
    }
} */



export default BlogCard;