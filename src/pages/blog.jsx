import { UnderConstruction } from "../components/UnderConstruction"
import React from 'react'
import {createRoot} from 'react-dom/client'
import BlogPost from "../components/BlogPost"

export function Blog(){
    return (
        <div className="page-container">
            <div className="center-everything">
                <h1>Blog Page</h1>
                <p>This page is still very much under construction. I haven't spent any time working on improving the visuals. Take a look at how I encorpated markdown files into formatted posts in react. I'm pretty impressed with the package that supports this, check out <a href="https://remarkjs.github.io/react-markdown/">this github page</a> for more details on how I did this.</p>
            </div>
            
            <div align="left">
                <BlogPost file="FirstPost"></BlogPost>
                <BlogPost file="Post2"></BlogPost>
            </div>
            <div className="center-everything">
                <UnderConstruction/>
            </div>
        </div>
    )
}