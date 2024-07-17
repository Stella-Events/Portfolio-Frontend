import React from 'react'

const ProjectCard = ({ image, projectName, description, contributors, skills, links, nameOfInstitution }) => {
    return (
        <div>
            <div className="h-60 w-[850px] bg-purple-900 border-6 border-orange-600">
                <div>
                    <div>{image}</div>
                </div>

                <div>
                    <div>{projectName}</div>
                    <div>{description}</div>
                    <div>{contributors}</div>
                    <div>{skills}</div>
                    <div>{nameOfInstitution}</div>
                </div>

                <div>
                    <div>{links}</div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard