import Metatags from "@/components/Metatags";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main>
        <Metatags />
        <div className={"flex flex-col justify-center items-center min-h-screen"}>
            <div className={"max-w-[900px] m-8"}>
                <div className={""}>
                    <TypeAnimation
                        sequence={[
                            500,
                            'Hi ',
                            1000,
                            'Hi, I\'m Nitin',
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        cursor={true}
                        className={"text-4xl sm:text-6xl md:text-6xl mb-8"}
                        speed={20}
                    />
                    <nav className={"block mt-8"}>
                        <a href={"https://github.com/nitin-veera"} target="_blank" rel="noopener noreferrer">Github</a>
                        &nbsp; &#124; &nbsp;
                        <a href={"https://linkedin.com/in/nitin-veeraperumal/"} target="_blank" rel="noopener noreferrer">Linkedin</a>
                        &nbsp; &#124; &nbsp;
                        <a href={"mailto:nitinveera@ucla.edu"} target="_blank" rel="noopener noreferrer">Email</a>
                    </nav>
                </div>
                <section className={"block"}>
                    <h3>⚠️ under construction ⚠️</h3>
                </section>
                <footer className={"my-8"}>
                    <p className={"my-3 text-gray-400"}>Nitin Veeraperumal © 2024 </p>
                </footer>
            </div>
        </div>
    </main>
  )
}