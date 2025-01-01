

const Heading = ({heading,subheading}) => {
    return (
        <div className="text-center py-2">
            <p className="text-yellow-600">{subheading}</p>
            <h2 className="text-4xl border-y-4 py-2">{heading}</h2>
        </div>
    );
};

export default Heading;