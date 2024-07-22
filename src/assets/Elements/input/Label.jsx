const Label = (props) => {
    const { htmlFor, text } = props;
    return (
        <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-3">
            {text}
        </label>
    )
}

export default Label;