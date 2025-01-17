import Image from "next/image";
import Link from "next/link";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Bio from './components/Bio'
import Products from './components/Products'
import Technologies from './components/Technologies'
import Background from './components/Background'

export default function Home() {
  return (<>
    < Nav/>
    <main className="flex min-h-screen flex-col space-y-4 items-center justify-around">
      < Bio />
      < Products />
      < Background />
      {/* <div className="w-4 h-[100vh] bg-white"></div> */}
    </main>
    < Footer />
  </>);
}
