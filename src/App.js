import React, { Component } from 'react';

import './css/App.css';
import BlogHomePageCard from './BlogCard';
import { isArrayEmpty as checkArrayIsEmpty } from './Utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBlogs: true,
            blogArr: [
                {
                    id: 1,
                    title: 'Blog Title 1',
                    description : "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
                    likeCount: 0
                },
                {
                    id: 2,
                    title: 'Blog Title 2',
                    description : "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
                    likeCount: 0
                },
                {
                    id: 3,
                    title: 'Blog Title 3',
                    description : "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
                    likeCount: 0
                }
            ] 
        }
        console.log("Inside Constuctor");
    }
    
    onLikeBtnClick = (pos) => {
        const updateBlogList = this.state.blogArr;  
        const updateBlogObj = updateBlogList[pos];
        updateBlogObj.likeCount = updateBlogObj.likeCount + 1;

        updateBlogList[pos] = updateBlogObj;
        this.setState({blogArr: updateBlogList})

    }

    

    onHideBtnClick = () => {
        //let updatedState = !this.state.showBlogs;
        this.setState((prevState) => {
            return {showBlogs: !prevState.showBlogs};
        });
    }

    shouldComponentUpdate() {
        console.log('Inside ShouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentWillUnmount() {
        console.log("Component Unmounting")
    }

    componentDidUpdate() {
        console.log('Inside ComponentDidUpdate');
    }

    render(){
        console.log("Reneder Called for AppJs");

        const blogCards = checkArrayIsEmpty(this.state.blogArr) ?  [] : this.state.blogArr.map((item, pos) => {
            //console.log(item);
    
            return (
                 <BlogHomePageCard title={item.title} description={item.description} onLikeBtnClick={() => this.onLikeBtnClick(pos)} likeBtn={item.likeCount} id={item.id} key={item.id}/> 
                
            )
        })
        return(
            <div className="App">
                <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? "Hide List" : "Show List"}</button>
                <br></br>
                {
                    this.state.showBlogs ? blogCards : null
                }
                
            </div>

        )
    }

}

export default App;