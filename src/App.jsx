import Content from "./components/content";
import Header from "./components/header";
import img from "./assets/img/big-14.jpg"
import Footer from "./components/footer";


export default function Main(){
    return(
        <main className="w-full justify-center flex flex-wrap font-family: ui-serif, Georgia, Cambria bg-cover bg-no-repeat" style={{backgroundImage: `url(${img})`}}>
            <div className="w-full 2xl:container flex flex-wrap bg-black/60">
                <Header />
                
            </div>
            <div className="w-full 2xl:container flex flex-wrap bg-black/60">
                <Content />
            </div>
            <div className="w-full 2xl:container flex flex-wrap bg-stone-800">
                <Footer />
            </div>
        </main>
    )
}

