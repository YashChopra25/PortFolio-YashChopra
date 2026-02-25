import React, { useId } from 'react'

interface TypeInput {
    typeOfInput?: string;
    classname?: string;
    usedFor: string;
    [key: string]: any;
}

const Input = React.forwardRef<HTMLInputElement, TypeInput>(function ({
    typeOfInput = "text",
    classname = "",
    usedFor,
    ...props
}, ref) {
    const id = useId();
    return (
        <input
            type={typeOfInput}
            name={usedFor}
            id={id}
            className={`w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${classname}`}
            {...props}
            ref={ref}
        />
    )
})

Input.displayName = 'Input';
export default Input