export function BlogImage({ src, alt }) {

    // When in this section, use the size as the class name for the image 
    const parameters = alt.split("|").map(parameter => parameter.trim());

    // First element is type of image, second is the actual alt text
    const type = parameters[0];
    const caption = parameters[1];
    const altText = parameters[2];
    // Get the subtype of the image
    let pic = <img src={src} alt={altText}/>

    return (
        // Figure allows browser to know whats up
        <figure>
            {/* Render the picture within the figure */}
            <div className="blog-image-container">
                <div className={"blog-image-" + type}>
                    {pic}
                    <div className="blog-image-caption">
                        <figcaption>{caption}</figcaption>
                    </div>
                </div>
            </div>
        </figure>
    );
}