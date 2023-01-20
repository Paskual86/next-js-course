import MainHeader from "./main-header"
const Layout = (props: {children?: JSX.Element}) => {
    return <>
        <MainHeader />
        <main>
            {props.children}
        </main>
    </>
}

export default Layout