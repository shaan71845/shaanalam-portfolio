import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import monokaiSublime from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("shell", bash);

const CodeSnippet = ({ code, language }) => {
  return (
    <div className="rounded overflow-hidden mb-8">
      <div className="flex items-center px-4 py-2 bg-dark-light">
        {/* <div className="flex-grow font-mono text-base">{fileName}</div> */}
      </div>
      <div className="">
        <SyntaxHighlighter
          language={language}
          style={monokaiSublime}
          showLineNumbers
          wrapLines
          customStyle={{}}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default CodeSnippet;
