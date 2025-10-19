import './NewPost.css';
import {useForm} from 'react-hook-form';
import InputComponent from '../../components/InputComponent.jsx';
import readTime from '../../helpers/readTime.js';
import countWords from '../../helpers/countWords.js';
import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function NewPost() {
    const [newPost, setNewPost] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm();
    const contentValue = watch('content') || '';
    const wordCount = countWords(contentValue);
    const estimatedReadTime = readTime(wordCount);

    async function handleFormSubmit(data) {
        toggleLoading(true);
        try {
            toggleError(false);
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                {
                "title": data.title,
                "subtitle": data.subtitle,
                "content": data.content,
                "created": new Date().toISOString(),
                "author": data.author,
                "readTime": estimatedReadTime,
                "comments": 0,
                "shares": 0
            }, {
                    headers: {
                        'novi-education-project-id': '07470393-2b91-4dbf-92b8-976e6532490b',
                        'Content-Type': 'application/json',
                    },
                }
            )
            console.log(response.data);
            setNewPost(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    function handleNewPostAgain() {
        setNewPost(null);
        reset();
    }

    if (newPost) return <section className='success-message'>
        <h1>De blogpost is succesvol toegevoegd.</h1>
        <p>Je kunt deze <Link to={`/posts/${newPost.id}`} className='blog-links'>hier</Link> bekijken.</p>
        <button type='button' className='submit-button' onClick={handleNewPostAgain}>Nog een post toevoegen</button>
    </section>

    return (
        <section className='new-post'>
        <h1>Post toevoegen</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)} className='add-blog-post-form'>

                <InputComponent
                    element='input'
                    inputType='text'
                    inputName='title'
                    inputId='title-field'
                    inputLabel='Titel'
                    validationRules={{
                        required: {
                            value: true,
                            message: '*Titel is verplicht'
                        }
                    }}
                    register={register}
                    errors={errors}
                    className='text-line'
                />

                <InputComponent
                    element='input'
                    inputType='text'
                    inputName='subtitle'
                    inputId='subtitle-field'
                    inputLabel='Subtitel'
                    validationRules={{
                        required: {
                            value: true,
                            message: '*Subtitel is verplicht'
                        }
                    }}
                    register={register}
                    errors={errors}
                    className='text-line'
                />

                <InputComponent
                    element='input'
                    inputType='text'
                    inputName='author'
                    inputId='author-field'
                    inputLabel='Naam en achternaam'
                    validationRules={{
                        required: {
                            value: true,
                            message: '*Volledige naam is verplicht'
                        },
                        validate: (value) => String(value).includes(' ') || '*Geef een voornaam en achternaam door',
                    }}
                    register={register}
                    errors={errors}
                    className='text-line'
                />

                <InputComponent
                    element='textarea'
                    inputType='text'
                    inputName='content'
                    inputId='content-field'
                    inputLabel='Bericht'
                    validationRules={{
                        required: {
                            value: true,
                            message: '*Tekst is verplicht'
                        },
                        minLength: {
                            value: 300,
                            message: '*Tekst moet minimaal 300 karakters bevatten'
                        },
                        maxLength: {
                            value: 2000,
                            message: '*Tekst mag maximaal 2000 karakters bevatten'
                        }
                    }}
                    register={register}
                    errors={errors}
                    rows={10}
                    className='text-area-box'
                />

                <button type='submit' className='submit-button' disabled={loading===true}>
                    Toevoegen
                </button>

                {error && <p className='error-message'>Er is helaas iets misgegaan bij het verzenden. Probeer het opnieuw.</p>}
            </form>
        </section>
    )
}

export default NewPost;