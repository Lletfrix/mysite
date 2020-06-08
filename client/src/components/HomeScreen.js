import React from 'react';
import { GithubWidget } from './GithubWidget';
import { HDiv, VDiv } from './helpers';
import { Colors } from '../constants';

export const HomeScreen = ({style}) => {
    return (
        <HDiv style={{flexGrow: 1}}>
            {/* Left side */}
            <VDiv style={{...style, flexGrow: 1, background: Colors.BACKGROUND_GREY, maxWidth: '25vw', paddingLeft: 12, paddingRight: 12}}>
                <GithubWidget username={'lletfrix'}/>
            </VDiv>

            {/* Middle */}
            <VDiv style={{...style, flexGrow: 2, backgroundColor: 'orange', maxWidth: '50vw'}}>
            </VDiv>

            {/* Right side */}
            <VDiv style={{...style, flexGrow: 1, backgroundColor: 'teal', maxWidth: '25vw'}}>

            </VDiv>
        </HDiv>
    )
}
