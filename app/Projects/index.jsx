import React, { ReactNode } from 'react'
import Section from '@/components/Section'

import { projectsItems } from '@/lib/data'

import ProjectItem from "@/components/ProjectItem"

function Projects() {
    return (
        <Section SEC_ID="projects" initial_animation={true}>
            <div className='text-center w-full'>
                <h2>Projects</h2>

                <div className='flex flex-col items-center'>
                    {
                        projectsItems.map((item, idx) => <ProjectItem key={idx}>{item}</ProjectItem>)
                    }
                </div>

            </div>
        </Section>
    )
}

export default Projects
