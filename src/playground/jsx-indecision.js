console.log(`app is running!`);

// JSX - Javascript XML
const app = {
  title: 'Indecision App',
  //subtitle: 'Let an algorithm decide what you do',
  options: [],
};

const onFormSubmit = (e) => {
  // prevent the whole app refresh when a form is submitted
  e.preventDefault();

  // get the value the user submitted
  const option = e.target.elements.option.value;

  // if option exists
  if (option) {
    // add input to the options array
    app.options.push(option);
    // wipe the input clear on the form
    e.target.elements.option.value = '';
    render();
  }
};

const onClearArray = () => {
  console.log('clearing');
  app.options = [];
  render();
};

const onMakeDecision = () => {
  // multiply the number by the length of the options array
  const randomNum = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNum];
  alert(selectedOption);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>app.subtitle</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onClearArray}>Remove All</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
