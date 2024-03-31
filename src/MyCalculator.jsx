import { useState } from 'react';
import styles from './App.module.css';

export function MyCalculator() {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const OPERATORS = ['+', '-', '=', 'C'];
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('')

	const output = operand1 + operator + operand2 || '0';
	const resultClass = result ? styles.green : ''

	const reset = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
	};


	const calculateResult = () => {
		if(operand1 && operator && operand2) {
			if(operator === '+') {
				setResult(Number(operand1) + Number(operand2))
			} else if (operator === '-') {
				setResult(Number(operand1) - Number(operand2))
			}
		}
		reset()
	}


	return (
		<div className={styles.app}>
			<div className={styles.screen + ' ' + resultClass}>{result || output}</div>
			<div className={styles.buttons}>
				<div className={styles.leftGroup}>
					{NUMS.map((num) => {
						return (
							<button
								key={num}
								className={styles.button}
								onClick={() => {
									if (operator === '') {
										setOperand1(operand1 + num);
									} else {
										setOperand2(operand2 + num);
									}
								}}
							>
								{num}
							</button>
						);
					})}
				</div>
				<div className={styles.rightGroup}>
					{OPERATORS.map((btn) => {
						return (
							<button
								key={btn}
								className={styles.button}
								onClick={() => {
									if (operand1) {
										if (btn === '+' || btn === '-') {
											setOperator(btn);
										}
									}

									if (btn === '=') {
										calculateResult()
									}


									if (btn === 'C') {
										reset();
										setResult('')
									}
								}}
							>
								{btn}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
