export function BlogImage({ src, alt }) {

    // When in this section, use the size as the class name for the image 
    const parameters = alt.split("|").map(parameter => parameter.trim());

    // First element is type of image, second is the actual alt text
    const type = parameters[0];
    const caption = parameters[1];
    
    return (
        // Figure allows browser to know whats up
        <figure>
            <img src={src} alt={caption} className={type}/>
            <figcaption>{caption}</figcaption>
        </figure>
    );
}