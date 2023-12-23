import Footer from "./footer";
import Navbar from "./navbar";

export default function layout({children}) {
    return (
        <>
            <Navbar />
            <main className="pt-[10rem]">{children}</main>
            <Footer />
        </>
    )
}
