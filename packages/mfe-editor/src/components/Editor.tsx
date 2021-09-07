import { useMemo, useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";

import { Toolbar } from "./Toolbar";

export const Editor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = useMemo(
    () => [
      {
        type: "paragraph",
        children: [
          {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
      },
    ],
    []
  );

  const [value] = useState(initialValue);

  const onChange = () => {};

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <div>
        <Toolbar />
        <h1 className="text-4xl mb-4 mt-4 px-4">Article Title</h1>
        <Editable className="p-4" placeholder="Enter your text here" />
      </div>
    </Slate>
  );
};
