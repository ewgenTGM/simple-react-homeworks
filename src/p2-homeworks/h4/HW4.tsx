import React, { ChangeEvent, useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import s from './HW4.module.css';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import AlternativeSuperButton from './common/c2-SuperButton/AlternativeSuperButton';

function HW4() {
	const [text, setText] = useState<string>('');
	const error = text.trim() ? '' : 'error: empty field';
	const showAlert = () => {
		alert(error ? 'введите текст...' : text);
		setText('');
	};

	const [checked, setChecked] = useState<boolean>(false);
	const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>
		setChecked(e.currentTarget.checked);

	return (
		<div>
			<hr />
			homeworks 4
			<div>
				<SuperInputText
					value={text}
					onChangeText={setText}
					onEnter={showAlert}
					error={error}
					className={s.blue}
					spanClassName={s.italic_text}
				/>
				<div className={s.column}>
					<SuperButton
						bgColor='blue'
						onClick={showAlert}
						className={s.bold_text}
					>
						Blue
					</SuperButton>

					<SuperButton
						bgColor='green'
						onClick={showAlert}
						className={s.italic_text}
					>
						Green
					</SuperButton>

					<SuperButton
						bgColor='red'
						onClick={showAlert}
						className={`${s.italic_text} ${s.bold_text}`}
					>
						Red
					</SuperButton>

					<SuperButton>None</SuperButton>
				</div>

				<div>
					<SuperCheckbox
						checked={checked}
						onChangeChecked={setChecked}
					>
						Some text
					</SuperCheckbox>
				</div>

				<div>
					<SuperCheckbox checked={checked} onChange={testOnChange}>
						Not random text
					</SuperCheckbox>
				</div>
			</div>
			<hr />
			<AlternativeSuperButton
				w={150}
				h={50}
				color={'red'}
				onClick={() => alert('Hello World')}
			>
				Children text
			</AlternativeSuperButton>
		</div>
	);
}

export default HW4;
