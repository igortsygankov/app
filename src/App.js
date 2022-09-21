import React from 'react';
import {useState} from 'react';

class AboutSeth extends React.PureComponent {
  render () { return <p>Hi I am Seth. I am the team leader</p>
                     
  }
}

class AboutAlex extends React.PureComponent {
  render () { return <div>
                      <p>AboutAlex</p>
                      <img src = "../images/name of image">
                    </img></div>
  
  }
}

class AboutAlejandro extends React.PureComponent {
  render () { return <p>AboutAlejandro</p>
                     
  }
}

class AboutArmando extends React.PureComponent {
  render () { return <p>AboutArmando</p>
                     
  }
}

class AboutIgor extends React.PureComponent {
  render () { return <p>AboutIgor</p>
                     
  }
}

class AboutMichael extends React.PureComponent {
  render () { return <p>AboutMichael</p>
                     
  }
} 

function App() {

  const [isSethShown, setIsSethShown] = useState(false);
  const [isAlexShown, setIsAlexShown] = useState(false);
  const [isAlejandroShown, setIsAlejandroShown] = useState(false);
  const [isArmandoShown, setIsArmandoShown] = useState(false);
  const [isIgorShown, setIsIgorShown] = useState(false);
  const [isMichaelShown, setIsMichaelShown] = useState(false);

  //https://bobbyhadz.com/blog/react-onclick-show-component
  const showAboutSeth = event => {
    setIsSethShown(current => !current)
  };
  const showAboutAlex = event => {
    setIsAlexShown(current => !current)
  };
  const showAboutAlejandro = event => {
    setIsAlejandroShown(current => !current)
  };
  const showAboutArmando = event => {
    setIsArmandoShown(current => !current)
  };
  const showAboutIgor = event => {
    setIsIgorShown(current => !current)
  };
  const showAboutMichael = event => {
    setIsMichaelShown(current => !current)
  };

  const seth = <AboutSeth/>;
  const alex = <AboutAlex/>;
  const alejandro = <AboutAlejandro/>;
  const armando = <AboutArmando/>;
  const igor = <AboutIgor/>;
  const michael = <AboutMichael/>;
  //const home = <HomePage/>;
 
  return (<div>
            <p>Home Page</p>
            <button onClick={showAboutSeth}>About Seth</button>
            {isSethShown && (seth)}
            <button onClick={showAboutAlex}>About Alex</button>
            {isAlexShown && (alex)}
            <button onClick={showAboutAlejandro}>About Alejandro</button>
            {isAlejandroShown && (alejandro)}
            <button onClick={showAboutArmando}>About Armando</button>
            {isArmandoShown && (armando)}
            <button onClick={showAboutIgor}>About Igor</button>
            {isIgorShown && (igor)}
            <button onClick={showAboutMichael}>About Michael</button>
            {isMichaelShown && (michael)}
          </div>
          );
}



export default App;
