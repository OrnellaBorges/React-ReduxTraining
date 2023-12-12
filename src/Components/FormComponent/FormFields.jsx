import React from "react";

const FormFields = ({ inputType, text, labelTitle }) => {
    return (
        <label>
            {labelTitle}
            <input type={inputType} placeholder={text} />
        </label>
    );
};

export default FormFields;
