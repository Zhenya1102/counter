import React from 'react';

type LabelPropsType = {
    htmlFor: string
    name: string
}

export const Label = (props: LabelPropsType) => {
    return (
        <label htmlFor={props.htmlFor}>{props.name}</label>
    );
};
