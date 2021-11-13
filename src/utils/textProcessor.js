export function urlFormatter(text) {
    return text && text.replace(
        /\[(.*?)\]\((https?:\/\/)?(.*?)\)/ig,
        "<a href=\"https://$3\">$1</a>"
    );
}

export default {
    urlFormatter
};
