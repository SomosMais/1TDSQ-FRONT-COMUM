import React, { FC } from 'react';

type InputProps = {
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder = "Digite algo...",
    type = "text",
    value = "",
    onChange
}) => {
    return (
        <>
            <input
                type={type}
                className="w-[400px] h-[60px] px-5 mb-3 text-gray-700 bg-white border border-gray-300 rounded-full"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
export default Input;