export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/KZZ7777">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/kaoutar-za%C3%AFd-325ab6255/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}