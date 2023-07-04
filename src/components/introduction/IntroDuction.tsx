import React from "react";
import Badge from "../common/Badge";
import { styled } from "styled-components";
import Typewriter from "../common/Typewriter";
import Counter from "../common/Counter";

type Props = {
    sectionId: string;
};

const IntroDuction = ({ sectionId }: Props) => {
    return (
        <Container
            className="flex flex-col items-center lg:items-start "
            id={sectionId}
        >
            <Badge
                title="معرفی"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-4 h-4  stroke-slate-50 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
                            .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 
                            1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                }
            />

            <h1 className="intro text-center   lg:text-right ">
                <Typewriter
                    delay={50}
                    // infinte
                    resetTimeouteDelay={1000}
                    text="سلام! من آمانجم، برنامه نویس و طراح وب."
                />
            </h1>

            <p className="py-10  w-3/5 text-gray-400 ">
                من چیزهای ساده و زیبا را طراحی و کدنویسی می‌کنم و کاری را که
                انجام میدهم دوست دارم. به همین سادگی :){" "}
            </p>
            <div className="mt-24 flex gap-32 data">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sky-200">
                        <Counter count={3} delay={100} />+
                    </p>
                    <p className="text-base text-gray-400 w-2/3">
                        سال تجربه تخصصی
                    </p>
                </div>
                <div className="">
                    <p className="text-sky-200">
                        {<Counter count={10} delay={50} />}+
                    </p>
                    <p className="text-base text-gray-400 w-3/3">پروژه موفق</p>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    //

    .intro {
        font-size: 3.9vw;
        min-height: 230px;
        width: 80%;
    }
    .data {
        font-size: 4vw;
    }
`;

export default IntroDuction;
