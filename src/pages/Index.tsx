import { classNames, projects } from "../constant";

function ProjectList() {
    return (
        <ul role="list" className="divide-y divide-gray-100 border border-white rounded-md">
            {projects.map((project, index) => (
                <li key={index} className="flex justify-between gap-x-6 py-5 px-6 ">

                    <div className="flex min-w-0 gap-x-4">
                        <p className="text-xl">{index + 1}.</p>
                        <div className="min-w-0 flex-auto">
                            <p className="text-base sm:text-xl font-semibold">{project.title}</p>
                            <p className="mt-1 text-sm sm:text-lg">{project.stack}</p>
                            <p className="mt-1 text-sm sm:text-lg">{project.duration}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a
                            href={"#/project/" + project.id}
                            className={classNames(
                                'text-gray-300 hover:bg-white/5 hover:text-white',
                                'rounded-md px-3 py-2 text-xl font-medium',
                            )}
                        >
                            View
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default function Index() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-6">Introduction</h1>
                <div className="flex flex-col-reverse sm:flex-row gap-6 ">
                    <div className="w-full sm:w-9/12">
                        <p className="leading-relaxed sm:text-lg">
                            Welcome to my portfolio! My name is Sam Heng Zi Sam. I am a software engineering fresh graduate from <b>Universiti
                            Tunku Abdul Rahman (UTAR)</b>. I have been graduated since <b>September, 2024</b> with merit (3.54 GPA). I am expertise in
                            Web Development Projects. My stacks are <b>Laravel, React.js, TypeScript, MySQL</b> and etc. Besides that, I am able to develop
                            Mobile Applications using <b>React Native</b>. Additionally, I have the knowledge of using DevOps tools such as <b>Docker,
                            Git, Jenkins</b> and etc. I have 3 months experience as a Laravel Web Developer Intern at <b>Delhub Digital Sdn Bhd. </b>
                            Moreover, I have implemented a <b>Children Monitoring System</b> for my final year project and a <b>Task Management System</b>.
                            I am a fast learner and a quick adapter to new environment.
                        </p>
                    </div>
                    <div className="flex justify-center sm:w-1/4 sm:justify-end">
                        <img
                            className="rounded-full object-cover w-3/4"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                <ProjectList />
            </section>
        </>

    );
}