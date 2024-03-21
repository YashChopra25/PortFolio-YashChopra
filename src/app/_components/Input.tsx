import React, { useId } from 'react'
interface TypeInput {
    typeOfInput?: string;
    classname?: string;
    usedFor: string,
    [key: string]: any;

}
const Input = React.forwardRef(function ({
    typeOfInput = "text",
    classname = "",
    usedFor,
    ...props
}: TypeInput, ref: React.ForwardedRef<HTMLInputElement>) {
    const id = useId();
    return (
        <input type={typeOfInput} name={usedFor} id={id} className={`bg-[#434275] px-5 py-2 rounded-md focus:outline-[#5250a5] outline-none border-none  text-white ${classname}`} {...props} ref={ref} />
    )
})
Input.displayName = 'Input';
export default Input