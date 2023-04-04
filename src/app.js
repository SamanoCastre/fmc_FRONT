import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Dashboard from './dashboard';
import ActivityPage from './components/Activities/ActivityPage/ActivityPage';
import ProjectPage from './components/Projects/ProjectPage/ProjectPage';
import NewsPage from './components/News/NewsPage/NewsPage';
import PostPage from './components/Posts/PostPage/PostPage';
import ActivityList from './components/Activities/ActivityList/ActivityList';
import ProjectList from './components/Projects/ProjectList/ProjectList';
import NewsList from './components/News/NewsList/NewsList';
import PostList from './components/Posts/PostList/PostList';
import Error404 from './components/Error/Error404';
import Footer from './components/globals/Footer/Footer';
import ActivityForm from './components/Activities/ActivityForm/ActivityForm';
import ProjectForm from './components/Projects/ProjectForm/ProjectForm';
import NewsForm from './components/News/NewsForm/NewsForm';
import PostForm from './components/Posts/PostForm/PostForm';
import SocialForm from './components/Socials/SocialForm/SocialForm';
import SocialList from './components/Socials/SocialList/SocialList';
import TeamForm from './components/Teams/TeamForm/TeamForm';
import TeamList from './components/Teams/TeamList/TeamList';
import MemberForm from './components/Members/MemberForm/MemberForm';
import MemberList from './components/Members/MemberList/MemberList';
import ContactList from './components/Contacts/ContactList/ContactList';
import ContactForm from './components/Contacts/ContactForm/ContactForm';

import './index.css';
import Visitors from './components/Visitors/Visitors';

const App = () => {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} >
          <Route exact path="activities/:id" element = {<ActivityPage/>}/>
          <Route exact path="projects/:id" element = {<ProjectPage/>}/>
          <Route exact path="news/:id" element = {<NewsPage/>}/>
          <Route exact path="posts/:id" element = {<PostPage/>}/>
        </Route>

        <Route exact path="/admin" element={<Dashboard/>} >
          <Route exact path="visitors" element = {<Visitors/>}/>
          <Route exact path="activities" element = {<ActivityList/>}/>
          <Route exact path="projects" element = {<ProjectList/>}/>
          <Route exact path="news" element = {<NewsList/>}/>
          <Route exact path="posts" element = {<PostList/>}/>
          <Route exact path="socials" element = {<SocialList/>}/>
          <Route exact path="teams" element = {<TeamList/>}/>
          <Route exact path="members" element = {<MemberList/>}/>
          <Route exact path="contacts" element = {<ContactList/>}/>
          
          <Route exact path="activity-form/:id" element = {<ActivityForm/>}/>
          <Route exact path="project-form/:id" element = {<ProjectForm/>}/>
          <Route exact path="news-form/:id" element = {<NewsForm/>}/>
          <Route exact path="post-form/:id" element = {<PostForm/>}/>
          <Route exact path="social-form/:id" element = {<SocialForm/>}/>
          <Route exact path="team-form/:id" element = {<TeamForm/>}/>
          <Route exact path="member-form" element = {<MemberForm/>}/>
          <Route exact path="contact-form" element = {<ContactForm/>}/>
        </Route>

        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer/>
  </BrowserRouter>
);
}
export default App;