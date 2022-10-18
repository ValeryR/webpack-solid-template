import { render } from 'solid-js/web';
import { App } from './components/app';

const rootContainerElement = document.getElementById("root");

if (rootContainerElement) {
    render(App, rootContainerElement);
} else {
    console.log('rootContainerElement doesnt exist!')
}
