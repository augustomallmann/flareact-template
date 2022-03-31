import SyntaxHighlighter from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeHighlighterProps = {
    children: React.ReactNode & React.ReactNode[];
};

export const CodeHighlighter = ({
    children,
    ...props
}: CodeHighlighterProps) => {
    return (
        <SyntaxHighlighter language="javascript" style={okaidia} {...props}>
            {children}
        </SyntaxHighlighter>
    );
};
