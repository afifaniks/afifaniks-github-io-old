import { Remarkable } from "remarkable";

export default function processMarkdown(text) {
    const md = new Remarkable("full");
    return md.render(text);
}
