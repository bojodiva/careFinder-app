import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css'; 
import NavBar from '../components/NavBar';
import NavBar2 from "../components/NavBar2.jsx";
import AuthCheck from "../components/AuthCheck";
import { ref, push, onValue } from 'firebase/database';
import { database } from '../components/firebase.jsx';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function HospitalMarkdownEditor(){
    const isLoggedIn = AuthCheck();
    const navigate = useNavigate();
    const [markdown, setMarkdown] = useState("");
    const [userContent, setUserContent] = useState([])

    const handleEditorChange = ({ text }) => {
        setMarkdown(text);
      };

      useEffect(() => {
        const contentRef = ref(database, "markdownData");
    
        const unsubscribe = onValue(contentRef, (snapshot) => {
          const data = snapshot.val();
          const contentArray = data ? Object.entries(data).map(([key, value]) => ({ ...value, key })) : [];
          setUserContent(contentArray); 
        });
    
        return () => {
          unsubscribe();
        };
      }, []);  

    const handleSaveAndPublish = (e) => {

      e.preventDefault();

      if(!isLoggedIn){
        navigate("/signup")
        return;
      }

      const contentRef = ref(database, "markdownData")
      push(contentRef, {
        content: markdown
      })

      setMarkdown('')
    }

    return(
        <>
        {isLoggedIn ? <NavBar2/> : <NavBar/>}
        <div>

      <div className='content--container'>
  {userContent.map((item, index) => (
    <div key={index} className="individual--content">
      <ReactMarkdown>{item.content}</ReactMarkdown>
    </div>
  ))}
</div>

    <div className="hospital-markdown-editor">
        <h3 className='editor--big-text'>Write your content here in English. Just before publishing, kindly put your name, time and date for other users to see. </h3>
      <MarkdownEditor
        value={markdown}
        onChange={handleEditorChange}
        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
      />
      <div className="markdown-preview">
        <h2 className='preview'>Preview</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <button className="publish--btn" onClick={handleSaveAndPublish}>Save and Publish</button>

</div>
    </div>
    <Footer/>
        </>
    )
}