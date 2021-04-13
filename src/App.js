import React, { Component } from 'react';

import './css/App.css';
import BlogHomePageCard from './BlogCard';
import { isArrayEmpty as checkArrayIsEmpty } from './Utils';

class App extends Component {

    state = {
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
    
    onLikeBtnClick = (pos) => {
        const updateBlogList = this.state.blogArr;  
        const updateBlogObj = updateBlogList[pos];
        updateBlogObj.likeCount = updateBlogObj.likeCount + 1;

        updateBlogList[pos] = updateBlogObj;
        this.setState({blogArr: updateBlogList})

        console.log(updateBlogObj);
    }

    

    onHideBtnClick = () => {
        //let updatedState = !this.state.showBlogs;
        this.setState((prevState) => {
            return {showBlogs: !prevState.showBlogs};
        });

        console.log(!this.state.showBlogs)
    }

    render(){
        console.log("Reneder Called");

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