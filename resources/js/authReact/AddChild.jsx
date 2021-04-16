import React, { useState, useEffect } from 'react';



function AddChild() {

    

  
      const [{name, sex, info, link}, setValues] = useState({
          name: '',
          sex: '',
          info: '',
          link: ''
      })
  
      const handleSubmit = async (event) => {
  
          event.preventDefault();
  
          let request_data = {name, sex, info, link};
          const response = await fetch('/api/child/create', {
              method: 'POST',
              body: JSON.stringify(request_data),
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            }
          });
         // const response_data = await response.json();
  
          if (Math.floor(response.status / 100) == 2) { 
              location.href = '/auth'; 
              
          }
      }
  
      const handleChange = (event) => {
          const allowed_names = ['name', 'sex', 'info', 'link'],
                name  = event.target.name,
                value = event.target.value
  
          if (-1 !== allowed_names.indexOf(name)) {
              setValues(prev_values => {
                  return ({...prev_values,
                      [name]: value
                  });
              });
          }
      }
  
      return (
          <form action="/api/child/create" method="post" onSubmit={ handleSubmit }>
  
              <label htmlFor="">Jméno:</label><br />
              <input type="text" name="name" value={ name } onChange={ handleChange } />
              <br />
  
  
              <label htmlFor="">Info:</label><br />
              <input type="textarea" name="info" value={ info } onChange={ handleChange } />
              <br />
  
              <label htmlFor="">Pohlaví:</label><br />
                            
              <select name="sex" value={ sex } onChange={ handleChange }>
                <option value="girl">Dívka</option>
                <option value="boy">Chlapec</option>
                <option value="other">Jiné</option>
                <option value="null">Bez komentáře</option>
   
              </select>
              <br />
              <label htmlFor="">Link:</label><br />
              <input type="text" name="link" value={ link } onChange={ handleChange } />
              <br />
  
              <button>Přidat</button>
  
          </form>
      );
  }

export default AddChild;