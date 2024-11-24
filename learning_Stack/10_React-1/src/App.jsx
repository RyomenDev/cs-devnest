import 'bulma/css/bulma.css';
import AlexaImage from './images/temp/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import Card from './Card.jsx';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title"> Personal Digital Assistants</p>
        </div>
      </section>
      <div>
        {/* <Card
          title="Alexa"
          description="I'll help you buy stuff off Amazon"
          subtitle="@alexa"
          image={AlexaImage}
        />
        <Card
          title="Cortana"
          subtitle="@cortana"
          description="Personal assistant by Microsoft"
          image={CortanaImage}
        />
        <Card
          title="Siri"
          subtitle="@siri"
          description="I don't get a lot of updates anymore"
          image={SiriImage}
        /> */}
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <Card
                  title="Alexa"
                  description="I'll help you buy stuff off Amazon"
                  subtitle="@alexa"
                  image={AlexaImage}
                />
              </div>
              <div className="column is-4">
                <Card
                  title="Cortana"
                  subtitle="@cortana"
                  description="Personal assistant by Microsoft"
                  image={CortanaImage}
                />
              </div>
              <div className="column is-4">
                <Card
                  title="Siri"
                  subtitle="@siri"
                  description="I don't get a lot of updates anymore"
                  image={SiriImage}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const x = 1;
const message = 'HELLO WORLD';
const hello = () => {
  return 'HELLO !!';
};

export default App;

export { x, message, hello };
