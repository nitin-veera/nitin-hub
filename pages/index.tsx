import Metatags from "@/components/Metatags";
//import Typed from 'react-typed';


export default function Home() {
  return (
    <main>
        <Metatags />
        <div className={"flex flex-col justify-center items-center min-h-screen"}>
            <div className={"max-w-[900px] m-8"}>
                <div className={""}>
                    {/*<Typed*/}
                    {/*    strings={[*/}
                    {/*        'Hi, I\'m Nitin']}*/}
                    {/*    typeSpeed={40}*/}
                    {/*    className={"text-4xl sm:text-5xl md:text-6xl mb-8"}*/}
                    {/*/>*/}
                    <h1>Hi, I&apos;m Nitin</h1>
                    <nav className={"block mt-8"}>
                        <a href={"https://github.com/nitin-veera"} target="_blank" rel="noopener noreferrer">Github</a>
                        &nbsp; &#124; &nbsp;
                        <a href={"https://linkedin.com/in/nitin-veeraperumal/"} target="_blank" rel="noopener noreferrer">Linkedin</a>
                        &nbsp; &#124; &nbsp;
                        <a href={"mailto:nitinveera@ucla.edu"} target="_blank" rel="noopener noreferrer">Email</a>
                    </nav>
                </div>
                <section className={"block"}>
                    <h3>Currently, I&apos;m:</h3>
                    <ul>
                        <li>👨🏾‍💻 a student at UCLA studying math and computer science</li>
                        <li>📲 learning web and iOS development so I can build cool things</li>
                    </ul>
                    <h3 className={"mt-8 mb-4"}>In my free time I enjoy:</h3>
                    <ul>
                        <li>🏋🏾 lifting weights and chugging protein shakes</li>
                        <li>🥣 watching cartoons while eating copious amounts of cereal</li>
                    </ul>
                </section>
            </div>
        </div>
    </main>
  )
}