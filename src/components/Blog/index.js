import React, { Component } from "react";
import test from "../../assets/blog/posts/test";
import processMarkdown from "../../utils/mdProcessor";

class BlogPage extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML= {{ __html: processMarkdown(test.body) }}></div>
        );
    }
}

export default BlogPage;
