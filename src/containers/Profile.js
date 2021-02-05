import { useState, useEffect } from 'react';
import  { ProfileWrapper, ProfileImgWrapper } from '../styled-components/styled-components'
import List from '../containers/List';

export default function Profile() {
    const [ profileSummary, setProfileSummary ] = useState({ data: {}, loading: true });
    const { data: { avatar_url, html_url, repos_url, name, company, location, email, bio }, loading } = profileSummary;
    const items = [ { label: 'html_url', value: html_url }, { label: 'repos_url', value: repos_url }, { label: 'name', value: name }, { label: 'company', value: company },
    { label: 'email', value: email }, { label: 'bio', value: bio }, { label: 'location', value: location }]
    useEffect(() => {
       async function fetchData() {
       const profile = await fetch('https://api.github.com/users/octocat');
       const profileJSON = await profile.json();
       if (profileJSON) {
           setProfileSummary({ data: profileJSON, loading: false });
       }
    } fetchData();     
    }, []);
    return (
        <ProfileWrapper>
            { loading && <div>Loading ...</div> }
            <ProfileImgWrapper src={avatar_url} alt='avatar'/>
            <List items={items}/>
        </ProfileWrapper>
    )
}