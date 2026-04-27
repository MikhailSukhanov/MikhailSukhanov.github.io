import { evaluate, round } from 'mathjs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './calculator.module.scss';
import { setMathExp, addCharToMathExp } from '../../../store/slices';
import { useDirectProjectLink } from '../../../store/projects.ts';
import { useAppDispatch, useAppSelector } from '../../../store/store.ts';

function Calculator() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const setProjectIdsFromDirectLink = useDirectProjectLink();
    const mathExpression = useAppSelector(state => state.calculator.mathExpression);

    useEffect(() => {
        setProjectIdsFromDirectLink(location.pathname);
    }, []);

    function evalMathExp(expression: string): string {
        try {
            const result = Number(evaluate(expression));
        
            if (result === Infinity || result === -Infinity) {
                return '';
            }
            return result ? String(round(result, 3)) : '';
        } catch (error) {
            return '';
        }
    }

    const result = evalMathExp(mathExpression);

    return <div className={styles.container}>
        <div className={styles.result}>{result === mathExpression ? '' : result}</div>
        <input onChange={e => dispatch(setMathExp(e.target.value))} value={mathExpression}/>
        <div className={styles.buttons}>
            <button onClick={() => dispatch(setMathExp(''))} data-type="operator">AC</button>
            <button onClick={() => dispatch(addCharToMathExp('('))} data-type="operator">{'('}</button>
            <button onClick={() => dispatch(addCharToMathExp(')'))} data-type="operator">{')'}</button>
            <button onClick={() => dispatch(setMathExp(mathExpression.slice(0, -1)))} data-type="operator">⇦</button>
            <button onClick={() => dispatch(addCharToMathExp('/'))} data-type="operator">÷</button>
            <button onClick={() => dispatch(addCharToMathExp('pi'))}>π</button>
            <button onClick={() => dispatch(addCharToMathExp('7'))}>7</button>
            <button onClick={() => dispatch(addCharToMathExp('8'))}>8</button>
            <button onClick={() => dispatch(addCharToMathExp('9'))}>9</button>
            <button onClick={() => dispatch(addCharToMathExp('*'))} data-type="operator">×</button>
            <button onClick={() => dispatch(addCharToMathExp('e'))}>e</button>
            <button onClick={() => dispatch(addCharToMathExp('4'))}>4</button>
            <button onClick={() => dispatch(addCharToMathExp('5'))}>5</button>
            <button onClick={() => dispatch(addCharToMathExp('6'))}>6</button>
            <button onClick={() => dispatch(addCharToMathExp('-'))} data-type="operator">−</button>
            <button onClick={() => dispatch(addCharToMathExp('sqrt('))}>√</button>
            <button onClick={() => dispatch(addCharToMathExp('1'))}>1</button>
            <button onClick={() => dispatch(addCharToMathExp('2'))}>2</button>
            <button onClick={() => dispatch(addCharToMathExp('3'))}>3</button>
            <button onClick={() => dispatch(addCharToMathExp('+'))} data-type="operator">+</button>
            <button onClick={() => dispatch(addCharToMathExp('^'))}>^</button>
            <button onClick={() => dispatch(addCharToMathExp('00'))}>00</button>
            <button onClick={() => dispatch(addCharToMathExp('0'))}>0</button>
            <button onClick={() => dispatch(addCharToMathExp('.'))}>,</button>
            <button onClick={() => dispatch(setMathExp(result))} data-type="equals">=</button>
        </div>
    </div>;
}

export default Calculator;