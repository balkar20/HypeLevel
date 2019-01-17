import React from 'react';
import {css} from "aphrodite";
import styles from "./styles/createNews";
import axios from "axios";


class CreateNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.filesOnChange = this.filesOnChange.bind(this);
        this.uploadForm = this.uploadForm.bind(this);
    }
    handleInputChange(sender) {
        let fieldName = sender.target.name;
        let value = sender.target.value;
        let state = this.state;
        this.setState({
            ...state,
            fields: {...state.fields, [fieldName]: value}
        });
    }
    
    filesOnChange(sender){
        let files = sender.target.files;
        let state = this.state;
        this.setState({
            ...state,
            files: files
        });
    }

    uploadForm(e) {
        e.preventDefault();
        let state = this.state;
        this.setState({
            ...state,
            formServiceResponse: 'Please wait'
        });
        if (!state.hasOwnProperty('files')) {
            this.setState({
                ...state,
                formServiceResponse: 'First select a file!'
            });
            return;
        }
        let form = new FormData();
        for (var index = 0; index < state.files.length; index++) {
            var element = state.files[index];
            form.append('file', element);
        }
        for (var key in state.fields) {
            if (state.fields.hasOwnProperty(key)) {
                var element = state.fields[key];
                form.append(key, element);
            }
        }
        axios.post('api/News/CreateNews', form)
            .then((result) => {
                let message = "Success!"
                if (!result.data.success) {
                    message = result.data.message;
                }
                this.setState({
                    ...state,
                    formServiceResponse: message
                });
            })
            .catch((ex) => {
                console.error(ex);
            });
    }

    render() {
        return (
        
        <form>
            <p>Response from server : {this.formServiceResponse}</p>
            <h2>Form</h2>
            <p><b>{this.state.formServiceResponse}</b></p>
            <input type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            <textarea
                cols={40}
                rows={10}
                name="data"
                value={this.state.data}
                onChange={this.handleInputChange} />
            <input type="file" onChange={this.filesOnChange} />
            <button type="text" onClick={this.uploadForm}>Создать пост</button>
        </form>
        )
    }
}

export default CreateNews;