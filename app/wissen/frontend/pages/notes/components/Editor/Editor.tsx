import { styled } from "@jon-zuka/solidjs-ui"
import {type JSX} from 'solid-js'

export {StyledEditor as Editor} 
const Editor = (props: JSX.IntrinsicElements['div']) => {
  return <div contentEditable {...props}></div>
}

const StyledEditor = styled(Editor)`
background-color: #111;
min-height: 800px;
max-width: ${({theme}) => theme?.breakpoints.desktop};
outline: none;
padding: 1rem;
border-radius: 1rem;
border: 1px solid #ffffff10;
margin: 0 auto;
`
