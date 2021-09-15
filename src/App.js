// //import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Dropdown from '@restart/ui/esm/Dropdown';


const NytimesHome = () =>{
  const[articles,setArticles] = useState([])
 const[period,setPeriod] = useState (1);
 const [isLoading, setIsLoading] = useState(true)
  
 useEffect(() => {
    const fetchArticles = async() =>{
    try {
      const res = await  fetch(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=pqWy4wN1PpSi4qKswEW4AAb1AdAGvjpK')
   
          const articles= await res.json()
          console.log(articles)
          setArticles(articles.results)
    }
    catch (error) {
      console.error(error);
    }
   }
   fetchArticles()

 },[])
 
 
 return (
    
      <section>
        <h1 class="display-5 text-center" id="ny-title">NY TIMES MOST POPULAR ARTICLES</h1>
              {articles.map ((article) => {
          const {abstract, 
              byline,
              published_date,
              lead_paragraph,
              title,
            } =article

      return(
        
     <body id ="article-body" bgcolor="orange">
        
        <article class ="Article-section">                 
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="col text-center">
                        <div class="p-5">

     
                <h1>{title}</h1>    
                <p>{lead_paragraph}</p>   
            
              
                <Dropdown><h4>{abstract}</h4></Dropdown>
                <p>{byline}   {published_date}</p>
                
                         </div> 
                       </div>
                    </div> 
                 </div>
          </div>
          </article>
          </body>
          )
        })}
    </section>
  );
}

export default NytimesHome;