import React from 'react';
import { useCTAAreaQuery } from '../../hooks/useCTAAreaQuery';
import { Wrapper } from './CTAArea.styles';
import CTA from '../CTA/CTA';

const CTAArea = () => {
  const { cta } = useCTAAreaQuery();
  // 2:50
  return (
    <Wrapper>
      {new Array(3).fill("").map((element, index) => (
        <CTA
          key={index}
          image={cta.ACF_HomePage[`cta${index + 1}Image`].localFile.childImageSharp.gatsbyImageData}
          link={cta.ACF_HomePage[`cta${index + 1}Link`]}
          text={cta.ACF_HomePage[`cta${index + 1}Text`]}
        />
      ))}
    </Wrapper>
  );
};

export default CTAArea;