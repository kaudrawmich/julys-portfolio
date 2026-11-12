import './Button.css'

export function Button({children, variant="filled", shape="rounded", onClick, href, download, target, type="button", disabled="false", className="", ariaLabel}) {

    const buttonClass = ["custom-button", `custom-button--${variant}`, `custom-button--${shape}`, className,].filter(Boolean).join(' ')

    /* Renders a link for navigation or downloads */
    if (href) {
        return (
            <a href={href} 
               download={download} 
               target={target}
               rel={target === "_blank"
                    ? "noopener noreferrer"
                    : undefined}
               className={buttonClass}
               aria-label={ariaLabel}
               onClick={onClick}
            >
                {children}
            </a>
        )
    }
    return (
        <button 
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
        </button>
    )
}
