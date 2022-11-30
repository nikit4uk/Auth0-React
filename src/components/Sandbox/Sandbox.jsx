import {createEvent, createStore, combine} from 'effector';
import {useStore} from 'effector-react';
import './sandbox.css';

const plus = createEvent()

const $counter = createStore(1).on(plus, n => n + 1)
const $counterText = $counter.map(n => `current value = ${n}`)
const $counterCombined = combine({counter: $counter, text: $counterText})

const Sandbox = () => {
    const counter = useStore($counter)
    const counterText = useStore($counterText)
    const counterCombined = useStore($counterCombined)

    return (
        <section className='sandbox'>
            <div className='container'>
                <button className='btn' onClick={plus}>Plus</button>
                <div>counter: {counter}</div>
                <div>counterText: ${counterText}</div>
                <div>counterCombined: {counterCombined.counter}, {counterCombined.text}</div>
            </div>
        </section>
    )
}

export default Sandbox;