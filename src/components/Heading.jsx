import TagLine from "./Tagline";

const Heading = ({ className, title, subtitle, text, tag, onClick }) => {
    // If onClick is not provided, it defaults to a no-op function
    const handleClick = onClick || (() => {});

    return (
        <div
            className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center cursor-pointer`}
            onClick={handleClick}
        >
            {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
            {title && <h2 className="h2">{title}</h2>}
            {subtitle && <h3 className="h3 subtitle">{subtitle}</h3>}
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
        </div>
    );
};

export default Heading;
