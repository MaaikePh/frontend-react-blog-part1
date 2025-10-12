import './NewPost.css';
import {useForm} from 'react-hook-form';
import InputComponent from '../../components/InputComponent.jsx';
import readTime from '../../helpers/readTime.js';
import countWords from '../../helpers/countWords.js';
import {useNavigate} from 'react-router-dom';

function NewPost() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const contentValue = watch('content') || '';
    const wordCount = countWords(contentValue);
    const estimatedReadTime = readTime(wordCount);

    function handleFormSubmit(data) {
        data.shares = 0
        data.comments = 0
        const newDate = new Date();
        data.created = newDate.toISOString();
        data.readTime = estimatedReadTime;
        console.log(data);
        navigate('/overview');
    }

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

                <button type='submit' className='submit-button'>
                    Toevoegen
                </button>
            </form>
        </section>
    )
}

export default NewPost;