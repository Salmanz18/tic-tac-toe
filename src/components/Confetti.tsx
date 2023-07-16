import { ReactNode } from 'react';
import styled from 'styled-components';
import ConfettiPath from '../assets/confetti.svg';

const StyledConfettiContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  background-image: url(${ConfettiPath});
  display: ${(props) => `${props.isVisible ? 'block' : 'initial'}`};
`;

interface ConfettiProps {
  children: ReactNode;
  isVisible: boolean;
}

export function Confetti({ children, isVisible }: ConfettiProps) {
  return <StyledConfettiContainer isVisible={isVisible}>{children}</StyledConfettiContainer>;
}
