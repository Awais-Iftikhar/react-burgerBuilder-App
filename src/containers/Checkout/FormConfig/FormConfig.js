export const generateDropdown = (inputType, choices) => {
    return {
        inputType: inputType,
        elementConfig: {
            options: 
                choices.map(opt => {
                    return {
                        value: opt
                    }
                })    
        },
        valid: true
    } 
}
export const generateFields = (label , inputType , type , placeholder , value, isRequired, minLength,maxLength,isValid, istouched) => {
        return {
            label: label,
            inputType: inputType,
            elementConfig: {
                type: type,
                placeholder: placeholder,
            },
            value: value,
            validation: {
                required : isRequired,
                minLength: minLength,
                maxLength: maxLength,
            },
            valid: isValid,
            touched: istouched,
        }        
}