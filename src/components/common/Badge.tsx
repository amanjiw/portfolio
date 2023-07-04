import React from "react";

type Props = {
    title: string;
    icon?: any;
};

function Badge({ title, icon }: Props) {
    return (
        <div className="bg-inherit border mb-3 w-fit py-1 px-3 rounded-3xl flex justify-center gap-2 items-center">
            <span>{icon}</span>
            <p className="">{title}</p>
        </div>
    );
}

export default Badge;
