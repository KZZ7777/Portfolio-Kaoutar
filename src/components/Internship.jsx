export default function Internship() {
    return (
        <section id="internship" className="w-full px-[10%] py-16 scroll-mt-20">
            <div className="text-center mb-16">
                <h4 className="text-xl font-Ovo mb-2">Experience</h4>
                <h2 className="text-5xl font-Ovo">Internship</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual */}
                <div className="relative group mx-auto max-w-md">
                    <img 
                        src='./assets/deskdrive-company.png' 
                        alt="Internship visual" 
                        className="w-full rounded-3xl shadow-xl transform transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/50  w-full h-1/3 rounded-b-3xl"></div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <p className="max-w-xl font-Ovo">
                        DeskDrive develops an integrated CRM and ERP platform that enables businesses to streamline administration, 
                        planning, and customer management within a single centralized system, 
                        with flexible features tailored to each client's specific requirements.
                    </p>

                   <div className="p-6 rounded-2xl shadow-md max-w-xl space-y-3 border border border-purple-400/20 hover:border-purple-400/40">
                        <h3 className="font-Ovo mb-2">Contact Info:</h3>
                        <ul className="space-y-1 font-Ovo">
                            <li><strong>Locatie:</strong> Liersebaan 12, 2240 Zandhoven, België</li>
                            <li><strong>Telefoon:</strong> +32  3  410  16  20</li>
                            <li><strong>Email:</strong> info@zandhoven.be</li>
                            <li><strong>Website:</strong> <a href="https://www.zandhoven.be/" className="relative text-purple-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"> zandhoven.be</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}  