import styled from '@emotion/styled';
import { FlexProps } from '@components/Flex/Flex.types';

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) =>
        justify === 'between' ? 'space-between' :
            justify === 'around' ? 'space-around' :
                justify === 'evenly' ? 'space-evenly' :
                    justify || 'flex-start'};
  align-items: ${({ align }) =>
        align === 'start' ? 'flex-start' :
            align === 'end' ? 'flex-end' :
                align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap ? `${gap}px` : '0'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

// 자주 사용되는 조합들
export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;