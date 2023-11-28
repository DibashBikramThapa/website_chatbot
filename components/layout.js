import Footer from "./footer";
import Navbar from "./navbar";

export default function layout({children}) {
    return (
        <>
            <Navbar />
            <main className="pt-[8rem]">{children}</main>
            <Footer />
        </>
    )
}
