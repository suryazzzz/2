import pic from './Images/images.jfif';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Exercise 2</h1>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>Department of CT-PG</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <div class="content">
            <p> Design/development of solutions: Design solutions for well defined computing problems and design systems components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations
PO4
Conduct investigations of complex computing problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.
PO5
Modern tool usage: Create, select and apply appropriate techniques, resources, and computing technologies necessary for computing practices. Professional Ethics: Understand and practice professional ethics in multidisciplinary environments.Life-long learning: Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>
            <footer>
        <button className='button'>Learn more about CT-PG</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;
