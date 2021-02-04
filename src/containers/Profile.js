import { useState, useEffect } from 'react';

export default function Profile() {
    const [ profileSummary, setProfileSummary ] = useState({ data: {}, loading: true });
    const { data: { avatar_url, html_url, repos_url, name, company, location, email, bio }, loading } = profileSummary;
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
        <div>
        { loading && <div>Loading ...</div> }
        <ul>
            <li>avatar_url: {avatar_url}</li>
            <li>html_url: {html_url}</li>
            <li>repos_url: {repos_url}</li>
            <li>name: {name}</li>
            <li>location: {location}</li>
            <li>company: {company}</li>
            <li>email: {email}</li>
            <li>bio: {bio}</li>
        </ul>
        </div>
    )
}