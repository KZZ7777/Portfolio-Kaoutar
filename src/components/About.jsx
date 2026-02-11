export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'firebase', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, Next Js',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">As a Programming graduate student, I enjoy experimenting and solving problems by figuring things out myself. I'm curious, quick to learn, and see every challenge as an opportunity to build something new while continuing to grow. Currently, I'm doing an internship at DeskDrive, where I'm gaining hands-on experience in real-world projects and sharpening my skills in software development. I'm passionate about creating practical solutions and continuously improving both my technical and problem-solving abilities..</p>
                </div>
            </div>
        </div>
    )
}