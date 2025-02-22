import styled from 'styled-components/macro';

export const Container = styled.div`
    width: clamp(250px, 90%, 350px);
    margin: 3rem auto 4rem auto;

    @media (min-width: 668px) {
        width: clamp(250px, 90%, 500px);
    }
`

export const Header = styled.header`
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: hsl(21,84%,54%);
        font-size: 3rem;
        margin: 0;
    }
` 

export const Form = styled.form`
    font-size 2rem;
    color: hsl(300, 30%, 60%);
    text-align: center;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 25px;

    input {
        padding: .5em;
        font-size: 1rem;
        flex-grow: 4;
        border: 1px solid hsl(21,84%,54%);
        border-radius: .25rem;
    }
`

export const NewTaskButton = styled.button`
    font-weight: 700;
    font-family: 'Nunito';
    text-transform: uppercase;
    color: white;
    min-width: 10ch;
    background-color: hsl(21,84%,54%);
    border-radius: .25rem;
    border: none;
    cursor: pointer;
`

export const TaskCounter = styled.div`
    display: grid;
    font-size: clamp(1rem, 5vw + 1rem, 1.5rem);
`
export const TaskItem = styled.div`
    margin: 0 auto;
    width: 100%;
`

export const SmallButton = styled.button`
    font-family: 'Nunito';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: 600;
    padding: .5em;
    background-color: hsl(21,84%,44%);
    color: white;
    border: none;
    border-radius: .25rem;
    cursor: pointer;

    &:hover {
        background-color: hsl(21,84%,54%);
    }
`

export const GoBackButton = styled.button`
    font-weight: 600;
    padding: .5em;
    background-color: hsl(21,84%,54%);
    color: white;
    border: none;
    border-radius: .25rem;
    cursor: pointer;
`

export const Tasklist = styled.div`
    display: grid;
`

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
    color: white;
    line-height: 2rem;
    text-align: center;
    background-color: hsl(21,84%,54%);

    a {
        color: white;
        font-weight: 700;
        text-decoration: none;
    }
`

export const Taskwrapper = styled.div`
    padding: 1rem;
    background-color: hsla(0, 0%, 100%, .8);
    border-radius: .25rem;
    position: relative;
    margin-bottom: 1rem;
`

export const Flex = styled.div`
    display: flex;
` 

export const Overview = styled.div`
    padding: .5rem;
    border-radius: .25rem;
    text-align: center;
    margin: 1rem 0;
    background-color: #1e6091;

    h2 {
        font-weight: 400;
        color: white;
        margin: 0;
    }
`

export const Created = styled.p`
    color: #495057;
`