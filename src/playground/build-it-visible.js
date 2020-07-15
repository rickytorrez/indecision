console.log('visible');

const app = {
  title: 'Visibility Toggle',
  visible: false,
  message: 'These are some random facts because we speak the truth',
};

const onShowDetails = () => {
  console.log(app.visible);
  app.visible = !app.visible;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onShowDetails}>
        {app.visible ? 'Hide Deets' : 'Show deets'}
      </button>
      {app.visible ? <p>{app.message}</p> : null}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
