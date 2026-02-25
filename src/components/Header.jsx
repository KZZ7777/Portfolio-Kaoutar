export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"> 
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hello! I&apos;m Kaoutar Zaïd
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Software developer based in Antwerp.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">Currently doing an internship at DeskDrive, where I work on real-world projects. 
                This portfolio shares my journey and insights as I grow as a developer.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="/myblog"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    see my blogs <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a> 
            </div>
        </div>
    )
}  