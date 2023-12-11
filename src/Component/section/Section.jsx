

const Section = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12  mx-auto text-center my-12">
            <p className="text-orange-500">----{subheading}---</p>
            <p className="text-xl border-y-4 uppercase py-1">{heading}</p>
        </div>
    );
};

export default Section;