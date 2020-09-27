import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        { exercises.map((exercise) => (
            <Card 
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imgs={exercise.imgs}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />
        ))}
    </div>    
)


export default ExerciseList