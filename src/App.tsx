import Counter from './components/Counter';
import CounterBy from './components/CounterBy';
import CounterEffect from './components/CounterEffect';
import CounterHook from './components/CounterHook';

function App() {
    return (
        <>
            <h1>React Typescript</h1>
            <hr />
            <Counter initialValue={15} />
            <CounterBy />
            <CounterEffect />
            <CounterEffect />
            <CounterHook />
        </>
    );
}

export default App;
