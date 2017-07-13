import React from 'react';
import Classroom from './Classroom';
import renderer from 'react-test-renderer';

test('render the classroom comp', () => {
	const component = renderer.create(<Classroom />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
