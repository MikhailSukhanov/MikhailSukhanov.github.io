import { evaluate, round } from 'mathjs';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { type PayloadAction } from '@reduxjs/toolkit';
import styles from './calculator.module.scss';
import { setMathExp, addCharToMathExp } from '../../../store/slices';
import { useDirectProjectLink } from '../../../store/projects.ts';
import { useAppDispatch, useAppSelector } from '../../../store/store.ts';

interface IButton {
    label: string,
    action: () => PayloadAction<string>,
    type?: string
}

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

    const result = useMemo(() => evalMathExp(mathExpression), [mathExpression]);
    const buttons: IButton[] = [
        {label: 'AC', action: () => setMathExp(''), type: 'operator'},
        {label: '(', action: () => addCharToMathExp('('), type: 'operator'},
        {label: ')', action: () => addCharToMathExp(')'), type: 'operator'},
        {label: '⇦', action: () => setMathExp(mathExpression.slice(0, -1)), type: 'operator'},
        {label: '÷', action: () => addCharToMathExp('/'), type: 'operator'},
        {label: 'π', action: () => addCharToMathExp('pi')},
        {label: '7', action: () => addCharToMathExp('7')},
        {label: '8', action: () => addCharToMathExp('8')},
        {label: '9', action: () => addCharToMathExp('9')},
        {label: '×', action: () => addCharToMathExp('*'), type: 'operator'},
        {label: 'e', action: () => addCharToMathExp('e')},
        {label: '4', action: () => addCharToMathExp('4')},
        {label: '5', action: () => addCharToMathExp('5')},
        {label: '6', action: () => addCharToMathExp('6')},
        {label: '−', action: () => addCharToMathExp('-'), type: 'operator'},
        {label: '√', action: () => addCharToMathExp('sqrt(')},
        {label: '1', action: () => addCharToMathExp('1')},
        {label: '2', action: () => addCharToMathExp('2')},
        {label: '3', action: () => addCharToMathExp('3')},
        {label: '+', action: () => addCharToMathExp('+'), type: 'operator'},
        {label: '^', action: () => addCharToMathExp('^')},
        {label: '00', action: () => addCharToMathExp('00')},
        {label: '0', action: () => addCharToMathExp('0')},
        {label: ',', action: () => addCharToMathExp('.')},
        {label: '=', action: () => setMathExp(result), type: 'equals'}
    ];
    const dispButtons = buttons.map(btn => <button key={btn.label} onClick={() => dispatch(btn.action())} data-type={btn.type}>{btn.label}</button>);

    return <div className={styles.container}>
        <div className={styles.result}>{result === mathExpression ? '' : result}</div>
        <input onChange={e => dispatch(setMathExp(e.target.value))} value={mathExpression}/>
        <div className={styles.buttons}>{dispButtons}</div>
    </div>;
}

export default Calculator;