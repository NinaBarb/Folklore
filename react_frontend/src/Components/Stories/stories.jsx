import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { default as StoryCard } from '../StoryCard/story_card';



function Stories({ stories, filter }) {


    useEffect(() => {
        import('./stories.css');

    }, [])

    return (
        <div className="postContainer">
            <div className="card-columns cardGrid">
                {stories.filter(story => story.StoryName.toLowerCase().includes(filter.toLowerCase())).map((story, index) => (
                    <StoryCard story={story} key={story.IDStory} />
                ))}
            </div>
        </div>
    );
}

export default Stories;