import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownEditor } from 'react-markdown-editor';

const MarkdownEditorComponent = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
  };

  return (
    <div>
      <MarkdownEditor
        value={markdown}
        onChange={handleMarkdownChange}
        render={(editorProps) => (
          <textarea
            {...editorProps}
            placeholder="Write your Markdown content here..."
          />
        )}
      />
      <div className="markdown-preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
