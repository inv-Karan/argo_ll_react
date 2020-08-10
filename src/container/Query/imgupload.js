import React, { Component } from 'react';
import axios from 'axios';

class ImgUpload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedFile: null,
            imagePreviewURL: "",
            imagePreview: null,
            details: ""
        };
    };

    onHandleSubmit = (e) => {
        console.log('handle uploading', this.state.selectedFile, this.state.details)
    };

    fileSelected = (e) => {
        this.setState({
            selectedFile: e.target.files
        })
    };

    fileUpload = () => {
        debugger
        let fd = new FormData();
        fd.append('image', this.state.selectedFile);
        fd.append('name', 'sample');

        axios.post('http://logicalloop.com/farmeasy/api/User/query/new', 
        {fd} 
        )
            .then(
                res => {
                    debugger
                    console.log(res.data);
                }
            )
            .catch(
                error => {
                    debugger
                    console.log(error);
                }
            )
    };

    onHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        let { imagePreviewURL, imagePreview, details } = this.state;
        if (imagePreviewURL) {
            imagePreview = (<img src={imagePreviewURL} />);
        }
        else {
            imagePreview = (<div className="previewText">
                Please select an image for Preview
            </div>)
        };
        return (
            <div className="previewComponent">
                <form onSubmit={this.onHandleSubmit}>
                    <input className="fileInput"
                        // style={{display: "none"}} 
                        type="file" multiple name='selectedFile'
                        onChange={this.fileSelected} />
                    {/* ref={fileInput => this.fileInput = fileInput} */}
                    {/* <tr>
                        <button
                            onClick={() => this.fileInput.click()}>
                            Pick File
                </button>
                    </tr> */}
                    <tr>
                        <button className="submitButton"
                            type="submit"
                            onClick={this.fileUpload}>
                            Upload
                </button>
                    </tr>
                    <input className="textfield" type="text" name='details' value={details} onChange={this.onHandleChange}
                        placeholder="Description of selected image*" />
                </form>
                <div className="imagePreview">
                    {imagePreview}
                </div>
            </div>
        )
    };
};

export default ImgUpload;
