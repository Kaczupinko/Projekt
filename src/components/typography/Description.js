import React from "react";
import styled from "styled-components";

const typography = {
    size: {
        small: "0.875rem",
        medium: "1rem",
        large: "1.25rem",
    },
    weight: {
        regular: "400",
        normal: "500",
        bold: "700",
    },
    lineHeight: {
        small: "1.25rem",
        medium: "1.5rem",
        large: "1.75rem",
    }
};

const DescriptionText = styled.p`
    font-size: ${props => props.size || "1em"};
    color: ${props => props.color || "#000"};
    font-family: "Roboto", sans-serif;
    font-weight: ${props => props.fontWeight || "normal"};
    text-align: ${props => props.textAlign || "left"};
    line-height: ${props => props.lineHeight || "normal"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
`;

class Description extends React.Component {

    render() {
        const { text, size, color, fontWeight, align, lineHeight, margin, padding } = this.props;
        return (
            <section>
                <DescriptionText
                    size={size} // 'small', 'medium', or 'large'
                    color={color}
                    fontWeight={fontWeight}  // 'regular', 'medium', or 'bold'
                    textAlign={align}
                    lineHeight={lineHeight} // 'small', 'medium', or 'large'
                    margin={margin}
                    padding={padding}
                >
                    {text}
                </DescriptionText>
            </section>
        )
    }
}

export default Description;