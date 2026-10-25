export function ParseMDFile(rawFile){
    // Get the frontmatter section
    if (!rawFile.startsWith("---")) return { metadata: {}, content: rawFile }
    const start = rawFile.indexOf("---");
    const end = rawFile.indexOf("---", start + 3);

    // From the first --- to the end of the --- and capture that content
    const frontmatter = rawFile.slice(start + 3, end);

    
    // Parse each line for the content we need to properly tag the page
    
    // Do the same for the actual content (go beyond the second --- set)
    const content = rawFile.slice(end+3);
    
    const metadata = {};
    // Break up the frontmatter to get each line by line parameter
    // Expect format key: value
    const lines = frontmatter.split("\n");
    //For each line in the meta data, seperate the key from the value
    lines.forEach(line => { 
        const [key, value] = line.split(":");
        // If empty line, ignore
        if (key && value) {
            //Trim removes the spaces off of the value after the colon
            metadata[key.trim()] = value.trim();
        }
    });

    return {
        metadata,
        content
    };
}