import { createSignal, onCleanup } from "solid-js";
import styles from './app.module.css';

console.log(styles);

export const App = () => {
    const [count, setCount] = createSignal<number>(0);
    const timer = setInterval(() => setCount(count() + 1), 1000);

    onCleanup(() => clearInterval(timer));

    return (
        <>
            <main class={styles.container}>
                <h1>Hello from Solid TSX</h1>
                This is just a counter: {count()}
            </main>
        </>);
}
