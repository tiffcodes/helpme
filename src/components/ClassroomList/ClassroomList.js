import React from 'react';
import Container from '../Classroom/Container';

const ClassroomList = (props) => {
    console.log('props', props);
    return (
        <ul>
            {props.classrooms.map((classroom) => {
                return (
                    <Container
                      classroomName={classroom.name}
                      key={`classroom-${classroom.id}`}
                      deleteQuestionFromDB={props.deleteQuestionFromDB}
                      updateQuestionInDB={props.updateQuestionInDB}
                      createQuestionInDB={props.createQuestionInDB}
                    />
                );
            })}
        </ul>
    );
};

export default ClassroomList;
