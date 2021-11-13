export function urlFormatter(text) {
    return text && text.replace(
        /\[(.*?)\]\(((https?:\/\/)?.*?)\)/ig,
        "<a href=\"https://$2\">$1</a>"
    );
}

export default {
    urlFormatter
};
