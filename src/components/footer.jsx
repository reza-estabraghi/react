import logo from "./../assets/img/logo1.png"




export default function Footer(){
    return (
        <footer className="w-full h-[300px] flex flex-wrap">
            <figure className="w-[50%] md:w-[10%] h-full flex justify-center items-center pl-5">
                <img src={logo} alt="logo" className="w-[40%] md:w-full h-[25%] object-cover"/>
            </figure>
            <ul className="hidden md:flex w-[60%] h-full justify-between text-slate-600 px-52 items-center">
                <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">home</a></li>
                <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">gallery</a></li>
                <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">about</a></li>
                <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">contact</a></li>
            </ul>
            <div className="w-[30%] px-28 flex justify-around items-center h-full">
                <span className="text-2xl">🕊</span>
                <span className="text-2xl">💓</span>
                <span className="text-2xl">🌎</span>
            </div>
        </footer>
    )
}