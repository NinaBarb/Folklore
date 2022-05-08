import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
const Paragraph = React.lazy(() => import("../../Components/Paragraph/paragraph"))

export default function Canvas() {
    useEffect(() => {
        import("./canvas.css")
    }, [])

    const [paragraphs, setDynamicParagraphs] = React.useState(0);

    const callAjax = () => {

    }

    return (
        <section className="home">
            <div className="text">Canvas</div>
            <nav className="myMenu">
                <input type="checkbox" href="#" className="myMenu-open" name="myMenu-open" id="myMenu-open" />
                <label className="myMenu-open-button" htmlFor="myMenu-open">
                    <span className="lines line-1"></span>
                    <span className="lines line-2"></span>
                    <span className="lines line-3"></span>
                </label>

                <a href="#" className="myMenu-item purple" id="btnAdd" onClick={() => setDynamicParagraphs(paragraphs + 1)}><i className="fa fa-plus"></i></a>
                <a href="postCreator" className="myMenu-item blue"><i className="fa fa-backward"></i></a>
                <a href="#" className="myMenu-item green" id="btnCreate" onClick={callAjax}><i className="fa fa-upload"></i></a>
                <a href="#" className="myMenu-item red" id="btnDelete" onClick={() => setDynamicParagraphs(0)}><i className="fa fa-trash"></i></a>

            </nav>
            <div className="canvas">
                {/* {paragraphs ? (
                    <Suspense fallback={<div>Loading Component....</div>}>
                        <Paragraph />
                    </Suspense>
                ) : null} */}
                {[...Array(paragraphs).keys()].map
                    ((step) => {
                        return (
                            <Suspense key={step} fallback={<div>Loading Component....</div>}>
                                <Paragraph />
                            </Suspense>)
                    })
                }
            </div>

            <Helmet>
                <script src="storyCreator.js"></script>
            </Helmet>
        </section>
    );
}