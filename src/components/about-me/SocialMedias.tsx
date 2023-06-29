import React from "react";
import { styled } from "styled-components";

type Props = {};

const SocialMedias = ({}: Props) => {
    return (
        <div className="mt-20">
            {[1, 2, 3, 4].map((items) => {
                return <div className="border border-sky-200"></div>;
            })}
        </div>
    );
};

export default SocialMedias;
