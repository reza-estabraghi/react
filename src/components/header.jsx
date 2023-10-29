import logo from "./../assets/img/logo1.png"

export default function Header(){
    return (
        <header className="w-full h-[100px] flex flex-wrap">
            <nav className="w-full  h-full flex flex-wrap">
                <figure className="w-[50%] md:w-[30%] h-full flex items-center pl-5">
                    <img src={logo} alt="logo" className="w-[40%] md:w-[30%] h-[80%] object-cover" />
                </figure>
                <ul className="hidden md:flex w-[70%] h-full justify-between text-white px-52 items-center">
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">home</a></li>
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">features</a></li>
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">gallery</a></li>
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">elements</a></li>
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">about</a></li>
                    <li className="w-[10%] h-full flex items-center justify-center"><a href="#" className="list-none uppercase font-bold">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}