import React from 'react';
import { GithubWidget } from './GithubWidget';
import { HDiv, VDiv } from './helpers';

export const HomeScreen = ({style}) => {
    return (
        <HDiv style={{flexGrow: 1}}>
            {/* Left side */}
            <VDiv style={{...style, flexGrow: 1, backgroundColor: 'red'}}>
                <GithubWidget username={'lletfrix'} />
            </VDiv>

            {/* Middle */}
            <VDiv style={{...style, flexGrow: 2, backgroundColor: 'orange'}}>
            </VDiv>

            {/* Right side */}
            <VDiv style={{...style, flexGrow: 1, backgroundColor: 'teal'}}>

            </VDiv>
        </HDiv>
    )
}
