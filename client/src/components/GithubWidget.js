import React, { useEffect, useState } from 'react';
import { VDiv } from './helpers';

const fetchGithub = async () => {
    try {
        const response = await fetch('http://localhost:5000/site/githubwidget');
        const json = await response.json();
        const lastWeeks = json.data.user.contributionsCollection.contributionCalendar.weeks.slice(-2)
        const days = lastWeeks.flatMap( item => {
            return item.contributionDays.map( day => day.contributionCount )
        } )
        return {
            bio: json.data.user.bio,
            name: json.data.user.name,
            followers: json.data.user.followers.totalCount,
            following: json.data.user.following.totalCount,
            repos: json.data.user.pinnedItems.edges.map( item => ({
                name: item.node.name,
                description: item.node.description ? item.node.description : '',
                language: item.node.languages.edges[0].node.name,
                color: item.node.languages.edges[0].node.color
            })),
            totalContributions: json.data.user.contributionsCollection.contributionCalendar.totalContributions,
            lastContributions: days.slice(-7),
            avatarUrl: json.data.user.avatarUrl
        };
    } catch (error) {
        console.error(error)
        return ({})
    }
}

export const GithubWidget = ({username}) => {

    const [ response, setResponse ] = useState({lastContributions: []});

    useEffect ( () => {
        const fetchData = async () => {
            setResponse( await fetchGithub() );
        }
        fetchData();
    }, [username])

    return (
        <VDiv>
            Hello {username}, {response.name}, {response.followers}
            <img src={response.avatarUrl} style={{height: 100, width: 100}}/>
        </VDiv>
    )
}
