const Button = ({ title, type, className, onClick=undefined, disabled=false }) => {
    return (
        <button className={`btn btn-lg ${className}`} type={type} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
}

export default Button;