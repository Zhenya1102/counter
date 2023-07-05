import React from 'react';



type TitleProps = {
    title:string
    className: string
}

export const Title = (props: TitleProps) => {
    return (
        <div className={props.className}>{props.title}</div>
    );
};

