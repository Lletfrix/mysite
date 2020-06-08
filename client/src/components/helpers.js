import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants';

export const VDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HDiv = styled.div`
    display: flex;
`;

export const BGHoverDiv = styled.div`
    transition: background-color 0.1s;

    &:hover {
        background-color: ${props => props.backgroundColor ? props.backgroundColor : ''} !important;
    }
`;

export const HoverSpan = styled.span`
    transition: background-color 0.15s;
    transition: color 0.1s;

    &:hover {
        color: ${props => props.color ? props.color : ''} !important;
        background-color: ${props => props.backgroundColor ? props.backgroundColor : ''} !important;
    }
`;

export const HoverA = styled.a`
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
        color: ${props => props.color ? props.color : ''} !important;
        background-color: ${props => props.backgroundColor ? props.backgroundColor : ''} !important;
    }
`;

export const Card = ({children, className, innerStyle, outerStyle, style, borderWidth, distance, hoverBackground}) => (
    <div class={className} style={{...style, position: 'relative', display: 'flex'}}>
        <BGHoverDiv
            backgroundColor={hoverBackground}
            style={{
                ...outerStyle,
                border: `${borderWidth}px solid black`,
                position: 'absolute',
                top: 0,
                right: distance,
                bottom: distance,
                left: 0,
                borderTopLeftRadius: distance,
                borderTopRightRadius: distance,
                borderBottomRightRadius: distance/1.5,
                borderBottomLeftRadius: distance,
            }}
        />
        <BGHoverDiv
            backgroundColor={hoverBackground}
            style={{
                ...outerStyle,
                border: `${borderWidth}px solid black`,
                position: 'absolute',
                top: distance,
                right: 0,
                bottom: 0,
                left: distance,
                borderTopLeftRadius: distance/1.5,
                borderTopRightRadius: distance,
                borderBottomRightRadius: distance,
                borderBottomLeftRadius: distance
            }}
        />
    <div
        style={{
            ...innerStyle,
            border: `${borderWidth}px solid black`,
            flexGrow: 1,
            margin: distance,
            borderTopLeftRadius: distance/1.5,
            borderBottomRightRadius: distance/1.5,
            zIndex: 1,
        }}>{children}</div>
    </div>
);
