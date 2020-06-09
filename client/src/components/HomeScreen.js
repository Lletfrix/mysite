import React from 'react';
import { GithubWidget } from './GithubWidget';
import { HDiv, VDiv, HoverA } from './helpers';
import { Colors } from '../constants';

const BlogTitle = ({title, url, style}) => (
    <HoverA
        backgroundColor={Colors.randColor()}
        color={'white'}
        href={url}
        style={style}
    >
        {title}
    </HoverA>
);

export const HomeScreen = ({style}) => {
    const cols = [Colors.randColor(), Colors.randColor(), Colors.randColor(), Colors.randColor()]
    return (
        <HDiv style={{flexGrow: 1}}>
            {/* Left side */}
            <VDiv style={{...style, flexGrow: 1, background: Colors.BACKGROUND_GREY, maxWidth: '25vw', paddingLeft: 12, paddingRight: 12}}>
                <GithubWidget username={'lletfrix'} style={{position: 'fixed', maxWidth: 'min-content'}}/>
            </VDiv>

            {/* Middle */}
            <VDiv style={{...style, flexGrow: 2, backgroundColor: Colors.BACKGROUND_GREY, maxWidth: '50vw'}}>
                <span style={{textAlign: 'center', fontSize: '3rem', fontFamily: 'Share Tech Mono', marginTop: 16}}>Blog entries</span>
                <BlogTitle title={'How hard is it to make a computer find peaks in audio signals?'} url={'https://hernandis.me/2020/04/27/how-hard-is-it-to-make-a-computer-find-peaks-in-audio.html'} style={{textAlign: 'center', alignSelf: 'center', marginTop: 24}}/>
            </VDiv>

            {/* Right side */}
            <VDiv style={{...style, flexGrow: 1, backgroundColor: Colors.BACKGROUND_GREY, maxWidth: '25vw'}}>
                <span style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'Share Tech Mono', marginTop: 16}}>How to find me?</span>
                <HoverA href={'https://twitter.com/lletfrix'} backgroundColor={cols[0]} color={'white'} style={{textDecoration: 'underline', textAlign: 'center', fontFamily: 'Share Tech Mono', alignSelf: 'center', marginTop: 24, color: cols[0]}}>If you are a friend - Twitter</HoverA>
                <HoverA href={'https://github.com/lletfrix'} backgroundColor={cols[1]} color={'white'} style={{textDecoration: 'underline', textAlign: 'center', fontFamily: 'Share Tech Mono', alignSelf: 'center', marginTop: 24, color: cols[1]}}>If you are a cool dev - GitHub</HoverA>
                <HoverA href={'mailto:e3sanchezr@gmail.com'} backgroundColor={cols[2]} color={'white'} style={{textDecoration: 'underline', textAlign: 'center', fontFamily: 'Share Tech Mono', alignSelf: 'center', marginTop: 24, color: cols[2]}}>If you are a possible employer - email</HoverA>
                <HoverA href={'https://www.linkedin.com/in/rafaelssanchez'} backgroundColor={cols[3]} color={'white'} style={{textDecoration: 'underline', textAlign: 'center', fontFamily: 'Share Tech Mono', alignSelf: 'center', marginTop: 24, color: cols[3]}}>If you are a hater (or a not so cool employer) - LinkedIn</HoverA>
                <span style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'Share Tech Mono', marginTop: 24}}>About me</span>
                <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono', marginTop: 16}}>Some bio</span>
            </VDiv>
        </HDiv>
    )
}
