import React, {FC} from "react";
import styled from "styled-components";

type NavLinkProps = {
    title: string
    href?: string
    isActive?: boolean
    activeSetter?: () => void
    size?: string
    onClick?: () => void
}

const NavLink: FC<NavLinkProps> = (props) => {
    const size = () => {
        if (props.size) {
            return props.size
        }
        return "1.5rem"
    }

    const NavStyled
        = styled.a`
      font-size: ${size()};
      color: var(--text-color);
      font-weight: 500;
      margin-left: 3.5rem;
      transition: 0.3s;

      &:hover {
        color: var(--main-color);
      }
    `;

    const activeStyle = () => {
        if (props.isActive) {
            return {
                color: "var(--main-color)"
            }
        }
    }

    const onClick = () => {
        if (props.activeSetter && props.onClick) {
            props.activeSetter()
            props.onClick()
        }
    }

    return <NavStyled
        href={props.href}
        style={activeStyle()}
        onClick={onClick}
    >
        {props.title}
    </NavStyled>;
};

export default NavLink;
