import { useEffect } from "react";
import { default as AddNewCommentForm } from '../AddNewCommentForm/add_new_comment_form';
import { default as Comment } from '../Comment/comment';



function Comments({ idStory }) {

    useEffect(() => {
        import('./comments.css');
    })

    return (
        <section className='mt-5 comments' id={idStory}>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <AddNewCommentForm idStory={idStory} />
                        <hr />
                        <p>Comments</p>
                        <Comment />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;