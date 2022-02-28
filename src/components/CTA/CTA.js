import React from "react";
import { Link } from "gatsby";
import {
  CTAImage,
  CTAImageText,
  CTAImageTextWrapper,
  StyledImg,
} from "./CTA.styles";

const CTA = ({ image, link, text }) => (
  <CTAImage>
    <StyledImg image={image} alt="CTA Image" />
    <Link to={link}>
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </Link>
  </CTAImage>
);

export default CTA;
