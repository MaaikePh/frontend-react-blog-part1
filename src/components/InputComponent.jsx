import './InputComponent.css';

function InputComponent({element = 'input', inputType, inputName, inputId, inputLabel, validationRules, register, errors, rows, className}) {

    const Tag = element;

    return (
        <>
            <label htmlFor={inputId}>
                {inputLabel}
                <Tag
                id={inputId}
                type={element === 'input' ? inputType : undefined}
                {...register(inputName, validationRules)}
                rows={element === 'textarea' ? rows : undefined}
                className={className}
                />
            </label>
            {errors[inputName] && <p className='error-message'>{errors[inputName].message}</p>}
        </>
    )
}

export default InputComponent;