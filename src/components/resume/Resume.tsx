import useResume from "./useResume";

type Props = {
    sectionId: string;
};

const Resume = ({ sectionId }: Props) => {
    const {} = useResume();

    return <div className="mt-52" id={sectionId}>Resume</div>;
};

export default Resume;
