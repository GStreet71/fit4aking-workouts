import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import ExerciseCard from '../components/ExerciseCard'

function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={ "workout" } header = { "welcome to"} title = 
        {["Get", " FIT", ", Royalty!"]}>
            <div className="flex flex-col gap-4">
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={ i } exercise={ exercise } key={ i } />
                    )
                })}
            </div>
        </SectionWrapper>
        
    )
}

export default Workout