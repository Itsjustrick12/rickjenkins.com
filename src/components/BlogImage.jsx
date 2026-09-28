export function BlogImage({ src, alt }) {

    // When in this section, use the size as the class name for the image 
    return (
        <img
            src={src}
            alt={alt}
        />
    );
}