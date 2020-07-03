import NavBar from './NavvBar'
import Head from 'next/head'

const Layout =(props)=>{
    return(<div>
        <Head>
            <title>
                MajCoin
            </title>
            <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
        <NavBar/>
        <div className="container">
        {props.children}
        </div>
        
    </div>)
}

export default Layout