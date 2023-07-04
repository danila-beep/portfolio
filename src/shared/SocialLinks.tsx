import React, {FC} from 'react'
import s from "./socialLinks.module.css"
import { UilFacebook, UilLinkedin, UilTwitter } from '@iconscout/react-unicons'
import styled from 'styled-components'

type SocialMediaTypes = "FaceBook" | "Twitter" | "LinkedIn"

type SocialLinkProps = {
    socialMedia: SocialMediaTypes
}

const SocialLink: FC<SocialLinkProps> = (props) => {

    const socialMediaChecker = (): JSX.Element | undefined => {
        switch (props.socialMedia) {
            case "FaceBook":
                return <UilFacebook size={"2.5rem"}/>
            case "Twitter": 
                return <UilTwitter size={"2.5rem"}/>
            case "LinkedIn":
                return <UilLinkedin size={"2.5rem"}/>
            default:
                return (
                    <div>
                        Undefined
                    </div>
                )
        }
    }

    const AStyled = styled.a`
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background: transparent;
        border: .2rem solid var(--main-color);
        border-radius: 50%;
        color: var(--main-color);
        z-index: 1;
        overflow: hidden;
        transition: .5s;

        &:hover {
            color: var(--bg-color);
        }
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: var(--main-color);
            z-index: -1;
            transition: .5s;
        }
        &:hover::before {
            width: 100%;
        }
    `

  return (
    <AStyled href="#">
        {socialMediaChecker()}
    </AStyled>
  )
}

export default SocialLink