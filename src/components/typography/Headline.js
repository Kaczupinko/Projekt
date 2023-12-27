import React, { Children } from "react";
import styled from "styled-components";

const HeadlineContainer = styled.section`
    text-align: center;
    padding: 20px;
    background-color: #f4f4f4;
`;

const HeadlineText = styled.h1`
    font-size: ${props => props.size || '2rem'}; // Default font size is 2rem
    color: ${props => props.color || '#333'}; // Default color is a dark grey
    font-weight: ${props => props.weight || 'bold'}; // Default weight is bold
    margin: ${props => props.margin || '0'}; // Default margin
    padding: ${props => props.padding || '0'}; // Default padding
    font-family: 'Roboto', sans-serif;
`;

class Headline extends React.Component {
    render() {
        const { size, color, weight, margin, padding, text } = this.props;

        return (
            <HeadlineContainer>
                <HeadlineText
                    size={size}
                    color={color}
                    weight={weight}
                    margin={margin}
                    padding={padding}
                >
                    {text}
                </HeadlineText>
            </HeadlineContainer>
        );
    }
}

export default Headline;