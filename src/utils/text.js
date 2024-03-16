export const toPascalCase = (str) => {
    // Split the string by underscores (_) or hyphens (-), and then join the words with a space
    const words = str.split(/[_-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    // Capitalize the first letter of the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    // Join the words together without spaces
    return words.join(' ');
}
