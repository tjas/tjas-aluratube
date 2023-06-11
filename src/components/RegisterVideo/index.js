import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

import { BsXLg } from 'react-icons/bs'; /* https://react-icons.github.io/react-icons */

// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            //console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = "https://oclprkxaerkjqodqqxub.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jbHBya3hhZXJranFvZHFxeHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MzMzMDAsImV4cCI6MTk4NDMwOTMwMH0._xNOZlmJIBu_RWg0ZgD7mQKyV2yUWK9hDLqrAle5BBo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${(url).toString().split("v=")[1]}/hqdefault.jpg`;
}

// function getVideoId(url) {
//     const videoId = url.split("v=")[1];
//     const ampersandPosition = videoId.indexOf("&");
//     if (ampersandPosition !== -1) {
//         return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
// }

// function getTitle(url) {
//    return () => fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
//             .then(res => res.json())
//             .then(data => data.title);
//     //console.log("response:", response);
//     //return response;
// }

export default function RegisterVideo() {
    const formCadastro = useForm({
        //initialValues: { titulo: "Frost punk", url: "https://www.youtube.com/watch?v=QsqatJxAUtk" }
        initialValues: { titulo: "", url: "", thumb: "", playlist: "default" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    //const [url, setUrl] = React.useState();
    const [found, setFound] = React.useState(false);
    const [image, setImage] = React.useState();
    const [title, setTitle] = React.useState();
    const [author, setAuthor] = React.useState();
    const [provider, setProvider] = React.useState();

    React.useEffect(() => {
        //console.log("testes");
        //setUrl(formCadastro.values.url);
        //setImage(getThumbnail(url));
        setImage(getThumbnail(formCadastro.values.url));
        // console.log(fetch(`https://noembed.com/embed?dataType=json&url=${formCadastro.values.url}`)
        //     .then(res => res.json())
        //     .then(data => data.title));
        //setTitle(() => getTitle(formCadastro.values.url));
        fetch(`https://noembed.com/embed?dataType=json&url=${formCadastro.values.url}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setAuthor(data.author_name);
                    setProvider(data.provider_name);
                });
                
                
                //setTitle(() => getTitle(formCadastro.values?.url));
    }, [formCadastro.values.url]);
            
    React.useEffect(() => {
        if (title) {
            setFound(true)
        } else setFound(false);
    }, [title]);

    /*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo 
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form
                        onSubmit={(evento) => {
                            evento.preventDefault();
                            console.log(formCadastro.values);

                            // Contrato entre o nosso Front e o BackEnd
                            supabase.from("video").insert({
                                title: title,
                                url: formCadastro.values.url,
                                thumb: getThumbnail(formCadastro.values.url),
                                playlist: (formCadastro.values.playlist).toString().toLowerCase(),
                            })
                            .then((oqueveio) => {
                                console.log(oqueveio);
                            })
                            .catch((err) => {
                                console.log(err);
                            })

                            setFormVisivel(false);
                            formCadastro.clearForm();
                    }}>
                        <div>
                            <div className="modal-header">
                                <div className="modal-title"><h3>Playlist Video</h3></div>
                                <div className="modal-close">
                                    <button type="button"
                                        onClick={() => setFormVisivel(false)}>
                                        <BsXLg />
                                    </button>
                                </div>
                            </div>
                            {/* <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            /> */}
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="Playlist"
                                name="playlist"
                                value={ formCadastro.values.playlist[0].toUpperCase() + formCadastro.values.playlist.substring(1).toLowerCase()}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Register
                            </button>
                            {found ? 
                                <div className="preview">
                                    <img className="thumb-preview" src={image} alt="thumb"/>
                                    <span className="title-preview">{title}</span>
                                    <span className="author-preview">{author}</span>
                                    {/* <span className="provider-preview">{provider}</span> */}
                                </div>
                            : false }
                        </div>
                    </form>
                )
                : false }
        </StyledRegisterVideo>
    )
}


// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> Formulário em si