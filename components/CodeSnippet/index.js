import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";
import { Container, Titlebar } from "./CodeSnippet.sc";

const CodeSnippet = ({ code, language }) => {
  const [copyText, setCopyText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);

    setCopyText("✅️ Copied");
  };

  return (
    <Container>
      <Titlebar>
        <div className="titlebar-actions">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="copy-to-clipboard">
          <a href="#!" onClick={copyToClipboard}>
            {copyText}
          </a>
        </div>
      </Titlebar>
      <SyntaxHighlighter
        language={language}
        style={synthwave84}
        customStyle={{
          margin: "2em 0",
          fontFamily: "Operator Mono, sans-serif",
          width: "100%",
          fontSize: "1em",
          margin: "auto",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Container>
  );
};

export default CodeSnippet;
