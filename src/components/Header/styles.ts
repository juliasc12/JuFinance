import styled from 'styled-components';

export const Container = styled.header`
    background: var(--purple);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 310px;
    }
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--purple-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: 0.2;

        &:hover{
            filter: brightness(0.9);

        }
    }
`