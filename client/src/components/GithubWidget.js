import React, { useEffect, useState } from 'react';
import { VDiv, HDiv, Card, HoverSpan, HoverA } from './helpers';
import { Colors } from '../constants';

const fetchGithub = async (username) => {
    try {
        const response = await fetch(`http://localhost:5000/site/githubwidget/${username}`);
        const json = await response.json();
        return {
            bio: json.data.user.bio,
            name: json.data.user.name,
            followers: json.data.user.followers.totalCount,
            following: json.data.user.following.totalCount,
            totalRepos: json.data.user.repositories.totalCount,
            repos: json.data.user.pinnedItems.edges.map( item => ({
                name: item.node.name,
                language: item.node.languages.edges[0].node.name,
                color: item.node.languages.edges[0].node.color,
                stars: item.node.stargazers.totalCount,
                url: item.node.url,
            })),
            totalContributions: json.data.user.contributionsCollection.contributionCalendar.totalContributions,
            avatarUrl: json.data.user.avatarUrl
        };
    } catch (error) {
        console.error(error)
        return ({})
    }
}

const ShowRepo = ({name, language, color, stars, url, style}) => {
    return (
        <HDiv style={{...style, paddingLeft: 16, paddingRight: 16, alignItems: 'flex-end'}}>
            <HoverA
                href={url}
                color={'white'}
                backgroundColor={color}
                style={{fontFamily: 'Share Tech Mono'}}
            >
                {name}
            </HoverA>
            <div style={{flexGrow: 1}}/>
            <span style={{fontFamily: 'Share Tech Mono', color, marginRight: 16}}>{language}</span>
            <span style={{fontFamily: 'Share Tech Mono'}}>{stars}⭐</span>
        </HDiv>
    )
}

export const GithubWidget = ({username, style}) => {

    const [ response, setResponse ] = useState({lastContributions: []});

    useEffect ( () => {
        const fetchData = async () => {
            setResponse( await fetchGithub(username) );
        }
        fetchData();
    }, [username])

    return (
        <Card
            innerStyle={{
                display: 'flex',
                flexDirection: 'column',
                background: 'white',
                padding: 8,
            }}
            outerStyle={{backgroundColor: Colors.changeLightness(Colors.BACKGROUND_GREY, -10)}}
            hoverBackground={Colors.randColor()}
            distance={15}
            borderWidth={2}
        >
            <VDiv style={{alignItems: 'center'}}>
                <img src={response.avatarUrl} style={{borderRadius: 50, width: 75, height: 75, border: `2px solid`}}></img>
                <HoverA color={'white'} backgroundColor={Colors.randColor()} style={{textAlign: 'center', fontFamily: 'Share Tech Mono', marginTop: 8, fontWeight: 'bold', fontSize: '1.2rem'}} href={`https://github.com/${username}`}>{response.name}</HoverA>
                <span style={{textAlign: 'justify', fontFamily: 'Share Tech Mono', marginTop: 8, marginLeft: 8, marginRight: 8}}>{response.bio}</span>
                <HDiv style={{alignSelf:'stretch', justifyContent: 'space-around', marginTop: 8}}>
                    <VDiv>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono', fontWeight: 'bold'}}>Repos</span>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono'}}>
                            {response.totalRepos}
                        </span>
                    </VDiv>

                    <VDiv>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono', fontWeight: 'bold'}}>Followers</span>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono'}}>
                            {response.followers}
                        </span>
                    </VDiv>

                    <VDiv>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono', fontWeight: 'bold'}}>Following</span>
                        <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono'}}>
                            {response.following}
                        </span>
                    </VDiv>
                </HDiv>
                <HoverSpan color={'white'} backgroundColor={Colors.randColor()} style={{textAlign: 'center', fontFamily: 'Share Tech Mono', fontWeight: 'bold', marginTop: 24, fontSize: '1.2rem'}}>Pinned repositories</HoverSpan>
                { response.repos && response.repos.map(repo => (<ShowRepo {...repo} style={{alignSelf: 'stretch'}}/>) ) }
                <HDiv>
                    <span style={{textAlign: 'center', fontFamily: 'Share Tech Mono', marginTop: 16}}>{response.totalContributions} contributions in the last year</span>
                </HDiv>
            </VDiv>

        </Card>
    )
}
