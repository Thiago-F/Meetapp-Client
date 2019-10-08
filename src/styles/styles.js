import styled from 'styled-components';

export const Title = styled.div`
    font-size: ${props => props.size ? `${props.size}px` : '24px' };
    font-weight: ${props => props.bold ? 'bold' : 'normal' };
    color: #fff;
`;

 