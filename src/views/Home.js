import React from 'react'
import NavigationBar from '../components/Navbar/Navbar'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const editorConfiguration = {
            toolbar: [ 'bold', 'italic', 'sourceEditing' ],
        };
        return(
            <div>
            <NavigationBar />
            <h2>Using the CKeditor 5 context feature in React</h2>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from the first editor working with the context!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor1 is ready to use!', editor );
                        } }
                        config={ editorConfiguration }
                    />
                    
        </div>
        )
    }
}

export default HomePage