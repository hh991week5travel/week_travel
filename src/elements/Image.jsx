import styled from "styled-components";
import React from "react";

const Image = (props) => {
    // new : margin, display, paddingTop
    const {
        shape,
        src,
        size,
        display,
        margin,
        paddingTop,
        previewSize,
        border,
        _onClick,
        backgroundSize,
    } = props;

    const styles = {
        src: src,
        size: size,
        display: display, // new
        margin: margin, // new
        paddingTop: paddingTop, // new
        previewSize: previewSize,
        border: border,
        backgroundSize: backgroundSize,
    };

    if (shape === "circle") {
        return <ImageCircle onClick={_onClick} {...styles}></ImageCircle>;
    }

    if (shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles} />
            </AspectOutter>
        );
    }

    if (shape === "wide-image") {
        return <></>;
    }
    return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
    shape: "circle",
    src: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    size: 36,
    display: "", // new
    margin: "4px", // new
    paddingTop: "100%", // new
    previewSize: false,
    _onClick: () => { },
    backgroundSize: "contain",
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: ${(props) => props.paddingTop}; // new
    overflow: hidden;
    height: auto;
    background-image: url("${(props) => props.src}");
    //   backgroud-size: cover;
    background-position: center; // new
    // border-radius: 20px 20px 0px 0px; // new
    background-repeat: no-repeat;
    background-size: ${(props) => props.backgroundSize};
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px; // css 변수 선언 방식
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: ${(props) => props.margin}; // new
    background-position: center; // new
    background-repeat: no-repeat;
    display: ${(props) => props.display}; // new
`;

export default Image;
