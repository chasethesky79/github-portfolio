import { useState, useEffect } from 'react';
import  { ProfileWrapper, ProfileImgWrapper } from '../styled-components/styled-components'
import List from '../containers/List';
import Link from '../components/Link/Link';

export default function Profile() {
    const [ profileSummary, setProfileSummary ] = useState({ data: {}, loading: true });
    const [ projects, setProjects ] = useState([]);
    const { data: { avatar_url, html_url, repos_url, name, company, location, email, bio }, loading } = profileSummary;
    const items = [ { label: 'html_url', value: html_url }, { label: 'repos_url', value: repos_url }, { label: 'name', value: name }, { label: 'company', value: company },
    { label: 'email', value: email }, { label: 'bio', value: bio }, { label: 'location', value: location }]
    useEffect(() => {
       async function fetchData() {
       const profile = await fetch('https://api.github.com/users/octocat');
       const profileJSON = await profile.json();
       if (profileJSON) {
           const repositoriesData = await fetch(profileJSON.repos_url);
           const repositories = await repositoriesData.json()
           setProfileSummary({ data: profileJSON, loading: false });
           setProjects(repositories.map(repository => ({
            label: repository.name,
            value: <Link url={repository.html_url} title='Github URL'/>
          })));
       }
    } fetchData();     
    }, []);
    return (
        <ProfileWrapper>
            { loading && <div>Loading ...</div> }
            <ProfileImgWrapper src={avatar_url} alt='avatar'/>
            <List title='Profile' items={items}/>
            { projects && <List title='Projects' items={projects}/>}
        </ProfileWrapper>
    )
}