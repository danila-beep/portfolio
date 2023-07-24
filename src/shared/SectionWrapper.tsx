import styled from "styled-components";

type SectionProps = {
  invertedColor?: boolean
}

export const SectionWrapper = styled.section<SectionProps>`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => {
    if (props.invertedColor) {
      return "var(--second-bg-color)"
    } else return undefined
  }};
`;
