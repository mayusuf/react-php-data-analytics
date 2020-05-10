import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

const API_BASE = "http://localhost:8012/react_php_form.php"

function submitForm(contentType, data, setResponse) {
    axios({
        url: `${API_BASE}`,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': contentType
        }
    }).then((response) => {
        setResponse(response.data);
    }).catch((error) => {
        setResponse("error");
    })
}

function Home() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");

    function uploadWithFormData(){
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("desc", desc);

        submitForm("multipart/form-data", formData, (msg) => console.log(msg));
    }

    async function uploadWithJSON(){
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        const data = {
            title: title,
            file: await toBase64(file),
            desc: desc
        }

        submitForm("application/json", data, (msg) => console.log(msg));
    }

    return (
        <div className="App">
            <h2>Upload File</h2>
            <form>
                <label>File Title</label>

                    <input type="text" vaue={title} 
                            onChange={(e) => { setTitle(e.target.value )}} 
                            placeholder="title to your upload" />
                

                <label>File(excel file)</label>
                    <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                    
                <input type="button" value="Upload" onClick={uploadWithJSON}/>
            </form>
        </div>
    );
}

export default Home;