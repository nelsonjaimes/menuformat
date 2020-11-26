import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function Editor(){
     const [value, setValue] = useState("")
     const handleOnChange = (e,editor) => {
        const data = editor.getData()
         console.log(data)
         setValue(data)
     }
  return (
      <div>
        <div>
            <h1>Menu formato</h1>
            <CKEditor
                editor = {ClassicEditor}
                onChange = {handleOnChange}
            />
        </div>
        <div>{ReactHtmlParser(value) }</div>
      </div>
  )
}

export default Editor;