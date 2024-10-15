const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

/**
 * Sanitizes the given markdown content by converting it to HTML, 
 * sanitizing the HTML, and then converting it back to markdown.
 *
 * @param {string} markdownContent - The markdown content to be sanitized.
 * @returns {string} - The sanitized markdown content.
 */
function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();
    const htmlContent = marked.parse(markdownContent);
    const sanitizedHtmlContent = sanitizeHtml(htmlContent, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });
    const sanitizedMarkdownContent = turndownService.turndown(sanitizedHtmlContent);
    return sanitizedMarkdownContent;
}

module.exports = sanitizeMarkdownContent;

