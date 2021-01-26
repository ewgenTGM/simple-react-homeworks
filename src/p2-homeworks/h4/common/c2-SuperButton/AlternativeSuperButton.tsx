import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type AlternativeSuperButtonPropsType = { color?: string, w?: number, h?: number } & DefaultButtonPropTypes;

function AlternativeSuperButton(props: AlternativeSuperButtonPropsType) {

    const {color, w, h, ...restParams} = props
    const style = {backgroundColor: color, width: w + 'px', height: h + 'px'};

    return (
        <button {...restParams} style={style}/>
    );
}

export default AlternativeSuperButton;
