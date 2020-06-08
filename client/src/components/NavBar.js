import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/actions';

const fontSize = 1.5;
const padding = 24;
const iconHeight = 40;
export const navbarHeight = 24*2 + iconHeight;

const LanguageButton = styled.button`
    border-radius: 4px;
    padding: 4px;
    font-family: Share Tech Mono;
    font-size: 1rem;
    align-self: center;
    background-color: ${Colors.BACKGROUND_GREY};
    transition: background-color 0.25s;
    cursor: pointer;
    &:hover {
        background-color: ${Colors.DARK_GREY};
        color: white;
    }
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

const LanguageSelector = ({style}) => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector( state => state.language );
    const selected = {
        borderWidth: 1.5,
        borderColor: Colors.DARK_GREY,
        ...style,
    }

    const unselected = {
        borderWidth: 0,
        ...style
    }

    return (
        <div style={{display: 'flex'}}>
        <LanguageButton style={ selectedLanguage === 'EN' ? selected : unselected } onClick={ () => dispatch(setLanguage('EN')) }>EN</LanguageButton>
        <LanguageButton style={ selectedLanguage === 'ES' ? selected : unselected } onClick={ () => dispatch(setLanguage('ES')) }>ES</LanguageButton>
        </div>
    )
}

const Anchor = styled(Link)`
    color: ${Colors.DARK_GREY};
    text-decoration: none;
    cursor: pointer;
    font-size: ${fontSize}rem;
    font-family: Share Tech Mono;
    transition: opacity 0.3;
    transition: background-color 0.25s;

    &:hover {
        background-color: ${Colors.DARK_GREY};
        color: white;
    }

`;

const Button = ({to, text, style}) => (
    <div>
        <Anchor to={to} style={{...style}}>{text}</Anchor>
    </div>
)

let prevScroll = window.pageYOffset;

export const NavBar = ({className}) => {
    const [ containerStyle , setContainerStyle ] = useState({
        display: 'flex',
        backgroundColor: Colors.BACKGROUND_GREY,
        justifyContent: 'center',
        padding: padding,
    });

    const [ opacity, setOpacity ] = useState('100%');

    useEffect( () => {
        const handleScroll = (event) => {
            const currScroll = window.pageYOffset;
            if ( prevScroll > currScroll ) {
                setOpacity('100%');
                setContainerStyle({...containerStyle, backgroundColor: `${Colors.BACKGROUND_GREY}ff`});
            } else {
                setOpacity('0%');
                setContainerStyle({...containerStyle, backgroundColor: '#ffffff00'});
            }
            prevScroll = currScroll;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <div style={containerStyle} className={className}>
            <div style={{width: iconHeight, height: iconHeight, backgroundColor: Colors.DARK_GREY, marginRight: 24}}></div>
            <div style={{display: 'flex', justifyContent: 'space-around', flexGrow: 1, alignItems: 'center'}}>
                <Button text={"Home"} to={'/'} style={{opacity}}/>
                <Button text={"Blog"} to={'/blog'} style={{opacity}}/>
                <Button text={"About"} to={'/about'} style={{opacity}}/>
            </div>
            <LanguageSelector style={{opacity}}/>
        </div>
    )
}
