import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'

function App() {


    // let login =false;


//this if else works outside the jsx but will not work inside the jsx, for that use the ternary opertor
    // if(login==false){

    //   return(
    //     <Header />
    //   )
    // }


    //TERNARY OPERATOR INSIDE JSX
   
    let login =false;

  


// Render the App component
    // ReactDOM.render(<App />, document.getElementById('root'));

    

  return (
    <div className="App">

        {/* {
          login== false ? ( <h1 style = {{color:'white' }}>nothing </h1>) : (<div> else part</div>)
        } */}

        {/* {
          login== false ? ( <Header />) : (<div> else part</div>)
        } */}


        {/* { 

          
              (() => {

                if(login) {

                  return  <h1 style={{color:'white'}}> if part</h1>

                }else{

                  return <h1 style={{color:'white'}}> else part</h1>
                }

              })()

          }

        */}
      <Header />

        <div className='main'>
          {/* <Movie />
          <Movie />
          <Movie /> */}

          {

              movies.map((element, index) => {

                //defined in parent, to be "get" at child which is movie.js| also return as its an arrow function so something has to be returned
                return (

                <Movie 
                key= {index}
                title= {element.Title}
                year= {element.Year}
                img= {element.Poster}
          
                />) 

              }           
              )

          }

          

        </div>

    </div>
  );
}

export default App;
