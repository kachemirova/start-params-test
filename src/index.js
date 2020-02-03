import React from "react"
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';

connect.send('VKWebAppInit');
connect.send('VKWebAppSetViewSettings', {status_bar_style: 'dark', action_bar_color: '#FFFFFF'});

ReactDOM.render(<App />, document.getElementById('root'));