import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";

type HeadingProps = {
    centered?: boolean
}

const Heading: FC<PropsWithChildren<HeadingProps>> = (props) => {

    const HeadingStyled = styled.h2`
      font-size: 5.3rem;
      text-align: ${props.centered ? "center" : "left"};
    `

    return (
        <HeadingStyled>
            {props.children}
        </HeadingStyled>
    );
};

export default Heading;